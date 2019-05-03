$(document).ready(function(){
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$('#login-modal').modal();

	$('b')
		.mouseenter(function(){
			$(this).css('color','rgba(74, 142, 243)')
		})

		.mouseleave(function(){
			$(this).css('color','white')
		});

});