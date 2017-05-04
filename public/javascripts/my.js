$("#contact_reset").click(function(){
	$("#concat_form input").val('');
	$("#concat_form textarea").val('');
});

$("#contact_sub").click(function(){
	$('#concat_form').submit();
});