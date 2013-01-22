// 
//	jQuery Validate example script
//
//	Prepared by David Cochran
//	
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions
	
		$('#contact-form').validate({
	    rules: {
	      name: {
	        minlength: 3,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      subject: {
	      	minlength: 2,
	        required: true
	      },
	      message: {
	        minlength: 5,
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