////////////////////////////////////////////////////////////
// MOBILE
////////////////////////////////////////////////////////////
var resizeTimer;

/*!
 * 
 * START MOBILE CHECK - This is the function that runs for mobile event
 * 
 */
function checkMobileEvent(){
	if(!isDesktop){
		$( window ).off('orientationchange').on( "orientationchange", function( event ) {
			$('#canvasHolder').hide();
			$('#rotateHolder').hide();
			
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(checkMobileOrientation, 1000);
		});
		checkMobileOrientation();
	}
}

/*!
 * 
 * MOBILE ORIENTATION CHECK - This is the function that runs to check mobile orientation
 * 
 */
function checkMobileOrientation() {
	var isLandscape=false;
	if(window.innerWidth>window.innerHeight){
		isLandscape=true;
	}
	
	if($.editor.enable){
		viewport.isLandscape = edit.isLandscape;
	}else{
		viewport.isLandscape = isLandscape;	
	}
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc();
	$('#canvasHolder').show();
}

/*!
 *
 * TOGGLE ROTATE MESSAGE - This is the function that runs to display/hide rotate instruction
 *
 */
function toggleRotate(con){
	if(con){
		$('#rotateHolder').fadeIn();
	}else{
		$('#rotateHolder').fadeOut();
	}
	resizeGameFunc();
}

/*!
 *
 * VISIBILITY / BFCACHE RECOVERY
 * Mobile browsers (especially iOS Safari, Android Chrome) aggressively reclaim
 * GPU/canvas memory for background tabs. Returning to the tab leaves the canvas
 * blank with no redraw. Re-invoking resizeGameFunc() reassigns canvas width/height
 * which resets the 2D context and triggers a full redraw via CreateJS.
 *
 */
(function setupVisibilityRecovery(){
	var wasHidden = false;

	function refreshAfterReturn(){
		try {
			if (typeof createjs !== 'undefined' && createjs.Ticker) {
				createjs.Ticker.paused = false;
			}
		} catch (e) { /* createjs may not be ready yet */ }

		if (typeof resizeGameFunc === 'function') {
			resizeGameFunc();
		}
	}

	document.addEventListener('visibilitychange', function(){
		if (document.hidden) {
			wasHidden = true;
			try {
				if (typeof createjs !== 'undefined' && createjs.Ticker) {
					createjs.Ticker.paused = true;
				}
			} catch (e) { /* createjs may not be ready yet */ }
		} else if (wasHidden) {
			wasHidden = false;
			refreshAfterReturn();
		}
	});

	// bfcache restoration (mobile Safari especially)
	window.addEventListener('pageshow', function(event){
		if (event.persisted) {
			refreshAfterReturn();
		}
	});
})();