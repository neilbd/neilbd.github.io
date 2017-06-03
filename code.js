var main = function(){

	$("#whole").fadeIn("slow");

	var pos = null;

	$("#header").click(function(){
		$("*").animate({"scrollTop": "0"}, 300);
	});

	$("#biography").click(function(){
		pos = $(".biography-body").position();
		$("*").animate({"scrollTop": pos.top.toString()}, 300);
	});

	$("#experience").click(function(){
		pos = $(".experience-body").position();
		$("*").animate({"scrollTop": pos.top.toString()}, 300);
	});

	$("#activities").click(function(){
		pos = $(".activities-body").position();
		$("*").animate({"scrollTop": pos.top.toString()}, 300);
	});

	$("#contact").click(function(){
		pos = $(".contacts-body").position();
		$("*").animate({"scrollTop": pos.top.toString()}, 300);
	});

	$("#biography").mouseenter(function(){
		$(this).addClass("colorb", 300);
	});

	$("#experience").mouseenter(function(){
		$(this).addClass("colore", 300);
	});

	$("#activities").mouseenter(function(){
		$(this).addClass("colora", 300);
	});

	$("#contact").mouseenter(function(){
		$(this).addClass("colorc", 300);
	});

	$("#biography").mouseleave(function(){
		$(this).removeClass("colorb", 300);
	});

	$("#experience").mouseleave(function(){
		$(this).removeClass("colore", 300);
	});

	$("#activities").mouseleave(function(){
		$(this).removeClass("colora", 300);
	});

	$("#contact").mouseleave(function(){
		$(this).removeClass("colorc", 300);
	});

}

$(document).ready(main);