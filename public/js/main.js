$(document).ready(function() {
    $("#getQuote").on("click", function(){
    	$.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(data) {
    		 	var index = Math.floor(Math.random() * data.length)
    			$(".mainQuote").html(data[index].quote + "<p>— " + data[index].author + "</p>")
		});
	});
	$("#tweetMe").on("click", function() {
		window.open('https://twitter.com/intent/tweet?hashtags= computersciencequotes&text=' + encodeURIComponent($(".mainQuote").text()));
	});
});