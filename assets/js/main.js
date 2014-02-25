$(function(){
	$('#issue').hide();
	$('.badge').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).slideToggle(200);
	});
});