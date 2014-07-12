(function($) {
	
   	$(document).ready(function($) {
    	$.each( '.FlickrImage', function( key, obj ) {
  			$.get('./ajax/getOwner.php?id='+$(obj).data('owner'), function( data ) {
  				console.log(data);
  			});
		});
	});
   
})(jQuery);