$(document).ready(function() {
    $("#contactForm").on("submit",
		function(){
			sendAjaxForm();
			return false; 
		}
	);
});
 
function sendAjaxForm() {
    $.ajax({
        url: 'form.php',
        type: "POST",
        dataType: "html",
        data: $("#contactForm").serialize(),
        success: function(response) {
            $('.form-send-success').addClass('show');
            $("#contactForm input:not([type='submit']), #contactForm textarea").val('');
            setTimeout(() => $('.form-send-success').removeClass('show'), 5000);
    	},
    	error: function(response) { // Данные не отправлены
            // $('#result_form').html('Ошибка. Данные не отправлены.');
            console.error(response);
    	}
 	});
}