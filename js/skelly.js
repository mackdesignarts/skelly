/* Skelly Game Demo */

(function(){

	// skelly game entrypoint
	
	var config = {
			width: "1000px",
			height: "600px",
			background: "#5e87d1"
	}
	
	// instantiate new game engine object and canvas context
	var Q = Quintus();
	var canvas = $("#game-canvas")[0].getContext('2d');
	initCanvas(config);
	
	// set gameboard params
	function initCanvas(config){
		$("#game-wrapper").css({
			width: config.width,
			height: config.height,
			background: config.background
		})		
		$("#game-canvas").css({
			width: config.width,
			height: config.height,
			background: "none"
		})
	}
	
	// sprite shapes
	function drawCircle(){
		
	}
	
	
	
	
})()