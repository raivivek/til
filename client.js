var fuse;
var nextQuery = null;
var processing = false;
var currentQuery = null;
var DEBUG = false;
var searchQuery = '';
var pageURL = $(location).attr('href');

var addItem = function(item) {
  item = item.toLowerCase();
  var searchbase = localStorage.getItem('searched');
  if (searchbase) {
    searchbase = searchbase.replace(',' + item + ',', ',');
    searchbase = ',' + item + searchbase;
    localStorage.setItem('searched', searchbase);
  } else {
    localStorage.setItem('searched', ',' + item + ',');
  }

  $("ul.local-storage-list > li > a:contains('" + item + "')").each(function() {
    if ($(this).text() === item) {
      $(this).parent().remove();
    }
  });
  $('ul.local-storage-list').prepend(
    "<li><a href='' style='text-align: center'>" + item + '</a><br></li>'
  );
};

$(function() {
  const data_uri_root = "https://github.com/raivivek/til/blob/master/";
  const category_uri_root = "https://github.com/raivivek/til/tree/master/";
  $('#query').focus();

  // populate the left side localStorage list
  // if the localStorage exists, else hide div
  if (localStorage.getItem('searched')) {
    var history = localStorage.getItem('searched');
    $.each(history.split(','), function(index, item) {
      if (item != '') {
        $('ul.local-storage-list').append(
          "<li><a href='' style='text-align: center'>" + item + '</a><br></li>'
        );
      }
    });
    $('ul.local-storage-list').append('<br/><br/>');
  }

  var worker = new Worker('resources/scripts/worker2.js');
  $.getJSON('data/data.json')
    .success(function(json) {
      worker.postMessage({ type: 'data', data: json });
      $('#query').attr('placeholder', json.length + " tils and counting...");
      var search_query = $.url('?') && $.url('?').search;
      if (search_query) {
        while (search_query[search_query.length - 1] == '/') {
          search_query = search_query.slice(0, -1);
        }
        $('#query').val(search_query);
        search();
      } else {
        search();
      }
    })
    .error(function(jqxhr, status, err) {
      if (DEBUG) console.log(jqxhr, status, err);
    });

  $('ul.local-storage-list li a').click(function(e) {
    $('#query').val($(this).text());
    search();
    e.preventDefault();
  });

  worker.onmessage = function(tils) {
    processing = false;
    displaytils(tils.data);
    if (nextQuery !== null) {
      var query = nextQuery;
      nextQuery = null;
      search(query);
    }
  };

  function til_to_html(tils) {
    var html = '';
    for (var i = 0; i < 20; ++i) {
      html +=
        '<li><div class="til-div"><a target="_blank" class="category" href="' +
        category_uri_root + "/" +
        tils[i].Category +
        '">' + 
        tils[i].Category.toLowerCase() + "/" +
        "</a>" +
        '<a href="' +
        data_uri_root + "/" +
        tils[i].Category.toLowerCase() + "/" +
        tils[i].TIL +
        '">' +
        tils[i].TIL.toLowerCase() +
        '</a>' +
        ' </div> <li>';
    }
    return html;
  }

  function displaytils(tils) {
    $('.til-list').html(til_to_html(tils));
    /**
     * Bind a handler to a click on the til link to save the search in local storage
     *
     * Sample til HTML:
     * <a class="til-link">
     *    <div> ... </div>
     *    <h1> ... </h1>
     * </a>
     */
    $("a.til-link").click(function(e) {
      var query = $('#query').val().trim();
      addItem(query);
      $('div.local-storage-div').show();
    });
  }

  var search = _.debounce(function() {
    var query = $('#query')
      .val()
      .trim();
    if (processing) {
      nextQuery = query;
      return;
    }
    if (query === currentQuery) {
      return;
    }
    processing = true;
    currentQuery = query;
    worker.postMessage({ type: 'query', query: query });
    ga('send', 'event', 'Search', 'query', query);
  }, 200);

  $('#query').keydown(search);

  // function to update the query url
  $('#query').keyup(function() {
    searchQuery = $('#query')
      .val()
      .trim();
    window.history.replaceState(null, null, '?search=' + searchQuery);
  });
});
