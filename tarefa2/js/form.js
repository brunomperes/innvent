$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions
	
		$('#form').validate({
	    rules: {
	      name: {
	        minlength: 3,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      password: {
	      	minlength: 6,
	        required: true
	      },
	      confirm_password: {
	      	equalTo: "#password",
	        required: true
	      }
	    },
	    highlight: function(label) {
	    	// $(label).closest('.control-group').removeClass('success');
	    	$(label).text('').removeClass('valid');
	    	$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
			$(label).text('').addClass('valid');
			$(label).closest('.control-group').removeClass('error');
			// $(label).closest('.control-group').addClass('success');
	    }
	  });

}); // end document.ready