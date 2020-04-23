importScripts('string_score.min.js');

var data;
var DEBUG = false;

var fields = ['Category', 'TIL'];

onmessage = function(e) {
    if (e.data.type === 'data') {
        if (DEBUG) console.log('Got data');
        data = e.data.data;
        for (var i = 0; i < data.length; ++i) {
            for (var f = 0; f < fields.length; ++f) {
                data[i][fields[f]] = data[i][fields[f]].toLowerCase();
            }
        }
    } else if (e.data.type === 'query') {
        var query = e.data.query;
        query = query.toLowerCase();
        var terms = query.split(/\s+/);
        console.log(terms);
        var fuzz = 0.5;
        console.log('got query: ', query);
        for (var j = 0; j < data.length; ++j) {
            data[j].score = {'Category': 0, 'TIL': 0};
            data[j].score.total = 0;
            for (var t = 0; t < terms.length; ++t) {
                var maxTermScore = 0, maxField;
                for (var f = 0; f < fields.length; ++f) {
                    var termFieldScore = data[j][fields[f]].score(terms[t], fuzz);
                    if (termFieldScore > maxTermScore) {
                        maxTermScore = termFieldScore;
                        maxField = f;
                    }
                }
                data[j].score[fields[maxField]] += maxTermScore;
            }
            for (var f = 0; f < fields.length; ++f) {
                data[j].score.total += Math.pow(data[j].score[fields[f]] + 1, 2);
            }
        }
        data.sort(function(a, b) {
            return b.score.total - a.score.total;
        });
        var results = data.slice(0, 40);
        console.log('tils: ', results);
        postMessage(results);
    }
};
