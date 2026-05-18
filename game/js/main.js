////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////
var stageW=1280;
var stageH=720;
var contentW = 1160;
var contentH = 640;

const viewport = {isLandscape:true};
const landscapeSize = {w:stageW, h:stageH, cW:contentW, cH:contentH};
const portraitSize = {w:720, h:1280, cW:640, cH:1080};

/*!
 * 
 * START BUILD GAME - This is the function that runs build game
 * 
 */
function initMain(){
	if(isDesktop){
		$('#canvasHolder').show();	
	}
	
	initGameCanvas(stageW,stageH);
	buildGameCanvas();
	buildGameButton();
	if ( typeof buildScoreBoardCanvas == 'function' ) { 
		buildScoreBoardCanvas();
	}
	
	goPage('main');
	
	checkMobileOrientation();
	resizeCanvas();
}

var windowW=windowH=0;
var scalePercent=0;
const dpr = window.devicePixelRatio || 1;
const offset = {x:0,y:0,left:0,top:0};

/*!
 * 
 * GAME RESIZE - This is the function that runs to resize and centralize the game
 * 
 */
var _resizeGameTimer;
function resizeGameFunc(){
	// Coalesce rapid resize events (window drag, foldable unfold, iOS URL bar
	// collapse all fire many `resize`s in a burst). Without this, vendor
	// queued a fresh setTimeout on every call -- visible canvas blink.
	clearTimeout(_resizeGameTimer);
	_resizeGameTimer = setTimeout(function() {
		$('.mobileRotate').css('left', checkContentWidth($('.mobileRotate')));
		$('.mobileRotate').css('top', checkContentHeight($('.mobileRotate')));
		
		windowW = window.innerWidth;
		windowH = window.innerHeight;
		// Fit the canvas to the viewport while preserving aspect. Vendor
		// previously clamped scale at <=1 plus a narrow uplift branch — result:
		// on 1366x768 (most common laptop) and many tablets the canvas rendered
		// at native 1280x720 with huge letterbox. Simple Math.min is correct.
		scalePercent = Math.min(windowW/stageW, windowH/stageH);
		
		const cssWidth = stageW * scalePercent;
		const cssHeight = stageH * scalePercent;
		
		offset.left = 0;
		offset.top = 0;
		
		if(cssWidth > windowW){
			offset.left = -((cssWidth) - windowW);
		}else{
			offset.left = windowW - (cssWidth);
		}
		
		if(cssHeight > windowH){
			offset.top = -((cssHeight) - windowH);
		}else{
			offset.top = windowH - (cssHeight);	
		}
		
		offset.x = 0;
		offset.y = 0;
		
		if(offset.left < 0){
			offset.x = Math.abs((offset.left/scalePercent)/2);
		}
		if(offset.top < 0){
			offset.y = Math.abs((offset.top/scalePercent)/2);
		}

		const gameCanvas = document.getElementById("gameCanvas");
		const context = gameCanvas.getContext("2d");

		gameCanvas.style.width = cssWidth + "px";
		gameCanvas.style.height = cssHeight + "px";

		gameCanvas.style.left = (offset.left/2) + "px";
		gameCanvas.style.top = (offset.top/2) + "px";
		
		gameCanvas.width = stageW * dpr;
		gameCanvas.height = stageH * dpr;

		
		
		$(window).scrollTop(0);
		resizeCanvas();
		
		if ( typeof resizeScore == 'function' ) { 
			resizeScore();
		}
	}, 100);	
}