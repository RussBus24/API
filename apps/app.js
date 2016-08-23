$(document).ready(function(){
	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		console.log(searchTerm);
		getResults(searchTerm);
	});
});

/*To get results*/
function getResults(searchTerm) {
	$.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data) {
			showResults(data);
			console.log(data);
		});
}

/*To retrieve results*/
function showResults(data) {
	var html = "";
	$.each(data, function(index, value) {
		html += '<p>' + value.Title + '</p>';
		console.log(value.Title);
	});
	$('#search-results').html(html);
}