////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage;
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	const gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas",{ antialias: true });
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);
}

var safeZoneGuide = false;
var canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer;
var guideline, bg, bgP, logo, logoP;
var itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel;
var itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, resultBestTxt, buttonShare, buttonSave;
var resultTitleOutlineTxt,resultDescOutlineTxt,resultBestOutlineTxt,resultShareTxt,resultShareOutlineTxt,popTitleOutlineTxt,popDescOutlineTxt;
var buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$.share = {};

var worldContainer,cameraContainer,cameraShakeContainer,worldBgContainer,worldDirtContainer,worldRoadContainer,worldWoodContainer,worldObjectsContainer,worldParticlesContainer,statusContainer,scoreContainer,dirtContainer,frogContainer,frogInnerContainer,powerIconContainer,powerIconInnerContainer,frogPowerContianer,frogPowerInnerContainer,jumpGuideContainer,powersIntroContainer;
var itemPowers,bgPowers,itemBubble,itemBubbleInner,itemFreezeOverlay,itemGuide,itemFrog,itemFrogPower,itemFrogInner,itemFrogPowerInner,itemFrogShape,itemSplash,itemEagle,itemStatus,statusTxt,statusShadowTxt,scoreTxt,scoreOutlineTxt,scoreShadowTxt,touchScreen,resultShareOutlineTxt,resultTitleOutlineTxt,resultDescOutlineTxt,popTitleOutlineTxt,popDescOutlineTxt;
$.world = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	exitContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	shareContainer = new createjs.Container();
	shareSaveContainer = new createjs.Container();
	socialContainer = new createjs.Container();
	
	worldContainer = new createjs.Container();
	cameraContainer = new createjs.Container();
	cameraShakeContainer = new createjs.Container();
	worldBgContainer = new createjs.Container();
	worldDirtContainer = new createjs.Container();
	worldRoadContainer = new createjs.Container();
	worldWoodContainer = new createjs.Container();
	worldObjectsContainer = new createjs.Container();
	worldParticlesContainer = new createjs.Container();
	statusContainer = new createjs.Container();
	scoreContainer = new createjs.Container();
	dirtContainer = new createjs.Container();
	powerIconContainer = new createjs.Container();
	frogContainer = new createjs.Container();
	frogInnerContainer = new createjs.Container();
	powerIconContainer = new createjs.Container();
	powerIconInnerContainer = new createjs.Container();
	frogPowerContianer = new createjs.Container();
	frogPowerInnerContainer = new createjs.Container();
	jumpGuideContainer = new createjs.Container();
	powersIntroContainer = new createjs.Container();

	bg = new createjs.Bitmap(loader.getResult('background'));
	bgP = new createjs.Bitmap(loader.getResult('backgroundP'));
	
	logo = new createjs.Bitmap(loader.getResult('logo'));
	logoP = new createjs.Bitmap(loader.getResult('logoP'));

	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	
	//game
	itemFrog = createFrog();
	itemFrogInner = createFrog();
	itemFrogPower = null;
	itemFrogPowerInner = null;
	itemFrogShape = new createjs.Shape();

	itemBubble = new createjs.Bitmap(loader.getResult('itemBubble'));
	centerReg(itemBubble);
	itemBubbleInner = new createjs.Bitmap(loader.getResult('itemBubble'));
	centerReg(itemBubbleInner);
	itemBubble.regY = itemBubbleInner.regY = 65;

	itemFreezeOverlay = new createjs.Bitmap(loader.getResult('itemFreezeOverlay'));
	itemFreezeOverlay.alpha = 0;
	itemGuide = new createjs.Bitmap(loader.getResult('itemGuide'));
	centerReg(itemGuide);
	jumpGuideContainer.addChild(itemGuide);

	var _frameW = 142;
	var _frameH = 110;
	var _speed = 1.5;
	var _frame = {"regX":_frameW/2, "regY":100, "width": _frameW, "height": _frameH, "count": 15};
	var _animations = {
		splash:{frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], speed:_speed, next:'splashend'},
		splashend:{frames: [14], speed:_speed, next:'splashend'},
	};
						
	var splashData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemSplash').src],
		"frames": _frame,
		"animations": _animations
	});
	
	itemSplash = new createjs.Sprite(splashData, "splash");
	itemSplash.framerate = 20;

	var _frameW = 192;
	var _frameH = 225;
	var _speed = .5;
	var _frame = {"regX":_frameW/2, "regY":155, "width": _frameW, "height": _frameH, "count": 2};
	var _animations = {
		fly:{frames: [0,1], speed:_speed, next:'fly'},
	};
						
	var eagleData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemEagle').src],
		"frames": _frame,
		"animations": _animations
	});
	
	itemEagle = new createjs.Sprite(eagleData, "fly");
	itemEagle.framerate = 20;

	itemStatus = new createjs.Bitmap(loader.getResult('itemStatus'));
	centerReg(itemStatus);
	statusTxt = new createjs.Text();
	statusTxt.font = "28px daily_boldregular";
	statusTxt.color = '#fff';
	statusTxt.textAlign = "center";
	statusTxt.textBaseline='alphabetic';
	statusTxt.y = 10;
	statusShadowTxt = new createjs.Text();
	statusShadowTxt.font = "28px daily_boldregular";
	statusShadowTxt.color = '#000';
	statusShadowTxt.textAlign = "center";
	statusShadowTxt.textBaseline='alphabetic';
	statusShadowTxt.y = statusTxt.y + 3;
	statusTxt.text = statusShadowTxt.text = textStrings.gameOver;
	statusContainer.addChild(itemStatus, statusShadowTxt, statusTxt);

	scoreTxt = new createjs.Text();
	scoreTxt.font = "65px daily_boldregular";
	scoreTxt.color = "#fff";
	scoreTxt.textAlign = "left";
	scoreTxt.textBaseline = 'alphabetic';
	scoreOutlineTxt = new createjs.Text();
	scoreOutlineTxt.font = "65px daily_boldregular";
	scoreOutlineTxt.color = '#000';
	scoreOutlineTxt.textAlign = "left";
	scoreOutlineTxt.textBaseline='alphabetic';
	scoreOutlineTxt.outline = 3;
	scoreShadowTxt = new createjs.Text();
	scoreShadowTxt.font = "65px daily_boldregular";
	scoreShadowTxt.color = "#000";
	scoreShadowTxt.textAlign = "left";
	scoreShadowTxt.textBaseline = 'alphabetic';
	scoreShadowTxt.y = 5;

	scoreContainer.addChild(scoreShadowTxt, scoreOutlineTxt, scoreTxt);

	touchScreen = new createjs.Shape();	
	touchScreen.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(-(landscapeSize.w/2), -(portraitSize.h/2), landscapeSize.w, portraitSize.h));
	
	frogContainer.addChild(itemFrog, frogPowerContianer, itemBubble, powerIconContainer);
	frogInnerContainer.addChild(itemFrogInner, frogPowerInnerContainer, itemBubbleInner, powerIconInnerContainer);

	itemPowers = new createjs.Bitmap(loader.getResult('itemPowers'));
	centerReg(itemPowers);
	bgPowers = new createjs.Shape();
	bgPowers.graphics.beginStroke('#000').drawRect(-(landscapeSize.w/2), -(portraitSize.h/2), landscapeSize.w, portraitSize.h);
	bgPowers.alpha = .3;
	powersIntroContainer.addChild(bgPowers,itemPowers);

	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemPop'));
	centerReg(itemResult);
	itemResultP = new createjs.Bitmap(loader.getResult('itemPopP'));
	centerReg(itemResultP);
	
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "50px daily_boldregular";
	resultTitleTxt.color = '#fff';
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = textStrings.resultTitle;

	resultTitleOutlineTxt = new createjs.Text();
	resultTitleOutlineTxt.font = "50px daily_boldregular";
	resultTitleOutlineTxt.color = '#000';
	resultTitleOutlineTxt.textAlign = "center";
	resultTitleOutlineTxt.textBaseline='alphabetic';
	resultTitleOutlineTxt.outline = 6;
	resultTitleOutlineTxt.text = textStrings.resultTitle;
	
	resultDescTxt = new createjs.Text();
	resultDescTxt.font = "60px daily_boldregular";
	resultDescTxt.lineHeight = 35;
	resultDescTxt.color = '#67B21F';
	resultDescTxt.textAlign = "center";
	resultDescTxt.textBaseline='alphabetic';
	resultDescTxt.text = '';

	resultDescOutlineTxt = new createjs.Text();
	resultDescOutlineTxt.font = "60px daily_boldregular";
	resultDescOutlineTxt.lineHeight = 35;
	resultDescOutlineTxt.color = '#000';
	resultDescOutlineTxt.textAlign = "center";
	resultDescOutlineTxt.textBaseline='alphabetic';
	resultDescOutlineTxt.outline = 8;

	resultBestTxt = new createjs.Text();
	resultBestTxt.font = "45px daily_boldregular";
	resultBestTxt.color = '#fff';
	resultBestTxt.textAlign = "center";
	resultBestTxt.textBaseline='alphabetic';
	resultBestTxt.text = '';

	resultBestOutlineTxt = new createjs.Text();
	resultBestOutlineTxt.font = "45px daily_boldregular";
	resultBestOutlineTxt.color = '#000';
	resultBestOutlineTxt.textAlign = "center";
	resultBestOutlineTxt.textBaseline='alphabetic';
	resultBestOutlineTxt.outline = 8;

	resultTitleTxt.y = resultTitleOutlineTxt.y = -155;
	resultDescTxt.y = resultDescOutlineTxt.y = -52;
	resultBestTxt.y = resultBestOutlineTxt.y = -3;
	resultTitleOutlineTxt.y += 2;
	resultDescOutlineTxt.y += 2;
	resultBestOutlineTxt.y += 2;
	buttonContinue.y = 165;

	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "25px daily_boldregular";
	resultShareTxt.color = '#ea8000';
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = textStrings.share;

	resultShareOutlineTxt = new createjs.Text();
	resultShareOutlineTxt.font = "25px daily_boldregular";
	resultShareOutlineTxt.color = '#000';
	resultShareOutlineTxt.textAlign = "center";
	resultShareOutlineTxt.textBaseline='alphabetic';
	resultShareOutlineTxt.outline = 4;
	resultShareOutlineTxt.y = 1;
	resultShareOutlineTxt.text = textStrings.share;

	shareContainer.y = shareSaveContainer.y = 35;
	socialContainer.visible = false;
	shareContainer.addChild(resultShareOutlineTxt, resultShareTxt, socialContainer);

	if(shareSettings.enable){
		buttonShare = new createjs.Bitmap(loader.getResult('buttonShare'));
		centerReg(buttonShare);
		
		var pos = {x:0, y:40, spaceX:65};
		pos.x = -(((shareSettings.options.length-1) * pos.spaceX)/2)
		for(let n=0; n<shareSettings.options.length; n++){
			var shareOption = shareSettings.options[n];
			var shareAsset = String(shareOption[0]).toUpperCase() + String(shareOption).slice(1);
			$.share['button'+n] = new createjs.Bitmap(loader.getResult('button'+shareAsset));
			$.share['button'+n].shareOption = shareOption;
			centerReg($.share['button'+n]);
			$.share['button'+n].x = pos.x;
			$.share['button'+n].y = pos.y;
			socialContainer.addChild($.share['button'+n]);
			pos.x += pos.spaceX;
		}
		 buttonShare.y = (buttonShare.image.naturalHeight/2) + 10;
		shareContainer.addChild(buttonShare);
	}

	if ( typeof toggleScoreboardSave == 'function' ) { 
		buttonSave = new createjs.Bitmap(loader.getResult('buttonSave'));
		centerReg(buttonSave);
        buttonSave.y = (buttonSave.image.naturalHeight/2) + 10;
        shareSaveContainer.addChild(buttonSave);
	}
	
	//options
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonMusicOn = new createjs.Bitmap(loader.getResult('buttonMusicOn'));
	centerReg(buttonMusicOn);
	buttonMusicOff = new createjs.Bitmap(loader.getResult('buttonMusicOff'));
	centerReg(buttonMusicOff);
	buttonMusicOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonMusicOn);
	createHitarea(buttonMusicOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemPop'));
	centerReg(itemExit);
	itemExitP = new createjs.Bitmap(loader.getResult('itemPopP'));
	centerReg(itemExitP);
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	
	popTitleTxt = new createjs.Text();
	popTitleTxt.font = "50px daily_boldregular";
	popTitleTxt.color = "#fff";
	popTitleTxt.textAlign = "center";
	popTitleTxt.textBaseline='alphabetic';
	popTitleTxt.text = textStrings.exitTitle;

	popTitleOutlineTxt = new createjs.Text();
	popTitleOutlineTxt.font = "50px daily_boldregular";
	popTitleOutlineTxt.color = '#000';
	popTitleOutlineTxt.textAlign = "center";
	popTitleOutlineTxt.textBaseline='alphabetic';
	popTitleOutlineTxt.outline = 6;
	popTitleOutlineTxt.text = textStrings.exitTitle;
	
	popDescTxt = new createjs.Text();
	popDescTxt.font = "32px daily_boldregular";
	popDescTxt.lineHeight = 45;
	popDescTxt.color = "#fff";
	popDescTxt.textAlign = "center";
	popDescTxt.textBaseline='alphabetic';
	popDescTxt.text = textStrings.exitMessage;

	popDescOutlineTxt = new createjs.Text();
	popDescOutlineTxt.font = "32px daily_boldregular";
	popDescOutlineTxt.lineHeight = 45;
	popDescOutlineTxt.color = '#000';
	popDescOutlineTxt.textAlign = "center";
	popDescOutlineTxt.textBaseline='alphabetic';
	popDescOutlineTxt.outline = 5;
	popDescOutlineTxt.text = textStrings.exitMessage;

	popTitleTxt.y = popTitleOutlineTxt.y = -155;
	popDescTxt.y = popDescOutlineTxt.y = -55;
	popTitleOutlineTxt.y += 2;
	popDescOutlineTxt.y += 1;
	buttonConfirm.y = 60;
	buttonCancel.y = 155;
	
	exitContainer.addChild(itemExit, itemExitP, popTitleOutlineTxt, popTitleTxt, popDescOutlineTxt, popDescTxt, buttonConfirm, buttonCancel);
	exitContainer.visible = false;
	
	guideline = new createjs.Shape();

	mainContainer.addChild(logo, logoP, buttonStart);
	cameraContainer.addChild(worldBgContainer, worldDirtContainer, worldRoadContainer, worldWoodContainer, worldObjectsContainer, worldParticlesContainer);
	cameraShakeContainer.addChild(cameraContainer);
	worldContainer.addChild(cameraShakeContainer);
	gameContainer.addChild(itemFreezeOverlay, powersIntroContainer, scoreContainer, statusContainer, touchScreen);
	resultContainer.addChild(itemResult, itemResultP, buttonContinue, resultTitleOutlineTxt, resultTitleTxt, resultDescOutlineTxt, resultDescTxt, resultBestOutlineTxt, resultBestTxt, shareContainer, shareSaveContainer);
	
	canvasContainer.addChild(bg, bgP, worldContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc();
}

function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;
	}
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
}

