/****************
 *  
 *  Skelly Octagon Game Demo 
 *  by Tony McLaughlin
 *  
 ****************/


(function(){
			
    var tableWidth = 1554,
        tableHeight = 668;

    // game engine object and modules
    var Q = window.Q = Quintus()
        .include("Sprites, Scenes, Input, 2D, Touch")
        .setup({
            width: tableWidth,
            height: tableHeight,
        })
        .controls();

    Q.touch(Q.SPRITE_ALL);
	
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
		        x: 35,
		        y: 35,
		        w: 70,
		        h: 70,
		        speed: 10

		    });

            // drag and release events
		    this.on("drag");
		    this.on("touchEnd");
		    
		},

		drag: function (touch) {
		    console.log("draggng");
		    this.p.dragging = true;
		    this.p.x = touch.origX + touch.dx;
		    this.p.y = touch.origY + touch.dy;
		},

	    touchEnd: function(touch) {
	        this.p.dragging = false;
	    }

	});
	
    // asset loader and game loop
	var assets = [
        "game_surface.png",
        "disc_blue_70px.png",
        "disc_red_70px.png",
        "disc_blue_100px.png",
        "disc_red_100px.png",
        "disc_blue_50px.png",
        "disc_red_50px.png"
	];

	Q.load(assets, function () {
			
		var background = new Q.Sprite({
			asset: "game_surface.png",
			x: tableWidth / 2,
			y: tableHeight / 2
		})
		
		/* instantiate 2 sets of player objects for each team -> 2 Gliders, 4 Strikers, 3 Defenders, 1 Goal */
		 
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
			asset: "disc_blue_70px.png"
		});
		
		// ** GAME LOOP **
		Q.gameLoop(function(dt){
			Q.clear();			
			background.render(Q.ctx);
			
			player1.defender[0].update(dt);
			player1.defender[0].render(Q.ctx);
			
		})

	});
	
})()