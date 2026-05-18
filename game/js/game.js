////////////////////////////////////////////////////////////
// GAME v1.2
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

//dirt objects
const dirtAssets = [
	{
		src:'assets/item_dirt.png',
		regX:70,
		regY:36,
	},
	{
		src:'assets/item_dirt2.png',
		regX:2,
		regY:2,
	},
];

//world objects
const objectAssets = [
	{
		src:'assets/item_tree1.png',
		size:1,
		regX:45,
		regY:135,
	},
	{
		src:'assets/item_tree2.png',
		size:1,
		regX:56,
		regY:167,
	},
	{
		src:'assets/item_tree3.png',
		size:2,
		regX:90,
		regY:168,
	},
	{
		src:'assets/item_tree4.png',
		size:2,
		regX:76,
		regY:157,
	},
	{
		src:'assets/item_grass1.png',
		size:1,
		regX:42,
		regY:52,
	},
	{
		src:'assets/item_grass2.png',
		size:1,
		regX:28,
		regY:35,
	},
	{
		src:'assets/item_grass3.png',
		size:1,
		regX:46,
		regY:53,
	},
	{
		src:'assets/item_rock1.png',
		size:2,
		regX:98,
		regY:90,
	},
	{
		src:'assets/item_rock2.png',
		size:1,
		regX:50,
		regY:60,
	},
	{
		src:'assets/item_rock3.png',
		size:1,
		regX:40,
		regY:48,
	}
];

//road
const roadAssets = [
	{
		main:'assets/item_road.png',
		side:'assets/item_road_side.png',
		line:'assets/item_road_line.png',
		objects:[
			{
				main:'assets/item_truck1.png',
				tire:'assets/item_truck_tire.png',
				width:150,
				height:120,
				regX:85,
				regY:95,
			},
			{
				main:'assets/item_truck2.png',
				tire:'assets/item_truck_tire.png',
				width:150,
				height:120,
				regX:85,
				regY:95,
			},
			{
				main:'assets/item_truck3.png',
				tire:'assets/item_truck_tire.png',
				width:150,
				height:120,
				regX:85,
				regY:95,
			}
		]
	}
];

//river
const riverAssets = [
	{
		main:'assets/item_river.png',
		side:'assets/item_river_side.png',
		objects:[
			{
				main:'assets/item_plank1.png',
				width:90,
				height:70,
				regX:45,
				regY:35,
			},
			{
				main:'assets/item_plank2.png',
				width:170,
				height:70,
				regX:85,
				regY:35,
			},
			{
				main:'assets/item_plank3.png',
				width:270,
				height:70,
				regX:135,
				regY:35,
			}
		]
	}
];

//train
const railwayAssets = [
	{
		main:'assets/item_track.png',
		side:'assets/item_track_side.png',
		objects:[
			{
				main:'assets/item_train1.png',
				tire:'assets/item_train_wheel.png',
				width:600,
				height:56,
				regX:308,
				regY:90,
			},
			{
				main:'assets/item_train2.png',
				tire:'assets/item_train_wheel.png',
				width:600,
				height:56,
				regX:308,
				regY:90,
			},
			{
				main:'assets/item_train2.png',
				tire:'assets/item_train_wheel.png',
				width:600,
				height:56,
				regX:308,
				regY:90,
			},
		]
	}
];


//game settings
const gameSettings = {
	keyboard:{ //keyboard code
		left:[37,65],
		right:[39,68],
		up:[38,87],
		down:[40,83],
	},
	splashColors:['#fff','#0FDBDB','#0CA7A7'],
	idleTimeOver:8, //eagle catch animation
	powerActive:true, //active powers collect
	powerTimer:10, //power active durationm,
	powerIntro:true, //show powers intro
	stage:[
		{
			plain:[2,3], //total plain
			road:[1,2], //total road
			river:[1,2], //total river
			railway:[0,0], //total railway
			carSpeed:[100,200], //car speed
			carGap:[250,500], //car spacing
			trainSpeed:[1200,1300], //train speed
			trainDelaySpeed:[200,400], //train delay for next train
			woodSpeed:[100,200], //floating wood speed
			woodGap:[50,200], //wood spacing
			nextScore:30 //score target to next stage
		},
		{
			plain:[2,3],
			road:[1,3],
			river:[1,3],
			railway:[1,2],
			carSpeed:[150,250],
			carGap:[200,400],
			trainSpeed:[1200,1300],
			trainDelaySpeed:[200,400],
			woodSpeed:[150,250],
			woodGap:[100,250],
			nextScore:60
		},
		{
			plain:[2,3],
			road:[1,4],
			river:[1,4],
			railway:[1,3],
			carSpeed:[200,300],
			carGap:[300,400],
			trainSpeed:[1200,1300],
			trainDelaySpeed:[200,400],
			woodSpeed:[200,300],
			woodGap:[150,250],
			nextScore:100
		},
		{
			plain:[2,3],
			road:[2,5],
			river:[2,5],
			railway:[2,5],
			carSpeed:[250,350],
			carGap:[350,450],
			trainSpeed:[1200,1300],
			trainDelaySpeed:[200,400],
			woodSpeed:[250,350],
			woodGap:[200,300],
			nextScore:150
		},
		{
			plain:[2,3],
			road:[2,6],
			river:[2,6],
			railway:[2,6],
			carSpeed:[250,350],
			carGap:[300,450],
			trainSpeed:[1200,1300],
			trainDelaySpeed:[200,400],
			woodSpeed:[300,600],
			woodGap:[200,300],
			nextScore:230
		}
	]
}

//game text display
const textStrings = {
	gameOver:'Game Over',
	exitTitle:'Exit Game',
	exitMessage:'Are you sure you want\nto quit game?',
	share:'Share your score:',
	resultTitle:'Game Over',
	resultDesc:'SCORE: [NUMBER]',
	resultBest:'BEST SCORE: [NUMBER]',
}

//Social share, [SCORE] will replace with game score
const shareSettings = {
	enable:true,
	options:['facebook','twitter','whatsapp','telegram','reddit','linkedin'],
	shareTitle:'Highscore on Froggy Road is [SCORE]',
	shareText:'[SCORE] is mine new highscore on Froggy Road game! Try it now!',
	customScore:true, //share a custom score to Facebook, it use customize share.php (Facebook and PHP only)
	gtag:true //Google Tag
}

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */

$.editor = {enable:false};
const playerData = {score:0, bestScore:0};
const gameData = {paused:true, interact:false, stageIndex:0, jumping:false, nextDir:'', areasArr:[], objectArr:[], objectArrIndex:0, dirtArr:[], dirtArrIndex:0, roadArr:[], roadArrIndex:0, riverArr:[], riverArrIndex:0, railwayArr:[], railwayArrIndex:0, splashObjects:[], powers:{active:false,type:0}, powerArr:[], powerArrIndex:0, powerIntro:gameSettings.powerIntro};
const tweenData = {score:0, tweenScore:0};
const gravityData = {animate:false, total:10, gravity:1, drag:.99};
const build_id = 0x326D7;
const cerify_key = 'AcKzL3cDADnzUN-0kubRNtyGdbE';

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	$(window).focus(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(false);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(false);
			}
		}
	});
	
	$(window).blur(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(true);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(true);
			}
		}
	});

	if(isDesktop){
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
		
			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}

	if(audioOn){
		if(muteSoundOn){
			toggleSoundMute(true);
		}
		if(muteMusicOn){
			toggleMusicMute(true);
		}
	}

	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('game');
	});
	
	itemExit.addEventListener("click", function(evt) {
	});

	if(shareSettings.enable){
		buttonShare.cursor = "pointer";
		buttonShare.addEventListener("click", function(evt) {
			playSound('soundButton');
			toggleSocialShare(true);
		});

		for(let n=0; n<shareSettings.options.length; n++){
			$.share['button'+n].cursor = "pointer";
			$.share['button'+n].addEventListener("click", function(evt) {
				shareLinks(evt.target.shareOption, addCommas(playerData.score));
			});
		}
	}
	
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('main');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleSoundMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleSoundMute(false);
	});

	if (typeof buttonMusicOff != "undefined") {
		buttonMusicOff.cursor = "pointer";
		buttonMusicOff.addEventListener("click", function(evt) {
			toggleMusicMute(true);
		});
	}
	
	if (typeof buttonMusicOn != "undefined") {
		buttonMusicOn.cursor = "pointer";
		buttonMusicOn.addEventListener("click", function(evt) {
			toggleMusicMute(false);
		});
	}
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		togglePop(true);
		toggleOptions(false);
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOptions();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
		
		stopSound();
		stopGame();
		goPage('main');
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
	});

	touchScreen.addEventListener("click", function(evt) {
		touchWorld();
	});

	for(let n=0; n<objectAssets.length; n++){
		gameData.objectArr.push(n);
	}

	for(let n=0; n<dirtAssets.length; n++){
		gameData.dirtArr.push(n);
	}

	for(let n=0; n<roadAssets.length; n++){
		gameData.roadArr.push(n);
	}

	for(let n=0; n<riverAssets.length; n++){
		gameData.riverArr.push(n);
	}

	for(let n=0; n<railwayAssets.length; n++){
		gameData.railwayArr.push(n);
	}

	for(let n=0; n<3; n++){
		gameData.powerArr.push(n);
	}
	preventScrolling();
}

