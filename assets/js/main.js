$(function(){
	$('#issue').hide();
	$('.badge').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).slideToggle(200);
	});
	$('.gifswap').each(function(){
		var starter = $(this).find('.starter');
		setTimeout(function(){
			starter.hide();
		}, 18000);
	});
});