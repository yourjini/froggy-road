////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	checkMobileEvent();
	
	$(window).resize(function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkMobileOrientation, 1000);
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/background_p.png', id:'backgroundP'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/logo_p.png', id:'logoP'},
			{src:'assets/button_start.png', id:'buttonStart'},

			{src:'assets/item_status.png', id:'itemStatus'},
			{src:'assets/item_frog.png', id:'itemFrog'},
			{src:'assets/item_splash.png', id:'itemSplash'},
			{src:'assets/item_bg_game.png', id:'itemBgGame'},
			{src:'assets/item_eagle.png', id:'itemEagle'},
			{src:'assets/item_power_1.png', id:'itemPower1'},
			{src:'assets/item_power_2.png', id:'itemPower2'},
			{src:'assets/item_power_3.png', id:'itemPower3'},
			{src:'assets/item_power_icon_1.png', id:'itemPowerIcon1'},
			{src:'assets/item_power_icon_2.png', id:'itemPowerIcon2'},
			{src:'assets/item_power_icon_3.png', id:'itemPowerIcon3'},
			{src:'assets/item_frog_invisible.png', id:'itemFrogInvisible'},
			{src:'assets/item_frog_jump.png', id:'itemFrogJump'},
			{src:'assets/item_guide.png', id:'itemGuide'},
			{src:'assets/item_freeze_overlay.png', id:'itemFreezeOverlay'},
			{src:'assets/item_bubble.png', id:'itemBubble'},
			{src:'assets/item_powers.png', id:'itemPowers'},
		
			{src:'assets/button_share.png', id:'buttonShare'},
			{src:'assets/button_save.png', id:'buttonSave'},
			{src:'assets/social/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/social/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/social/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/social/button_telegram.png', id:'buttonTelegram'},
			{src:'assets/social/button_reddit.png', id:'buttonReddit'},
			{src:'assets/social/button_linkedin.png', id:'buttonLinkedin'},

			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/item_pop.png', id:'itemPop'},
			{src:'assets/item_pop_p.png', id:'itemPopP'},
			{src:'assets/button_confirm.png', id:'buttonConfirm'},
			{src:'assets/button_cancel.png', id:'buttonCancel'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_music_on.png', id:'buttonMusicOn'},
			{src:'assets/button_music_off.png', id:'buttonMusicOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}
	];

	for(let n=0; n<dirtAssets.length; n++){
		manifest.push({src:dirtAssets[n].src, id:'itemDirt'+n});
	}

	for(let n=0; n<objectAssets.length; n++){
		manifest.push({src:objectAssets[n].src, id:'itemObject'+n});
	}

	for(let n=0; n<roadAssets.length; n++){
		manifest.push({src:roadAssets[n].main, id:'itemRoad'+n});
		manifest.push({src:roadAssets[n].side, id:'itemRoadSide'+n});
		manifest.push({src:roadAssets[n].line, id:'itemRoadLine'+n});
		for(var o=0; o<roadAssets[n].objects.length; o++){
			manifest.push({src:roadAssets[n].objects[o].main, id:'itemRoadObjectMain'+n+'_'+o});
			manifest.push({src:roadAssets[n].objects[o].tire, id:'itemRoadObjectTire'+n+'_'+o});
		}
	}

	for(let n=0; n<riverAssets.length; n++){
		manifest.push({src:riverAssets[n].main, id:'itemRiver'+n});
		manifest.push({src:riverAssets[n].side, id:'itemRiverSide'+n});
		for(var o=0; o<riverAssets[n].objects.length; o++){
			manifest.push({src:riverAssets[n].objects[o].main, id:'itemRiverObjectMain'+n+'_'+o});
		}
	}

	for(let n=0; n<railwayAssets.length; n++){
		manifest.push({src:railwayAssets[n].main, id:'itemRailway'+n});
		manifest.push({src:railwayAssets[n].side, id:'itemRailwaySide'+n});
		for(var o=0; o<railwayAssets[n].objects.length; o++){
			manifest.push({src:railwayAssets[n].objects[o].main, id:'itemTrainObjectMain'+n+'_'+o});
			manifest.push({src:railwayAssets[n].objects[o].tire, id:'itemTrainbjectTire'+n+'_'+o});
		}
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	audioOn = true;
	if(!isDesktop){
		if(!enableMobileAudio){
			audioOn=false;
		}
	}else{
		if(!enableDesktopAudio){
			audioOn=false;
		}
	}
	
	if(audioOn){
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundButton'});
		manifest.push({src:'assets/sounds/sound_hit.ogg', id:'soundHit'});
		manifest.push({src:'assets/sounds/sound_result.ogg', id:'soundResult'});
		manifest.push({src:'assets/sounds/sound_jump.ogg', id:'soundJump'});
		manifest.push({src:'assets/sounds/sound_start.ogg', id:'soundStart'});
		manifest.push({src:'assets/sounds/sound_drown.ogg', id:'soundDrown'});
		manifest.push({src:'assets/sounds/sound_eagle.ogg', id:'soundEagle'});
		manifest.push({src:'assets/sounds/sound_wood.ogg', id:'soundWood'});
		manifest.push({src:'assets/sounds/sound_train.ogg', id:'soundTrain'});
		manifest.push({src:'assets/sounds/sound_error.ogg', id:'soundError'});
		manifest.push({src:'assets/sounds/sound_honk1.ogg', id:'soundHonk1'});
		manifest.push({src:'assets/sounds/sound_honk2.ogg', id:'soundHonk2'});
		manifest.push({src:'assets/sounds/sound_over.ogg', id:'soundOver'});
		manifest.push({src:'assets/sounds/sound_collect.ogg', id:'soundCollect'});
		manifest.push({src:'assets/sounds/sound_powerup.ogg', id:'soundPowerUp'});
		manifest.push({src:'assets/sounds/sound_powerdown.ogg', id:'soundPowerDown'});
		manifest.push({src:'assets/sounds/music_game.ogg', id:'musicGame'});
		manifest.push({src:'assets/sounds/music_main.ogg', id:'musicMain'});
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}