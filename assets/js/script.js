$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(){
	if(event.which==13)
	{
		var text=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+text+"</li>");
	}
} );
$(".fa-align-justify").click(function(){
	$("input[type='text']").fadeToggle();
});