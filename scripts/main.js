//Geting wiki api
console.log("//Geting wiki api ...");
console.log("//Printing the query word");
$(document).ready(function(){
  // $("#searchButton").on("click", function(){
	$(".search-button").on("click", function(){
		$("p").html("");
		// var myQuery = $("#searchQuery").val();
    var myQuery = $(".search-query-input").val();
		console.log(myQuery);
		$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + myQuery + "&limit=10&format=json&origin=*", function(wikicall){
			console.log(wikicall);
			for (var j = 0; j < 10; ++j){
				console.log(j);
				console.log(wikicall[1][j]);
				$("p").append("<a href = '" + wikicall[3][j] + "' >" + wikicall[1][j] + "</a><br>");
			}
		});
	});
});
