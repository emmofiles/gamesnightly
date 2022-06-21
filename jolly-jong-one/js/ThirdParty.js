var ThirdParty = {// Tailored specifically for plays.org

centerHorizontally: true,
centerVertically: true,
showRotateHint: true,
enableFullscreenToggle: true,
enableCloudHiscores: false,
enablePWA: true,
splashScreen: 'img/plays.org.png',
privacyStatement: false,
showCookieBar: false,
gaUA: false,
ads: false,
moreGames: function(lang) {
	window.open('https://play.gamesnightly.com');
},

// Called when all assets have been loaded
loadingComplete: function()
{	
	//console.log('API: loadingComplete');
},

// Called when the main menu is showed
mainMenu: function()
{  
	//console.log('API: mainMenu');
},

gameHelp: function()
{  
	//console.log('API: gameHelp');
},

// Called when the game (first level) starts
gameStart: function()
{  
	//console.log('API: gameStart');
},

// Called when a level is completed
levelComplete: function(level)
{  
	//console.log('API: levelComplete: ' + level);
},

// Called when game over
gameOver: function()
{  
	//console.log('API: gameOver');
},

// Called when game is restarted
restartGame: function()
{  
	//console.log('API: restartGame');
},

// Called when game is completed (all levels completed)
gameComplete: function()
{  
	//console.log('API: gameComplete');
},

showLeaderboard: function(suffix)
{  
	//console.log('API: showLeaderboard');
	GameHiscore.leaderBoard(suffix);
},

// Called when user is ready to submit a score.
submitScore: function(score, suffix)
{  
	GameHiscore.submitScore(score, suffix);
}

};