
(function(window, $) {

	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	var y = 0,
		f = 0.45;

	function move() {
		y -= f;
		$('#banner').css('background-position', 'center ' + y + 'px');
	  requestAnimationFrame(move);
	}
	move();

})(window, jQuery);



$(document).ready(function() {
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
	enabled: true,
	navigateByImgClick: true,
	tPrev: 'Previous (Left arrow key)', // title for left button
	tNext: 'Next (Right arrow key)', // title for right button
	tCounter: '%curr% of %total%', // markup of counter
	preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>' + item.el.attr('desc') +'</small>';
      }
    }




  });
});