function preventScrolling(){
	const inIframe = window.self !== window.top;
	if(inIframe){
		var keys = [37,65,39,68,38,87,40,83];
		$(window).on( "keydown", function(event) {
		if(keys.indexOf(event.keyCode) != -1){
			event.preventDefault();
		}
		});
	}
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

/*!
 * 
 * TOGGLE SOCIAL SHARE - This is the function that runs to toggle social share
 * 
 */
function toggleSocialShare(con){
	if(!shareSettings.enable){return;}
	buttonShare.visible = con == true ? false : true;
	shareSaveContainer.visible = con == true ? false : true;
	socialContainer.visible = con;

	if(con){
		if (typeof buttonSave !== 'undefined') {
			TweenMax.to(buttonShare, 3, {overwrite:true, onComplete:toggleSocialShare, onCompleteParams:[false]});
		}
	}
}

function positionShareButtons(){
	if(!shareSettings.enable){return;}
	if (typeof buttonShare !== 'undefined') {
		if (typeof buttonSave !== 'undefined') {
			if(buttonSave.visible){
				buttonShare.x = -((buttonShare.image.naturalWidth/2) + 5);
				buttonSave.x = ((buttonShare.image.naturalWidth/2) + 5);
			}else{
				buttonShare.x = 0;
			}
		}
	}
}

/*!
 * 
 * TOGGLE POP - This is the function that runs to toggle popup overlay
 * 
 */
function togglePop(con){
	exitContainer.visible = con;
}

/*!
 * 
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 * 
 */
function keydown(event) {
	if(curPage == "game"){
		if(gameSettings.keyboard.left.indexOf(event.keyCode) != -1){
			animateFrog('left');
		}else if(gameSettings.keyboard.right.indexOf(event.keyCode) != -1){
			animateFrog('right');
		}else if(gameSettings.keyboard.up.indexOf(event.keyCode) != -1){
			animateFrog('up');
		}else if(gameSettings.keyboard.down.indexOf(event.keyCode) != -1){
			animateFrog('down');
		}
	}
}
 
function keyup(event) {

}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	togglePop(false);
	toggleOptions(false);
	
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;
			prepareWorld();
			playMusicLoop('musicMain');
			stopMusicLoop('musicGame');
		break;
		
		case 'game':
			targetContainer = gameContainer;
			startGame();
			stopMusicLoop('musicMain');
			playMusicLoop('musicGame');
		break;
		
		case 'result':
			targetContainer = resultContainer;
			stopGame();			
			playSound('soundResult');
			toggleSocialShare(false);
			
			tweenData.tweenScore = 0;
			TweenMax.to(tweenData, .5, {tweenScore:playerData.score, overwrite:true, onUpdate:function(){
				resultDescTxt.text = resultDescOutlineTxt.text = textStrings.resultDesc.replace('[NUMBER]', Math.floor(tweenData.tweenScore));
			}});
			playerData.bestScore = playerData.score > playerData.bestScore ? playerData.score : playerData.bestScore;
			resultBestTxt.text = resultBestOutlineTxt.text = textStrings.resultBest.replace('[NUMBER]', Math.floor(playerData.bestScore));
			
			saveGame(playerData.score);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

/*!
 * 
 * START GAME - This is the function that runs to start game
 * 
 */
function startGame(){
	statusContainer.alpha = 0;
	playerData.score = 0;
	gameData.jumping = false;
	gameData.over = false;
	gameData.interact = true;
	gameData.dir = '';
	gameData.nextDir = '';
	gameData.distance = 0;
	gameData.powers = {
		active:true,
		type:0,
		count:0,
		next:getPowersCount(),
		delay:0,
		jumpCount:0,
		timer:0
	}
	powersIntroContainer.visible = false;
	frogContainer.visible = true;
	shuffle(gameData.powerArr);
	deactivePower(false);
	playSound('soundStart');
	updateGameScore();
}

function getPowersCount(){
	return randomIntFromInterval(5,7);
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
 function stopGame(){
	gameData.paused = true;
	TweenMax.killAll(false, true, false);
}

function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 * 
 * RESIZE WORLD - This is the function that runs to resize world
 * 
 */
function resizeWorld(){
	scoreContainer.x = offset.x + 50;
	scoreContainer.y = offset.y + 70;

	statusContainer.x = canvasW/2;
	statusContainer.y = canvasH/2;

	powersIntroContainer.x = canvasW/2;
	powersIntroContainer.y = canvasH/2;

	touchScreen.x = canvasW/2;
	touchScreen.y = canvasH/2;

	worldContainer.x = canvasW/2;
	if(viewport.isLandscape){
		worldContainer.y = canvasH/2 + (gameData.world.size * 2);
		itemFreezeOverlay.x = 0;
		itemFreezeOverlay.rotation = 0;
	}else{
		worldContainer.y = canvasH/2 + (gameData.world.size * 2);
		itemFreezeOverlay.x = canvasW;
		itemFreezeOverlay.rotation = 90;
	}
}

/*!
 * 
 * PREPARE WORLD - This is the function that runs to prepare world
 * 
 */
function prepareWorld(){
	worldBgContainer.removeAllChildren();
	worldDirtContainer.removeAllChildren();
	worldObjectsContainer.removeAllChildren();
	worldWoodContainer.removeAllChildren();
	worldRoadContainer.removeAllChildren();
	worldParticlesContainer.removeAllChildren();

	gameData.stageIndex = 0;
	gameData.world = {
		width:0,
		height:0,
		size:100,
		col:13,
		row:20,
		startRow:6,
		startY:0,
		colX:0,
		reset:3,
		colExist:[],
		colShuffle:[],
		colShuffleIndex:0,
		colExclude:[7],
		area:['road','river','railway'],
		frogRow:6,
		areaIndex:0,
		woodIndex:0,
	}

	gameData.areasArr = [];
	gameData.splashObjects = [];

	gameData.world.width = gameData.world.col * gameData.world.size;
	gameData.world.height = gameData.world.row * gameData.world.size;
	gameData.world.startY = -(gameData.world.startRow * gameData.world.size);
	gameData.world.colX = -((gameData.world.width/2));
	gameData.world.colX += gameData.world.size/2;

	const bgImg = loader.getResult('itemBgGame');
	$.world['background'] = new createjs.Shape();
	$.world['background'].graphics.beginBitmapFill(bgImg).drawRect(0, 0, gameData.world.width, gameData.world.height);
	$.world['background'].tileH = bgImg.height;
	$.world['background'].regX = gameData.world.width/2;
	$.world['background'].regY = gameData.world.height;
	worldBgContainer.addChild($.world['background']);

	const frogW = gameData.world.size/2;
	const frogH = gameData.world.size/2;
	frogContainer.setBounds(-(frogW/2), -(frogH/2), frogW, frogH);
	frogContainer.x = 0;
	frogContainer.y = gameData.world.startY;
	frogContainer.visible = false;
	frogInnerContainer.visible = false;

	itemFrog.areaIndex = -1;
	itemFrog.woodIndex = -1;
	itemFrog.posIndex = -1;
	itemFrog.woodObject = null;
	itemFrog.gotoAndPlay('idle');

	itemFrogShape.setBounds(-(frogW/2), -(frogH/2), frogW, frogH);
	worldObjectsContainer.addChild(frogContainer, jumpGuideContainer);
	worldContainer.idleTimer = 0;

	shuffle(gameData.objectArr);
	shuffle(gameData.dirtArr);
	shuffle(gameData.roadArr);
	shuffle(gameData.riverArr);
	shuffle(gameData.railwayArr);
	gameData.objectArrIndex = 0;
	gameData.dirtArrIndex = 0;
	gameData.roadArrIndex = 0;
	gameData.riverArrIndex = 0;
	gameData.railwayArrIndex = 0;
	generateColShuffle();
	generateWorld(true);
	resizeWorld();
	gameData.paused = setGameLaunch();
}

function resetWorldLoop(){
	frogContainer.y += (gameData.world.size * gameData.world.reset);
	for(let n=0; n<gameData.world.reset; n++){
		const thisArea = gameData.areasArr[0];
		for(let o=0; o<thisArea.objects.length; o++){
			const thisObject = thisArea.objects[o];
			if(thisObject.objectType == 'road' || thisObject.objectType == 'roadend' || thisObject.objectType == 'river' || thisObject.objectType == 'riverend' || thisObject.objectType == 'railway' || thisObject.objectType == 'railwayend'){
				worldRoadContainer.removeChild(thisObject);
			}else if(thisObject.objectType == 'object'){
				worldObjectsContainer.removeChild(thisObject);
			}else{
				if(thisObject.objectType == "power" && !gameData.powers.active && gameData.powers.type == 0){
					gameData.powers.active = true;
				}
				worldDirtContainer.removeChild(thisObject);
			}
		}
		for(let o=0; o<thisArea.moveObjects.length; o++){
			const thisMoveObject = thisArea.moveObjects[o];
			if(thisMoveObject.objectType == 'wood'){
				worldWoodContainer.removeChild(thisMoveObject);
			}else{
				worldObjectsContainer.removeChild(thisMoveObject);
			}
		}
		gameData.areasArr.splice(0,1);
	}

	let startY = 0;
	for(let n=0; n<gameData.areasArr.length; n++){
		const thisArea = gameData.areasArr[n];
		thisArea.y = startY;
		for(let o=0; o<thisArea.objects.length; o++){
			const thisObject = thisArea.objects[o];
			thisObject.y = thisObject.oriY = startY;
		}
		for(let o=0; o<thisArea.moveObjects.length; o++){
			const thisMoveObject = thisArea.moveObjects[o];
			thisMoveObject.y = startY;
		}
		startY -= gameData.world.size;
	}

	generateWorld();
}

/*!
 * 
 * GENERATE WORLD - This is the function that runs to generate world
 * 
 */
function generateWorld(first){
	if(gameData.areasArr.length > gameData.world.row){
		return;
	}
	
	//random area
	let randomArea = [];
	let totalPlain = randomIntFromInterval(gameSettings.stage[gameData.stageIndex].plain[0],gameSettings.stage[gameData.stageIndex].plain[1]);
	if(first){
		totalPlain = 14;
	}

	for(let l=0; l<totalPlain; l++){
		const totalObjects = randomIntFromInterval(1,3);
		randomArea.push({type:'plain', totalObjects:totalObjects});
	}

	shuffle(gameData.world.area);
	for(let n=0; n<gameData.world.area.length; n++){
		let totalArea = 0;
		if(gameData.world.area[n] == 'road'){
			totalArea = randomIntFromInterval(gameSettings.stage[gameData.stageIndex].road[0],gameSettings.stage[gameData.stageIndex].road[1]);
		}else if(gameData.world.area[n] == 'river'){
			totalArea = randomIntFromInterval(gameSettings.stage[gameData.stageIndex].river[0],gameSettings.stage[gameData.stageIndex].river[1]);
		}else if(gameData.world.area[n] == 'railway'){
			totalArea = randomIntFromInterval(gameSettings.stage[gameData.stageIndex].railway[0],gameSettings.stage[gameData.stageIndex].railway[1]);
		}
		for(let l=0; l<totalArea; l++){
			randomArea.push({type:gameData.world.area[n], totalObjects:0});
		}
		randomArea.push({type:'plain', totalObjects:1});
	}

	let startY = -(gameData.areasArr.length * gameData.world.size);
	let dirtCount = 0;
	let dirtCountIndex = 0;

	for(let n=0; n<randomArea.length; n++){
		gameData.world.colExist = [];
		const newArea = {index:gameData.world.areaIndex, type:randomArea[n].type, objects:[], moveObjects:[], y:startY};
		let proceedCreate = true;
		if(first && startY == gameData.world.startY){
			proceedCreate = false;
		}

		if(proceedCreate){
			let nextAreaType = '';
			if((n+1) < randomArea.length){
				nextAreaType = randomArea[n+1].type;
			}
			if(randomArea[n].type == 'plain'){
				for(let l=0; l<randomArea[n].totalObjects; l++){
					createObject(newArea,startY-1,first);
				}
				if(gameData.powers.count > gameData.powers.next && gameData.powers.active && gameSettings.powerActive){
					createPower(newArea,startY-1);
				}
				dirtCountIndex++;
				if(dirtCountIndex >= dirtCount){
					dirtCount = randomIntFromInterval(2,3);
					dirtCountIndex = 0;
					createDirt(newArea, startY-1);
				}
			}else if(randomArea[n].type == 'road'){
				createRoad(newArea, startY, nextAreaType);
				createCar(newArea, startY);
			}else if(randomArea[n].type == 'river'){
				createRiver(newArea, startY, nextAreaType);
				createWood(newArea, startY);
			}else if(randomArea[n].type == 'railway'){
				createRailway(newArea, startY, nextAreaType);
			}
		}
		gameData.areasArr.push(newArea);
		startY -= gameData.world.size;
		gameData.world.areaIndex++;
	}

	checkObjectsOverlap();

	//repeat
	if(gameData.areasArr.length < gameData.world.row){
		generateWorld();
	}
}

function checkObjectsOverlap(){
	const totalLoop = 10;
	for(let n=0; n<gameData.areasArr.length; n++){
		const thisArea = gameData.areasArr[n];
		for(let o=0; o<thisArea.objects.length; o++){
			const thisObject = thisArea.objects[o];
			if(thisObject.objectType == 'object'){
				for(let lo=0; lo<thisArea.objects.length; lo++){
					if(o != lo){
						const thisLoopObject = thisArea.objects[lo];
						if(thisLoopObject.objectType == 'object'){
							for(let r=0; r<totalLoop; r++){
								if(hitBounds(thisObject, thisLoopObject)){
									if(thisObject.x > thisLoopObject.x){
										thisLoopObject.x -= gameData.world.size;
									}else{
										thisLoopObject.x += gameData.world.size;
									}
								}else{
									r = totalLoop;
								}
							}
						}
					}
				}
			}
		}
	}
}

/*!
 * 
 * CREATE OBJECT - This is the function that runs to create object
 * 
 */
function createFrog(powerIndex){
	let _frameW = 70;
	let _frameH = 95;
	let _regX = 36;
	let _regY = 60;
	let assetName = 'itemFrog';
	if(powerIndex == 1){
		assetName = 'itemFrogInvisible';
	}else if(powerIndex == 2){
		_frameW = 67;
		_frameH = 59;
		_regX = 33;
		_regY = 23;
		assetName = 'itemFrogJump';
	}
	
	const _speed = 1.5;
	const _speedDrown = 2;
	const _frame = {"regX":_regX, "regY":_regY, "width": _frameW, "height": _frameH, "count": 80};
	const _animations = {
		idle:{frames: [0,1,2,3,4,5,6,7,8], speed:_speed, next:'idle'},
		jump:{frames: [9,10,11,12,13,14,15,16,17,18], speed:_speed, next:'idle'},
		backidle:{frames: [19,20,21,22,23,24,25,26,27,28], speed:_speed, next:'backidle'},
		backjump:{frames: [29,30,31,32,33,34,35,36,37,38], speed:_speed, next:'backidle'},
		sideidle:{frames: [39,40,41,42,43,44,45,46,47,48], speed:_speed, next:'sideidle'},
		sidejump:{frames: [49,50,51,52,53,54,55,56,57,58], speed:_speed, next:'sideidle'},
		dead:{frames: [59,60,61,62,63,64,65,66,67,68], speed:_speed, next:'dead'},
		drown:{frames: [69,70,71,72,73,74,75,76,77,78,79], speed:_speedDrown, next:'drownend'},
		drownend:{frames: [79], speed:_speed, next:'drownend'},
	};
						
	const frogData = new createjs.SpriteSheet({
		"images": [loader.getResult(assetName).src],
		"frames": _frame,
		"animations": _animations
	});
	
	const itemFrog = new createjs.Sprite(frogData, "idle");
	itemFrog.framerate = 20;
	return itemFrog;
}

function createDirt(area,y){
	const dirtIndex = gameData.dirtArr[gameData.dirtArrIndex];
	gameData.dirtArrIndex++;
	if(gameData.dirtArrIndex > gameData.dirtArr.length-1){
		shuffle(gameData.dirtArr);
		gameData.dirtArrIndex = 0;
	}

	const newDirt = new createjs.Bitmap(loader.getResult('itemDirt'+dirtIndex));
	newDirt.objectType = 'dirt';
	newDirt.regX = dirtAssets[dirtIndex].regX;
	newDirt.regY = dirtAssets[dirtIndex].regY;
	newDirt.scaleX = randomBoolean() == true ? 1 : -1;
	newDirt.x = findColX(1);
	newDirt.y = y;

	area.objects.push(newDirt);
	worldDirtContainer.addChild(newDirt);
}

function createObject(area,y,first){
	const objectIndex = gameData.objectArr[gameData.objectArrIndex];
	gameData.objectArrIndex++;
	if(gameData.objectArrIndex > gameData.objectArr.length-1){
		shuffle(gameData.objectArr);
		gameData.objectArrIndex = 0;
	}

	const objectSize = gameData.world.size;
	let objectW, objectH;
	let offsetX = 0;
	if(objectAssets[objectIndex].size > 0){
		objectW = objectSize * (objectAssets[objectIndex].size);
		objectH = objectSize * 1;
		if(objectAssets[objectIndex].size > 1){
			offsetX = (gameData.world.size * (objectAssets[objectIndex].size-1)/2);
		}
	}
	const newObject = new createjs.Bitmap(loader.getResult('itemObject'+objectIndex));
	newObject.objectType = 'object';
	newObject.regX = objectAssets[objectIndex].regX;
	newObject.regY = objectAssets[objectIndex].regY;
	newObject.scaleX = randomBoolean() == true ? 1 : -1;
	newObject.setBounds(-(objectW/2), -(objectH/2), objectW, objectH);
	newObject.x = newObject.oriX = findColX(objectAssets[objectIndex].size) + offsetX;
	newObject.y = newObject.oriY = y;

	if(first && newObject.x >= -100 && newObject.x <= 100) return;
	area.objects.push(newObject);
	worldObjectsContainer.addChild(newObject);
}

function createPower(area, y){
	const powerIndex = gameData.powerArr[gameData.powerArrIndex];
	gameData.powerArrIndex++;
	if(gameData.powerArrIndex > gameData.powerArr.length-1){
		shuffle(gameData.powerArr);
		gameData.powerArrIndex = 0;
	}

	const powerSize = gameData.world.size;
	let powerW, powerH;
	powerW = powerSize * 1;
	powerH = powerSize * 1;

	const newPower = new createjs.Bitmap(loader.getResult('itemPower'+(powerIndex+1)));
	newPower.objectType = 'power';
	newPower.powerType = (powerIndex+1);
	newPower.regX = 52;
	newPower.regY = 70;
	newPower.setBounds(-(powerW/2), -(powerH/2), powerW, powerH);
	newPower.y = newPower.oriY = y;
	findPowerX(newPower, area);
	animatePower(newPower);

	area.objects.push(newPower);
	worldObjectsContainer.addChild(newPower);

	gameData.powers.active = false;
}

function findPowerX(newPower,area){
	const powerSize = gameData.world.size;
	let posArr = [-(powerSize*3),-(powerSize*2),-powerSize,0,powerSize,powerSize*2,powerSize*3];
	shuffle(posArr);

	for(let n=0; n<posArr.length; n++){
		let hitObject = false;
		newPower.x = newPower.oriX = posArr[n];
		for(let o=0; o<area.objects.length; o++){
			const thisObject = area.objects[o];
			if(hitBounds(thisObject, newPower)){
				hitObject = true;
				o = area.objects.length;
			}
		}
		if(!hitObject){
			n = posArr.length;
		}
	}
}

function createRoad(area,y,type){
	const roadIndex = gameData.roadArr[gameData.roadArrIndex];
	gameData.roadArrIndex++;
	if(gameData.roadArrIndex > gameData.roadArr.length-1){
		shuffle(gameData.roadArr);
		gameData.roadArrIndex = 0;
	}

	area.data = {
		roadIndex:roadIndex,
		objectArr:[],
		objectArrIndex:0,
		side:randomBoolean(),
		speed:randomIntFromInterval(gameSettings.stage[gameData.stageIndex].carSpeed[0],gameSettings.stage[gameData.stageIndex].carSpeed[1]),
		looped:false,
		gap:getCarGap()
	}
	for(let n=0; n<roadAssets[roadIndex].objects.length; n++){
		area.data.objectArr.push(n);
	}
	shuffle(area.data.objectArr);

	const newRoad = new createjs.Bitmap(loader.getResult('itemRoad'+roadIndex));
	newRoad.objectType = 'road';
	centerReg(newRoad);
	newRoad.y = y;
	area.objects.push(newRoad);
	worldRoadContainer.addChild(newRoad);

	let newRoadEnd = new createjs.Bitmap(loader.getResult('itemRoadLine'+roadIndex));
	if(type != 'road'){
		newRoadEnd = new createjs.Bitmap(loader.getResult('itemRoadSide'+roadIndex));
	}
	newRoadEnd.objectType = 'roadend';
	centerReg(newRoadEnd);
	newRoadEnd.y = y;
	area.objects.push(newRoadEnd);
	worldRoadContainer.addChild(newRoadEnd);
}

function createRiver(area,y,type){
	const riverIndex = gameData.riverArr[gameData.riverArrIndex];
	gameData.riverArrIndex++;
	if(gameData.riverArrIndex > gameData.riverArr.length-1){
		shuffle(gameData.riverArr);
		gameData.riverArrIndex = 0;
	}

	area.data = {
		riverIndex:riverIndex,
		objectArr:[],
		objectArrIndex:0,
		side:randomBoolean(),
		speed:randomIntFromInterval(gameSettings.stage[gameData.stageIndex].woodSpeed[0],gameSettings.stage[gameData.stageIndex].woodSpeed[1]),
		looped:false,
		gap:getWoodGap()
	}
	for(let n=0; n<riverAssets[riverIndex].objects.length; n++){
		area.data.objectArr.push(n);
	}
	shuffle(area.data.objectArr);

	const newRiver = new createjs.Bitmap(loader.getResult('itemRiver'+riverIndex));
	newRiver.objectType = 'river';
	centerReg(newRiver);
	newRiver.y = y;
	area.objects.push(newRiver);
	worldRoadContainer.addChild(newRiver);

	if(type != 'river'){
		const newRiverEnd = new createjs.Bitmap(loader.getResult('itemRiverSide'+riverIndex));
		newRiverEnd.objectType = 'riverend';
		centerReg(newRiverEnd);
		newRiverEnd.y = y;
		area.objects.push(newRiverEnd);
		worldRoadContainer.addChild(newRiverEnd);
	}
}

function createRailway(area,y,type){
	const railwayIndex = gameData.railwayArr[gameData.railwayArrIndex];
	gameData.railwayArrIndex++;
	if(gameData.railwayArrIndex > gameData.railwayArr.length-1){
		shuffle(gameData.railwayArr);
		gameData.railwayArrIndex = 0;
	}

	area.data = {
		railwayIndex:railwayIndex,
		objectArr:[],
		objectArrIndex:0,
		side:randomBoolean(),
		speed:randomIntFromInterval(gameSettings.stage[gameData.stageIndex].trainSpeed[0],gameSettings.stage[gameData.stageIndex].trainSpeed[1]),
		delayDefault:gameSettings.stage[gameData.stageIndex].trainDelaySpeed,
		delay:randomIntFromInterval(gameSettings.stage[gameData.stageIndex].trainDelaySpeed[0],gameSettings.stage[gameData.stageIndex].trainDelaySpeed[1]),
		delayCount:0,
	}
	for(let n=0; n<railwayAssets[railwayIndex].objects.length; n++){
		area.data.objectArr.push(n);
	}
	shuffle(area.data.objectArr);

	const newRailway = new createjs.Bitmap(loader.getResult('itemRailway'+railwayIndex));
	newRailway.objectType = 'railway';
	centerReg(newRailway);
	newRailway.y = y;
	area.objects.push(newRailway);
	worldRoadContainer.addChild(newRailway);

	if(type != 'railway'){
		const newRailwayEnd = new createjs.Bitmap(loader.getResult('itemRailwaySide'+railwayIndex));
		newRailwayEnd.objectType = 'railwayend';
		centerReg(newRailwayEnd);
		newRailwayEnd.y = y;
		area.objects.push(newRailwayEnd);
		worldRoadContainer.addChild(newRailwayEnd);
	}
}

function createCar(area, y){
	const carIndex = area.data.objectArr[area.data.objectArrIndex];
	area.data.objectArrIndex++;
	if(area.data.objectArrIndex > area.data.objectArr.length-1){
		shuffle(area.data.objectArr);
		area.data.objectArrIndex = 0;
	}

	const newCarMain = new createjs.Bitmap(loader.getResult('itemRoadObjectMain'+area.data.roadIndex+'_'+carIndex));
	newCarMain.regX = roadAssets[area.data.roadIndex].objects[carIndex].regX;
	newCarMain.regY = roadAssets[area.data.roadIndex].objects[carIndex].regY;
	const newCarTire = new createjs.Bitmap(loader.getResult('itemRoadObjectTire'+area.data.roadIndex+'_'+carIndex));
	newCarTire.regX = roadAssets[area.data.roadIndex].objects[carIndex].regX;
	newCarTire.regY = roadAssets[area.data.roadIndex].objects[carIndex].regY;

	const newCar = new createjs.Container();
	const objectW = roadAssets[area.data.roadIndex].objects[carIndex].width;
	const objectH = roadAssets[area.data.roadIndex].objects[carIndex].height;
	newCar.setBounds(-(objectW/2), -(objectH/2), objectW, objectH);
	newCar.carMain = newCarMain;
	newCar.carTire = newCarTire;

	newCar.objectType = 'car';
	newCar.y = y;
	newCar.x = area.data.side == true ? -((gameData.world.width/2)+(newCarMain.image.naturalWidth/2)) : ((gameData.world.width/2)+(newCarMain.image.naturalWidth/2));
	newCar.scaleX = area.data.side == true ? 1 : -1;
	newCar.objectW = objectW;
	newCar.addChild(newCarMain, newCarTire);

	area.moveObjects.push(newCar);
	worldObjectsContainer.addChild(newCar);
}

function createWood(area, y){
	const woodIndex = area.data.objectArr[area.data.objectArrIndex];
	area.data.objectArrIndex++;
	if(area.data.objectArrIndex > area.data.objectArr.length-1){
		shuffle(area.data.objectArr);
		area.data.objectArrIndex = 0;
	}

	const newWoodMain = new createjs.Bitmap(loader.getResult('itemRiverObjectMain'+area.data.riverIndex+'_'+woodIndex));
	newWoodMain.regX = riverAssets[area.data.riverIndex].objects[woodIndex].regX;
	newWoodMain.regY = riverAssets[area.data.riverIndex].objects[woodIndex].regY;
	newWoodMain.scaleX = randomBoolean() == true ? 1 : -1;

	const newWood = new createjs.Container();
	newWood.woodMove = new createjs.Container();
	newWood.woodMain = newWoodMain;
	
	const objectW = riverAssets[area.data.riverIndex].objects[woodIndex].width;
	const objectH = riverAssets[area.data.riverIndex].objects[woodIndex].height;
	newWood.setBounds(-(objectW/2), -(objectH/2), objectW, objectH);
	newWood.objectType = 'wood';
	newWood.y = y;
	newWood.x = area.data.side == true ? -((gameData.world.width/2)+(newWoodMain.image.naturalWidth/2)) : ((gameData.world.width/2)+(newWoodMain.image.naturalWidth/2));
	newWood.objectW = objectW;
	newWood.woodIndex = gameData.world.woodIndex;
	newWood.woodMove.addChild(newWoodMain);
	newWood.addChild(newWood.woodMove);

	area.moveObjects.push(newWood);
	worldWoodContainer.addChild(newWood);
	gameData.world.woodIndex++;
}

function createTrain(area, y){
	const trainIndex = area.data.objectArr[area.data.objectArrIndex];
	area.data.objectArrIndex++;
	if(area.data.objectArrIndex > area.data.objectArr.length-1){
		shuffle(area.data.objectArr);
		area.data.objectArrIndex = 0;
	}

	const newTrainMain = new createjs.Bitmap(loader.getResult('itemTrainObjectMain'+area.data.railwayIndex+'_'+trainIndex));
	newTrainMain.regX = railwayAssets[area.data.railwayIndex].objects[trainIndex].regX;
	newTrainMain.regY = railwayAssets[area.data.railwayIndex].objects[trainIndex].regY;
	const newTrainTire = new createjs.Bitmap(loader.getResult('itemTrainbjectTire'+area.data.railwayIndex+'_'+trainIndex));
	newTrainTire.regX = railwayAssets[area.data.railwayIndex].objects[trainIndex].regX;
	newTrainTire.regY = railwayAssets[area.data.railwayIndex].objects[trainIndex].regY;

	const newTrain = new createjs.Container();
	const objectW = railwayAssets[area.data.railwayIndex].objects[trainIndex].width;
	const objectH = railwayAssets[area.data.railwayIndex].objects[trainIndex].height;
	newTrain.setBounds(-(objectW/2), -(objectH/2), objectW, objectH);
	newTrain.trainMain = newTrainMain;
	newTrain.trainTire = newTrainTire;

	const randomX = randomIntFromInterval(0,gameData.world.size*3);
	newTrain.objectType = 'train';
	newTrain.y = y;
	newTrain.x = area.data.side == true ? -((gameData.world.width/2)+randomX+(objectW/2)) : ((gameData.world.width/2)+randomX+(objectW/2));
	newTrain.scaleX = area.data.side == true ? 1 : -1;
	newTrain.objectW = objectW;
	newTrain.addChild(newTrainMain, newTrainTire);

	area.moveObjects.push(newTrain);
	worldObjectsContainer.addChild(newTrain);
}

/*!
 * 
 * MISC FUNC - This is the function that runs for misc func
 * 
 */
function findColX(size){
	if(gameData.world.colShuffle.length == 0){
		generateColShuffle();
	}
	
	let randomCol;
	if(size > 1){
		const totalLoop = 5;
		for(let n=0; n<totalLoop; n++){
			let storeArr = [];
			for(let l=0; l<gameData.world.colShuffle.length; l++){
				let colCount = gameData.world.colShuffle[l];
				storeArr.push(colCount);
				for(let s=0; s<size-1; s++){
					colCount += 1;
					if(gameData.world.colShuffle.indexOf(colCount) >= 0){
						storeArr.push(colCount);
					}
				}
				if(storeArr.length == size){
					randomCol = storeArr[0];
					for(let r=0; r<storeArr.length; r++){
						gameData.world.colExist.push(storeArr[r]);
						const removeIndex = gameData.world.colShuffle.indexOf(storeArr[r]);
						gameData.world.colShuffle.splice(removeIndex,1);
					}
					n = totalLoop;
					l = gameData.world.colShuffle.length;
				}
			}
			if(storeArr.length != size){
				generateColShuffle();
			}
		}
	}else{
		randomCol = gameData.world.colShuffle[0];
		gameData.world.colExist.push(randomCol);
		gameData.world.colShuffle.splice(0,1);
	}
	return gameData.world.colX + (randomCol * gameData.world.size);
}

function generateColShuffle(){
	gameData.world.colShuffle = [];
	for(let n=0; n<gameData.world.col; n++){
		if(gameData.world.colExist.indexOf(n) == -1){
			if(gameData.world.colExclude.indexOf(n) == -1){
				gameData.world.colShuffle.push(n);
			}
		}
	}
	shuffle(gameData.world.colShuffle);
}

function getCarGap(){
	return randomIntFromInterval(gameSettings.stage[gameData.stageIndex].carGap[0],gameSettings.stage[gameData.stageIndex].carGap[1]);
}

function getWoodGap(){
	return randomIntFromInterval(gameSettings.stage[gameData.stageIndex].woodGap[0],gameSettings.stage[gameData.stageIndex].woodGap[1]);
}

function findNearestX(x,dir){
	const frogRow = Math.floor(Math.abs(Math.floor(frogContainer.y)/gameData.world.size));
	let thisArea = gameData.areasArr[frogRow+1];
	if(dir == 'down'){
		thisArea = gameData.areasArr[frogRow-1];
	}
	if(thisArea.type == 'river'){
		return x;
	}else{
		let posArr = [];
		let startX = gameData.world.colX;
		for(let n=0; n<gameData.world.col; n++){
			const checkDistance = getDistance(startX, 0, x, 0);
			posArr.push({x:startX, distance:checkDistance});
			startX += gameData.world.size;
		}

		sortOnObject(posArr,'distance');
		return posArr[0].x;
	}
}

function hitBounds(mc1, mc2) {
	const m1x = mc1.x + mc1.getBounds().x;
    const m1y = mc1.y + mc1.getBounds().y;
    const m1w = mc1.getBounds().width;
    const m1h = mc1.getBounds().height;
    const m2x = mc2.x + mc2.getBounds().x;
    const m2y = mc2.y + mc2.getBounds().y;
    const m2w = mc2.getBounds().width;
    const m2h = mc2.getBounds().height;

    return m1x < m2x + m2w &&
        m1x + m1w > m2x &&
        m1y < m2y + m2h &&
        m1y + m1h > m2y;
}

/*!
 * 
 * TOUCH EVENT - This is the function that runs to move frog
 * 
 */
function touchWorld(){
	const pt = worldObjectsContainer.globalToLocal(stage.mouseX, stage.mouseY);
	const distanceX = Math.abs(pt.x - frogContainer.x);
	const distanceY = Math.abs(pt.y - frogContainer.y);
	
	if(distanceX > distanceY){
		if(pt.x < frogContainer.x){
			animateFrog('left');
		}else{
			animateFrog('right');
		}
	}else{
		if(pt.y < frogContainer.y){
			animateFrog('up');
		}else{
			animateFrog('down');
		}
	}
}

function animateFrog(dir){
	if(!gameData.interact) return;
	if(gameData.over) return;
	if(gameData.jumping){
		gameData.nextDir = dir;
		return;
	}

	//try
	let proceedJump = true;
	let newX = frogContainer.x;
	let newY = frogContainer.y;
	let scaleX = itemFrog.scaleX;
	let newInnerX = frogInnerContainer.x;

	if(dir == 'left'){
		scaleX = 1;
		newX -= gameData.world.size;
		newInnerX -= gameData.world.size;
		animation = 'sidejump';
	}else if(dir == 'right'){
		scaleX = -1;
		newX += gameData.world.size;
		newInnerX += gameData.world.size;
		animation = 'sidejump';
	}else if(dir == 'up'){
		newX = findNearestX(frogContainer.x,'up');
		newY -= gameData.world.size;
		animation = 'backjump';
	}else if(dir == 'down'){
		newX = findNearestX(frogContainer.x,'down');
		newY += gameData.world.size;
		animation = 'jump';
	}

	cameraShakeContainer.x = 0;
	cameraShakeContainer.y = 0;
	itemFrogShape.x = newX;
	itemFrogShape.y = newY;
	itemFrog.scaleX = itemFrogInner.scaleX = scaleX;
	if(itemFrogPower != null){
		itemFrogPower.scaleX = itemFrogPowerInner.scaleX = scaleX;
	}
	itemFrog.gotoAndPlay(animation);
	playSound('soundJump');

	//check powers
	const invisibleFrog = gameData.powers.type == 1 ? false : true;
	const doubleJumpFwd = gameData.powers.type == 2 ? true : false;

	//check if can jump
	const loopArea = ((doubleJumpFwd == true) && (dir == 'up')) ? 2 : 1;
	let newDoubleY = newY;
	let loopProceedJump = true;
	gameData.powers.jumpCount = 1;
	for(let l=0; l<loopArea; l++){
		for(let n=0; n<gameData.areasArr.length; n++){
			const thisArea = gameData.areasArr[n];
			for(let o=0; o<thisArea.objects.length; o++){
				const thisObject = thisArea.objects[o];
				if(thisObject.objectType == 'object' && hitBounds(thisObject, itemFrogShape) && invisibleFrog){
					playSound('soundError');
					animateObject(thisObject);
					loopProceedJump = false;
				}
			}
		}
		if(doubleJumpFwd){
			if(l == 0){
				proceedJump = loopProceedJump;
				if(loopProceedJump){
					newDoubleY -= gameData.world.size;
					itemFrogShape.y = newDoubleY;
				}
			}else if(l == 1){
				if(loopProceedJump){
					newY = newDoubleY;
					gameData.powers.jumpCount = 2;
				}else{
					itemFrogShape.y = newY;
				}
			}
		}else{
			proceedJump = loopProceedJump;
		}
	}

	for(let n=0; n<gameData.areasArr.length; n++){
		const thisArea = gameData.areasArr[n];
		for(let o=0; o<thisArea.objects.length; o++){
			const thisObject = thisArea.objects[o];
			if(thisObject.visible && thisObject.objectType == 'power' && hitBounds(thisObject, itemFrogShape)){
				thisObject.visible = false;
				activatePower(thisObject);
			}
		}
	}

	if(newX < gameData.world.colX){
		proceedJump = false;
	}else if(newX > gameData.world.colX + ((gameData.world.col-1) * gameData.world.size)){
		proceedJump = false;
	}
	if(newY > gameData.world.startY){
		proceedJump = false;
	}

	if(proceedJump){
		gameData.dir = dir;
		gameData.jumping = true;
		let animateInner = false;
		if(itemFrog.woodObject != null){
			if(dir == 'left' || dir == 'right'){
				animateInner = true;
			}else{
				itemFrog.woodObject = null;
				frogInnerContainer.visible = false;
				frogContainer.visible = true;
			}
		}

		if(animateInner){
			TweenMax.to(frogInnerContainer, .2, {x:newInnerX, overwrite:true, onComplete:animateFrogComplete, onCompleteParams:[dir]});
		}else{
			TweenMax.to(frogContainer, .2, {x:newX, y:newY, overwrite:true, onComplete:animateFrogComplete, onCompleteParams:[dir]});
		}
	}
}

function animateFrogComplete(dir){
	gameData.jumping = false;
	if(frogContainer.y < (gameData.world.startY - (gameData.world.size*(gameData.world.reset*2)))){
		resetWorldLoop();
	}

	if(gameData.powers.type == 2 && gameData.dir == "up"){
		animateJumpGuide();
	}

	const frogRow = Math.floor(Math.abs(Math.floor(frogContainer.y)/gameData.world.size));
	let jumpOnWood = false;
	const thisArea = gameData.areasArr[frogRow];
	if(thisArea.type == 'river'){
		for(let o=0; o<thisArea.moveObjects.length; o++){
			const thisMoveObject = thisArea.moveObjects[o];
			if(hitBounds(thisMoveObject, frogContainer)){
				const pt = worldObjectsContainer.localToLocal(frogContainer.x, frogContainer.y, thisMoveObject);
				frogInnerContainer.x = pt.x;
				frogInnerContainer.y = pt.y;
				frogInnerContainer.visible = true;
				frogContainer.visible = false;
				itemFrog.woodObject = thisMoveObject;
				thisMoveObject.woodMove.addChild(frogInnerContainer);
				jumpOnWood = true;
				o = thisArea.moveObjects.length;
			}
		}
		if(!jumpOnWood){
			endGame('drown');
		}
	}

	if(!jumpOnWood){
		itemFrog.woodObject = null;
		frogInnerContainer.visible = false;
		frogContainer.visible = true;
	}else{
		animateWood(itemFrog.woodObject.woodMove);
	}

	if(dir == 'up'){
		if(gameData.distance < 0){
			gameData.distance += gameData.powers.jumpCount;
			if(gameData.distance == 1){
				gameData.powers.count += 1;
				playerData.score += 1;
				updateGameScore();
				startIdleTimer();
			}
		}else{
			gameData.powers.count += gameData.powers.jumpCount;
			playerData.score += gameData.powers.jumpCount;
			updateGameScore();
			startIdleTimer();
		}
	}else if(dir == 'down'){
		gameData.distance--;
	}

	if(gameData.nextDir != ''){
		const nextDir = gameData.nextDir;
		gameData.nextDir = '';
		animateFrog(nextDir);
	}
}

/*!
 * 
 * IDLE TIMER - This is the function that runs for idle timer
 * 
 */
function startIdleTimer(){
	if(gameData.powers.type == 1) return;
	worldContainer.idleTimer = 0;
	TweenMax.to(worldContainer, gameSettings.idleTimeOver, {idleTimer:gameSettings.idleTimeOver, ease:Linear.easeNone, overwrite:true, onUpdate:function(){
		const currentTimer  = gameSettings.idleTimeOver - Math.floor(worldContainer.idleTimer);
		if(currentTimer <= 2){
			shakeCamera(2);
		}
	}, onComplete:idleTimeOver});
}

function idleTimeOver(){
	endGame('catch');
	let startX = -(gameData.world.width/1.5);
	let endX = (gameData.world.width/1.5);
	itemEagle.scaleX = 1;
	if(randomBoolean()){
		itemEagle.scaleX = -1;
		startX = (gameData.world.width/1.5);
		endX = -(gameData.world.width/1.5);
	}

	worldParticlesContainer.addChild(itemEagle);
	itemEagle.x = startX;
	itemEagle.y = frogContainer.y - (randomIntFromInterval(500,800));
	const flySpeed = .8;
	TweenMax.to(itemEagle, flySpeed, {x:frogContainer.x, y:frogContainer.y, overwrite:true, onUpdate:function(){
		shakeCamera(5);
	}, onComplete:function(){
		frogContainer.visible = false;
		frogInnerContainer.visible = false;
		TweenMax.to(itemEagle, flySpeed, {x:endX, y:frogContainer.y - (randomIntFromInterval(500,800)), overwrite:true});
	}});
}

function shakeCamera(range){
	cameraShakeContainer.x = 0 + randomIntFromInterval(-range,range);
	cameraShakeContainer.y = 0 + randomIntFromInterval(-range,range);
}

function animateObject(object){
	object.oriX = object.x;
	object.oriY = object.y;
	const tweenSpeed = .2;
	TweenMax.to(object, tweenSpeed, {alpha:1, overwrite:true, onUpdate:function(){
		object.x = object.oriX + randomIntFromInterval(-5,5);
		object.y = object.oriY + randomIntFromInterval(-5,5);
	}, onComplete:function(){
		object.x = object.oriX;
		object.y = object.oriY;
	}});
}

function animateWood(wood){
	playSound('soundWood');
	const tweenSpeed = .1;
	TweenMax.to(wood, tweenSpeed, {y:10, overwrite:true, onComplete:function(){
		TweenMax.to(wood, tweenSpeed, {y:0, overwrite:true});
	}});
}

/*!
 * 
 * ACTIVATE POWERS - This is the function that runs to activate power
 * 
 */
function showPowersIntro(){
	gameData.interact = false;
	powersIntroContainer.visible = true;
	powersIntroContainer.alpha = 0;
	TweenMax.to(powersIntroContainer, .2, {alpha:1, overwrite:true, onComplete:function(){
		TweenMax.to(powersIntroContainer, .2, {delay:3, alpha:0, overwrite:true, onComplete:function(){
			gameData.interact = true;
			powersIntroContainer.visible = false;
		}});
	}});
}

function activatePower(thisObject){
	if(gameData.powerIntro){
		gameData.powerIntro = false;
		showPowersIntro();
	}

	playSound('soundCollect');
	playSound('soundPowerUp');
	TweenMax.killTweensOf(worldContainer);
	const powerIndex = thisObject.powerType;
	
	//icons
	powerIconContainer.removeAllChildren();
	powerIconInnerContainer.removeAllChildren();
	const newPowerIcon = new createjs.Bitmap(loader.getResult('itemPowerIcon'+powerIndex));
	const newPowerIconInner = new createjs.Bitmap(loader.getResult('itemPowerIcon'+powerIndex));
	centerReg(newPowerIcon);
	centerReg(newPowerIconInner);
	newPowerIcon.y = newPowerIconInner.y = -70;
	powerIconContainer.addChild(newPowerIcon);
	powerIconInnerContainer.addChild(newPowerIconInner);
	animatePowerIcon(newPowerIcon);
	animatePowerIcon(newPowerIconInner);

	//frogs
	frogPowerContianer.removeAllChildren();
	frogPowerInnerContainer.removeAllChildren();
	if(powerIndex == 1){
		itemFrog.visible = itemFrogInner.visible = false;
		itemFrogPower = createFrog(powerIndex);
		itemFrogPowerInner = createFrog(powerIndex);
		itemFrogPower.gotoAndStop(itemFrog.currentFrame);
		itemFrogPowerInner.gotoAndStop(itemFrog.currentFrame);
		itemFrogPower.scaleX = itemFrogPowerInner.scaleX = itemFrog.scaleX;
		frogPowerContianer.addChild(itemFrogPower);
		frogPowerInnerContainer.addChild(itemFrogPowerInner);
		animateFrogBlink(itemFrogPower);
		animateFrogBlink(itemFrogPowerInner);
		itemBubble.visible = itemBubbleInner.visible = true;
		itemBubble.x = itemBubble.y = 0;
		itemBubbleInner.x = itemBubbleInner.y = 0;
		animateBubble();
	}else if(powerIndex == 2){
		itemFrogPower = createFrog(powerIndex);
		itemFrogPowerInner = createFrog(powerIndex);
		itemFrogPower.gotoAndStop(itemFrog.currentFrame);
		itemFrogPowerInner.gotoAndStop(itemFrog.currentFrame);
		itemFrogPower.scaleX = itemFrogPowerInner.scaleX = itemFrog.scaleX;
		frogPowerContianer.addChild(itemFrogPower);
		frogPowerInnerContainer.addChild(itemFrogPowerInner);
		jumpGuideContainer.visible = true;
		animateJumpGuide();
	}else if(powerIndex == 3){
		TweenMax.to(itemFreezeOverlay, .2, {alpha:1, overwrite:true});
	}

	gameData.powers.type = powerIndex;
	gameData.powers.timers = gameSettings.powerTimer * 1000;
}

function deactivePower(sound){
	if(sound) playSound('soundPowerDown');
	TweenMax.killTweensOf(itemFrogPower);
	TweenMax.killTweensOf(itemFrogPowerInner);
	TweenMax.killTweensOf(itemBubble);
	powerIconContainer.removeAllChildren();
	powerIconInnerContainer.removeAllChildren();
	frogPowerContianer.removeAllChildren();
	frogPowerInnerContainer.removeAllChildren();

	gameData.powers.active = true;
	gameData.powers.type = 0;
	gameData.powers.timers = 0;
	gameData.powers.count = 0;
	gameData.powers.next = getPowersCount();
	jumpGuideContainer.visible = false;
	if(itemFrogPower != null){
		itemFrogPower.alpha = itemFrogPowerInner.alpha = 1;
		itemFrogPower = null;
		itemFrogPowerInner = null;
	}
	itemFrog.visible = itemFrogInner.visible = true;
	itemBubble.visible = itemBubbleInner.visible = false;
	TweenMax.to(itemFreezeOverlay, .2, {alpha:0, overwrite:true});
}

function animatePower(power){
	const tweenSpeed = .1;
	TweenMax.to(power, tweenSpeed, {scaleX:1.2, overwrite:true, onComplete:function(){
		TweenMax.to(power, tweenSpeed, {scaleX:1, overwrite:true, onComplete:animatePower, onCompleteParams:[power]});
	}});
}

function animatePowerIcon(icon){
	let remaining = gameData.powers.timers;
    let total = gameSettings.powerTimer * 1000;
    let progress = 1 - (remaining / total);
    let tweenSpeed = 0.5 - (progress * 0.5);
    if (tweenSpeed < 0.08) tweenSpeed = 0.08;
	TweenMax.to(icon, tweenSpeed, {scale:.5, overwrite:true, onComplete:function(){
		TweenMax.to(icon, tweenSpeed, {scale:1, overwrite:true, onComplete:animatePowerIcon, onCompleteParams:[icon]});
	}});
}

function animateFrogBlink(frog){
	const tweenSpeed = .2;
	TweenMax.to(frog, tweenSpeed, {alpha:.6, overwrite:true, onComplete:function(){
		TweenMax.to(frog, tweenSpeed, {alpha:.8, overwrite:true, onComplete:animateFrogBlink, onCompleteParams:[frog]});
	}});
}

function animateJumpGuide(){
	itemGuide.scale = .3;
	itemGuide.y = gameData.world.size;
	TweenMax.to(itemGuide, .5, {scale:1, y:0, overwrite:true});
}

function animateBubble(){
	let shakePos = [];
	for(let n=0; n<4; n++){
		const randomX = randomIntFromInterval(-5,5);
		const randomY = randomIntFromInterval(-5,5);
		shakePos.push({x:randomX,y:randomY});
 
	}
	shakePos.push({x:0,y:0});
	TweenMax.to(itemBubble, 1, {bezier:{type:"thru", values:shakePos, curviness:1, autoRotate:false}, ease:Linear.easeNone, overwrite:true, onUpdate:function(){
		itemBubbleInner.x = itemBubble.x;
		itemBubbleInner.y = itemBubble.y;
	}, onComplete:animateBubble});
}

/*!
 * 
 * UPDATE MOVE OBJECTS - This is the function that runs to update move objects
 * 
 */
function updateMoveObjects(delta){
	const invisibleFrog = gameData.powers.type == 1 ? true : false;
	for(let n=0; n<gameData.areasArr.length; n++){
		const thisArea = gameData.areasArr[n];
		if(thisArea.type == 'road'){
			for(let o=0; o<thisArea.moveObjects.length; o++){
				const thisMoveObject = thisArea.moveObjects[o];
				thisMoveObject.carMain.y = randomIntFromInterval(0,1);
				if(thisMoveObject.objectType == 'car' && hitBounds(thisMoveObject, frogContainer) && !gameData.over && !invisibleFrog){
					endGame('dead');
				}
				
				let moveUpdate = ((delta * thisArea.data.speed) / 1000);
				moveUpdate = gameData.powers.type == 3 ? moveUpdate/2 : moveUpdate;
				moveUpdate = thisArea.data.looped == false ? ((delta * 5000) / 1000) : moveUpdate;
				if(thisArea.data.side){
					thisMoveObject.x += moveUpdate;
					if(thisMoveObject.x > (gameData.world.width/2 + (thisMoveObject.objectW/2))){
						worldObjectsContainer.removeChild(thisMoveObject);
						thisArea.moveObjects.splice(o,1);
						thisArea.data.looped = true;
					}
				}else{
					thisMoveObject.x -= moveUpdate;
					if(thisMoveObject.x < -(gameData.world.width/2 + (thisMoveObject.objectW/2))){
						worldObjectsContainer.removeChild(thisMoveObject);
						thisArea.moveObjects.splice(o,1);
						thisArea.data.looped = true;
					}
				}
			}

			const thisMoveObject = thisArea.moveObjects[thisArea.moveObjects.length-1];
			if(thisArea.data.side){
				const distantGap = (thisMoveObject.x - (thisMoveObject.objectW/2)) + (gameData.world.width/2);
				if(distantGap > thisArea.data.gap){
					playCarSound(thisArea.y);
					createCar(thisArea, thisArea.y);
					thisArea.data.gap = getCarGap();
				}
			}else{
				const distantGap = (gameData.world.width/2) - (thisMoveObject.x + (thisMoveObject.objectW/2));
				if(distantGap > thisArea.data.gap){
					playCarSound(thisArea.y);
					createCar(thisArea, thisArea.y);
					thisArea.data.gap = getCarGap();
				}
			}
		}else if(thisArea.type == 'river'){
			for(let o=0; o<thisArea.moveObjects.length; o++){
				const thisMoveObject = thisArea.moveObjects[o];
				let moveUpdate = ((delta * thisArea.data.speed) / 1000);
				moveUpdate = gameData.powers.type == 3 ? moveUpdate/2 : moveUpdate;
				moveUpdate = thisArea.data.looped == false ? ((delta * 5000) / 1000) : moveUpdate;
				if(thisArea.data.side){
					thisMoveObject.x += moveUpdate;
					if(thisMoveObject.x > (gameData.world.width/2 + (thisMoveObject.objectW/2))){
						worldWoodContainer.removeChild(thisMoveObject);
						thisArea.moveObjects.splice(o,1);
						thisArea.data.looped = true;
					}
				}else{
					thisMoveObject.x -= moveUpdate;
					if(thisMoveObject.x < -(gameData.world.width/2 + (thisMoveObject.objectW/2))){
						worldWoodContainer.removeChild(thisMoveObject);
						thisArea.moveObjects.splice(o,1);
						thisArea.data.looped = true;
					}
				}
			}

			const thisMoveObject = thisArea.moveObjects[thisArea.moveObjects.length-1];
			if(thisArea.data.side){
				const distantGap = (thisMoveObject.x - (thisMoveObject.objectW/2)) + (gameData.world.width/2);
				if(distantGap > thisArea.data.gap){
					createWood(thisArea, thisArea.y);
					thisArea.data.gap = getWoodGap();
				}
			}else{
				const distantGap = (gameData.world.width/2) - (thisMoveObject.x + (thisMoveObject.objectW/2));
				if(distantGap > thisArea.data.gap){
					createWood(thisArea, thisArea.y);
					thisArea.data.gap = getWoodGap();
				}
			}
		}else if(thisArea.type == 'railway'){
			const delayUpdate = ((delta * 100) / 1000);
			thisArea.data.delayCount += delayUpdate;

			if(thisArea.data.delayCount > thisArea.data.delay){
				thisArea.data.delay = randomIntFromInterval(thisArea.data.delayDefault[0], thisArea.data.delayDefault[1]);
				thisArea.data.delayCount = 0;
				createTrain(thisArea, thisArea.y);
				const pt = worldRoadContainer.localToGlobal(0, thisArea.y);
				pt.x = pt.x/dpr;
				pt.y = pt.y/dpr;
				if(pt.x > 0 && pt.x < canvasW){
					if(pt.y > 0 && pt.y < canvasH){
						playSound('soundTrain');
					}
				}
			}

			for(let o=0; o<thisArea.moveObjects.length; o++){
				const thisMoveObject = thisArea.moveObjects[o];
				thisMoveObject.trainMain.y = randomIntFromInterval(0,1);
				if(thisMoveObject.objectType == 'train' && hitBounds(thisMoveObject, frogContainer) && !gameData.over && !invisibleFrog){
					endGame('dead');
				}

				let moveUpdate = ((delta * thisArea.data.speed) / 1000);
				moveUpdate = gameData.powers.type == 3 ? moveUpdate/2 : moveUpdate;
				if(thisArea.data.side){
					thisMoveObject.x += moveUpdate;
					if(thisMoveObject.x > (gameData.world.width/2 + (thisMoveObject.objectW/2))){
						worldObjectsContainer.removeChild(thisMoveObject);
						thisArea.moveObjects.splice(o,1);
					}
				}else{
					thisMoveObject.x -= moveUpdate;
					if(thisMoveObject.x < -(gameData.world.width/2 + (thisMoveObject.objectW/2))){
						worldObjectsContainer.removeChild(thisMoveObject);
						thisArea.moveObjects.splice(o,1);
					}
				}
			}
		}
	}
}

function playCarSound(y){
	const pt = worldRoadContainer.localToGlobal(0, y);
	if(pt.x > 0 && pt.x < canvasW){
		if(pt.y > 0 && pt.y < canvasH){
			if(randomBoolean()){
				const soundIndex = randomIntFromInterval(1,2);
				playSound('soundHonk'+soundIndex);
			}
		}
	}
}

function updateFrog(delta){
	itemFrogInner.gotoAndStop(itemFrog.currentFrame);

	if(itemFrog.woodObject != null){
		const pt = itemFrog.woodObject.localToLocal(frogInnerContainer.x, frogInnerContainer.y, worldObjectsContainer);
		frogContainer.x = pt.x;
		frogContainer.y = pt.y;

		if(frogContainer.x < -(gameData.world.width/2) || frogContainer.x > (gameData.world.width/2)){
			itemFrog.woodObject = null;
			endGame('drown');
		}
	}

	if(gameData.powers.type != 0 && gameData.powers.timers > 0){
		if(itemFrogPower != null){
			itemFrogPower.gotoAndStop(itemFrog.currentFrame);
			itemFrogPowerInner.gotoAndStop(itemFrog.currentFrame);
		}

		if(gameData.jumping && gameData.dir == "up"){
			jumpGuideContainer.alpha = 0;
		}else{
			jumpGuideContainer.alpha = 1;
			jumpGuideContainer.x = frogContainer.x;
			jumpGuideContainer.y = frogContainer.y - (gameData.world.size * 2);
		}
		
		if(!powersIntroContainer.visible){
			gameData.powers.timers -= delta;
			if(gameData.powers.timers <= 0){
				//deactive power
				deactivePower(true);
			}
		}
	}
}

/*!
 * 
 * CREATE PARTICLES - This is the function that runs to create particles
 * 
 */
function createWaterSplash(){
	gravityData.offY = frogContainer.y;
	for(let n=0; n<gravityData.total; n++){
		const radiusSize = randomIntFromInterval(5,15);
		const colorIndex = Math.floor(Math.random()*gameSettings.splashColors.length);
		const newSplash = new createjs.Shape();	
		newSplash.graphics.beginFill(gameSettings.splashColors[colorIndex]).drawCircle(0,0,radiusSize);

		newSplash.x = frogContainer.x;
		newSplash.y = frogContainer.y;
		newSplash.xspeed = randomIntFromInterval(-5,5);
		newSplash.yspeed = randomIntFromInterval(-10,-15);
		newSplash.scalespeed = randomIntFromInterval(5,10) * .1;
		gameData.splashObjects.push(newSplash);
		worldParticlesContainer.addChild(newSplash);
	}
}

function updateWaterSplash(delta){
	for(let n=0; n<gameData.splashObjects.length; n++){
		const thisSplash = gameData.splashObjects[n];
		thisSplash.y = thisSplash.y + thisSplash.yspeed;
		thisSplash.x = thisSplash.x + thisSplash.xspeed;
		thisSplash.rotation = thisSplash.rotation + thisSplash.yspeed;

		const decreaseSpeed = ((delta * thisSplash.scalespeed) / 1000);
		if(thisSplash.scale > 0){
			thisSplash.scale -= decreaseSpeed;
		}
		
		thisSplash.yspeed = thisSplash.yspeed * gravityData.drag + gravityData.gravity;
		thisSplash.xspeed = thisSplash.xspeed * gravityData.drag;

		if (thisSplash.y > gravityData.offY) {
			worldParticlesContainer.removeChild(thisSplash);
			gameData.splashObjects.splice(n,1);
			n--;
		}
	}
}

/*!
 * 
 * FOCUS FROG - This is the function that runs to focus frog
 * 
 */
function focusFrogCamera(){
	let cameraX = -frogContainer.x;
	let cameraY = -frogContainer.y;
	const maxScreenX = canvasW - (offset.x * 2);
	let offScreenMaxX = (gameData.world.width - maxScreenX)/2;
	if(viewport.isLandscape){
		offScreenMaxX = (1280 - maxScreenX)/2;
	}
	
	if(cameraX < 0){
		cameraX = cameraX < -offScreenMaxX ? - offScreenMaxX : cameraX;
	}else{
		cameraX = cameraX > offScreenMaxX ?  offScreenMaxX : cameraX;
	}

	if(cameraY <= Math.abs(gameData.world.startY)){
		cameraY = -gameData.world.startY;
	}

	cameraContainer.x = cameraX;
	cameraContainer.y = cameraY;
}

/*!
 * 
 * UPDATE GAME SCORE - This is the function that runs to update game score
 * 
 */
function updateGameScore(){
	scoreTxt.text = scoreOutlineTxt.text = scoreShadowTxt.text = playerData.score;

	//next level
	if(playerData.score >= gameSettings.stage[gameData.stageIndex].nextScore){
		let nextStageIndex = gameData.stageIndex+1;
		nextStageIndex = nextStageIndex > gameSettings.stage.length-1 ? gameSettings.stage.length-1 : nextStageIndex;

		if(gameData.stageIndex != nextStageIndex){
			gameData.stageIndex = nextStageIndex;
		}
	}
}

/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(event){
	if(!gameData.paused){
		focusFrogCamera();
		updateMoveObjects(event.delta);
		updateWaterSplash(event.delta);
		updateFrog(event.delta);

		worldObjectsContainer.sortChildren(sortFunction);
		if(gameData.over){
			worldObjectsContainer.setChildIndex(frogContainer,0);
		}
	}
}

var sortFunction = function(obj1, obj2) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}


/*!
 * 
 * END GAME - This is the function that runs for game end
 * 
 */
function endGame(type){
	gameData.over = true;
	playSound('soundOver');
	deactivePower();

	if(type == 'drown'){
		playSound('soundDrown');
		itemFrog.gotoAndPlay('drown');
		itemSplash.x = frogContainer.x;
		itemSplash.y = frogContainer.y;
		itemSplash.gotoAndPlay('splash');
		worldRoadContainer.addChild(itemSplash);
		createWaterSplash();
	}else if(type == 'dead'){
		playSound('soundHit');
		itemFrog.gotoAndPlay('dead');
	}else{
		playSound('soundEagle');
	}

	TweenMax.to(statusContainer, .5, {alpha:1, overwrite:true});
	TweenMax.to(gameContainer, 2, {overwrite:true, onComplete:function(){
		gameData.paused = true;
		goPage('result')
	}});
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;  
	}
	
	return minutes+':'+seconds;
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOptions(con){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
	if(con!=undefined){
		optionsContainer.visible = con;
	}
}


/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleSoundMute(con){
	buttonSoundOff.visible = buttonSoundOn.visible = false;
	toggleSoundInMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleMusicMute(con){
	buttonMusicOff.visible = buttonMusicOn.visible = false;
	toggleMusicInMute(con);
	if(con){
		buttonMusicOn.visible = true;
	}else{
		buttonMusicOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function shareLinks(action, shareScore){
	if(shareSettings.gtag){
		gtag('event','click',{'event_category':'share','event_label':action});
	}

	var gameURL = location.href;
	gameURL = encodeURIComponent(gameURL.substring(0,gameURL.lastIndexOf("/") + 1));

	var shareTitle = shareSettings.shareTitle.replace("[SCORE]", shareScore);
	var shareText = shareSettings.shareText.replace("[SCORE]", shareScore);

	var shareURL = '';
	if( action == 'facebook' ){
		if(shareSettings.customScore){
			gameURL = decodeURIComponent(gameURL);
			shareURL = `https://www.facebook.com/sharer/sharer.php?u=`+encodeURIComponent(`${gameURL}share.php?title=${shareTitle}&url=${gameURL}&thumb=${gameURL}share.jpg`);
		}else{
			shareURL = `https://www.facebook.com/sharer/sharer.php?u=${gameURL}`;
		}
	}else if( action == 'twitter' ){
		shareURL = `https://twitter.com/intent/tweet?text=${shareText}&url=${gameURL}`;
	}else if( action == 'whatsapp' ){
		shareURL = `https://api.whatsapp.com/send?text=${shareText}%20${gameURL}`;
	}else if( action == 'telegram' ){
		shareURL = `https://t.me/share/url?url=${gameURL}&text=${shareText}`;
	}else if( action == 'reddit' ){
		shareURL = `https://www.reddit.com/submit?url=${gameURL}&title=${shareText}`;
	}else if( action == 'linkedin' ){
		shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${gameURL}`;
	}

	window.open(shareURL);
}