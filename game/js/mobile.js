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
	if(isDesktop){
		// Desktop: refit canvas on browser-window resize (drag corner, browser zoom).
		// Vendor only listened to mobile orientationchange — desktop got no resize hook
		// at all, leaving the canvas stale until reload.
		$(window).off('resize.gameFit').on('resize.gameFit', function(){
			if(typeof resizeGameFunc === 'function') resizeGameFunc();
		});
		return;
	}
	// Mobile / tablet / foldable: listen to BOTH `orientationchange` AND `resize`.
	// Foldables (Galaxy Fold unfold, Z Flip outer→inner), Surface Duo span, and
	// iOS Safari URL-bar collapse fire only `resize`, not `orientationchange`.
	// Debounce dropped from 1000ms to 250ms so the canvas isn't blank for 1s+.
	var handler = function(){
		$('#canvasHolder').hide();
		$('#rotateHolder').hide();
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkMobileOrientation, 250);
	};
	$(window).off('orientationchange resize').on('orientationchange resize', handler);
	checkMobileOrientation();
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
		// Don't unpause the Ticker if the user explicitly paused via the modal —
		// otherwise vendor's per-tick logic (cars, trains, collision) resumes
		// behind the overlay and can kill the frog while it's "paused".
		var pauseShown = false;
		var pm = document.getElementById('pauseModal');
		if (pm && pm.classList.contains('show')) pauseShown = true;

		try {
			if (typeof createjs !== 'undefined' && createjs.Ticker && !pauseShown) {
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