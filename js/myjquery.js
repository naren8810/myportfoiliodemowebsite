$(document).ready(function(){

	alert("jQuery Enabld for animation adn effects");

	$("#mybtnSeejQuery").click(function(){
		$("#portfolioDiv").slideToggle("slow", function(){
			alert("Portfolio Toggled Sow/Hide");
		});
	});

});
