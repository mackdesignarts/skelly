/****************
 *  
 *  Skelly Game Demo 
 *  by Tony McLaughlin
 *  
 ****************/


(function(){
	
	var config = {
			width: "1000px",
			height: "600px",
			background: "#d4dbfa"
	}
	
	initCanvasBG(config);
		
	// instantiate new game engine object
	var Q = Quintus()
		.include('Sprites', 'Scenes', 'Input')
		.setup('game-canvas', {
			width: 1000,
			height: 600
		});
	
	Q.options = {
	    imagePath: "img/",
	    // audioPath: "audio/",
	    // dataPath:  "data/",
	    // audioSupported: [ 'mp3','ogg' ],
	    // sound: true,
	    frameTimeLimit: 100
	};
	
	// player classes
	Q.Sprite.extend('Glider', {
		init: function(p) {
			this._super(p, {
				x: 250,
				y: 250,
				w: 25,
				h: 25,
				speed: 10
			})
		}
	});
	
	Q.Sprite.extend('Striker', {
		init: function(p) {
			this._super(p, {
				x: 150,
				y: 150,
				w: 35,
				h: 35,
				speed: 10
			})
		}
	});
	
	Q.Sprite.extend('Defender', {
		init: function(p) {
			this._super(p, {
				x: 50,
				y: 50,
				w: 100,
				h: 100,
				speed: 10
			})
		}
	});
	
	// asset loader and game loop
	Q.load(["game_surface.png", "disc_blue.png", "disc_red.png"], function(){
			
		var background = new Q.Sprite({
			asset: "game_surface.png",
			x: Q.el.width / 2,
			y: Q.el.height / 2,
			type: Q.SPRITE_NONE
		})
		
		/* instantiate 2 sets of player objects for each team ->
		 * 
		 * 2 Gliders
		 * 4 Strikers
		 * 3 Defenders
		 * 1 Goal
		 * 
		 */
		
		var player1 = {
			glider: [],
			striker: [],
			defender: [],
			goal: []
		}
		
		var player2 = {
			glider: [],
			striker: [],
			defender: [],
			goal: []
		}
						
		player1.defender[0] = new Q.Defender({
			asset: "disc_blue.png"
		});
		
		// ** GAME LOOP **
		Q.gameLoop(function(dt){
			Q.clear();			
			background.render(Q.ctx);
			
			player1.defender[0].update(dt);
			player1.defender[0].render(Q.ctx);
			
		})

	});
	
	// configure HTML wrapper
	function initCanvasBG(config){
		$("#game-wrapper").css({
			width: config.width,
			height: config.height,
			background: config.background
		});
		$("#game-canvas").css({
			width: config.width,
			height: config.height
		});	
	}
	
	
	
	
})()