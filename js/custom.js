$(document).ready(function() {

	/* lightbox */
  $('.img-link').magnificPopup({
	  type:'image',
	  image: {
	  markup: '<div class="mfp-figure">'+
	            '<div class="mfp-close"></div>'+
	            '<div class="mfp-img"></div>'+
	            '<div class="mfp-bottom-bar">'+
	              '<div class="mfp-title"></div>'+
	              '<div class="mfp-counter"></div>'+
	            '</div>'+
	          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

	  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

	  titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
	  // Or the function that should return the title. For example:
	  // titleSrc: function(item) {
	  //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
	  // }

	  verticalFit: true, // Fits image in area vertically

	  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
	}
  });

  /* nav scroll */
  $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
});

});