function changeCanvasViewport(){
	if(canvasContainer!=undefined){
		stage.scaleX = stage.scaleY = dpr;
		
		if(safeZoneGuide){	
			guideline.graphics.clear().setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
		}

		exitContainer.x = canvasW/2;
		exitContainer.y = canvasH/2;

		resultContainer.x = canvasW/2;
		resultContainer.y = canvasH/2;

		statusContainer.x = canvasW/2;
		statusContainer.y = canvasH/2;

		if(viewport.isLandscape){
			bg.visible = true;
			bgP.visible = false;

			logo.visible = true;
			logoP.visible = false;
			
			buttonStart.x = (canvasW/2);
			buttonStart.y = canvasH/100 * 80;

			//game
			
			//result
			itemResult.visible = true;
			itemResultP.visible = false;
			
			//exit
			itemExit.visible = true;
			itemExitP.visible = false;
		}else{
			bg.visible = false;
			bgP.visible = true;

			logo.visible = false;
			logoP.visible = true;
			
			buttonStart.x = (canvasW/2)
			buttonStart.y = canvasH/100 * 70;

			//game
			
			//result
			itemResult.visible = false;
			itemResultP.visible = true;
			
			//exit
			itemExit.visible = false;
			itemExitP.visible = true;
		}
	}
}



/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		
		buttonSettings.x = (canvasW - offset.x) - 50;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 75;
		var nextCount = 0;
		buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
		buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
		buttonSoundOn.x = buttonSoundOff.x;
		buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
		if (typeof buttonMusicOn != "undefined") {
			buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
			buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
			buttonMusicOn.x = buttonMusicOff.x;
			buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
			nextCount = 2;
		}else{
			nextCount = 1;
		}
		buttonFullscreen.x = buttonSettings.x;
		buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));

		if(curPage == 'main' || curPage == 'result'){
			buttonExit.visible = false;			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
		}else{
			buttonExit.visible = true;			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*(nextCount+2));
		}

		resizeWorld();
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame(event);
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}