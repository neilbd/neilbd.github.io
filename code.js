var main = function(){

	$("#whole").fadeIn("slow");

	$("#biography").click(function(){
		$("#intro").fadeOut(300);
		$(".activities-body").fadeOut(300);
		$(".contact-body").fadeOut(300);
		$(".experience-body").fadeOut(300);
		$(".biography-body").fadeIn(300);
	});

	$("#experience").click(function(){
		$("#intro").fadeOut(300);
		$(".activities-body").fadeOut(300);
		$(".contact-body").fadeOut(300);
		$(".biography-body").fadeOut(300);
		$(".experience-body").fadeIn(300);
	});

	$("#activities").click(function(){
		$("#intro").fadeOut(300);
		$(".experience-body").fadeOut(300);
		$(".contact-body").fadeOut(300);
		$(".biography-body").fadeOut(300);
		$(".activities-body").fadeIn(300);
	});

	$("#contact").click(function(){
		$("#intro").fadeOut(300);
		$(".activities-body").fadeOut(300);
		$(".experience-body").fadeOut(300);
		$(".biography-body").fadeOut(300);
		$(".contact-body").fadeIn(300);
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