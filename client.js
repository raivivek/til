var fuse;
var nextQuery = null;
var processing = false;
var currentQuery = null;
var DEBUG = false;
var searchQuery = '';
var pageURL = $(location).attr('href');

$(function() {
  const data_uri_root = "https://github.com/raivivek/til/blob/master/";
  const category_uri_root = "https://github.com/raivivek/til/tree/master/";
  $('#query').focus();

  var worker = new Worker('resources/scripts/worker2.js');
  $.getJSON('https://raw.githubusercontent.com/raivivek/til/master/data.json')
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
        category_uri_root + tils[i].Category +
        '">' + 
        tils[i].Category.toLowerCase() + "</a>/" +
        '<a href="' +
        data_uri_root + tils[i].Category.toLowerCase() + "/" +
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
