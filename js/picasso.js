$("section img").on("click", function() {
	var imageSrc=$(this).attr("src");
	$("#lightbox img").attr("src", imageSrc);
	$("#lightbox").fadeIn(250)
});

$("#lightbox").on("click", function(){
	$("#lightbox").fadeOut(250)
})

$(document).on("scroll", function (){
	var distance = $(document).scrollTop();
	$("#distance").html(distance + " pixels down");

	if(distance > 60){
		$("body").addClass("blue");
	} 
	else { 
		$("body").removeClass("blue");
	}

	$("body").toggleClass("rose", distance > 1250);
	$("body").toggleClass("cubism", distance > 2560);

});











