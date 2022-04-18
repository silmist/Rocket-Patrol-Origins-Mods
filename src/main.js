//Points Breakdown:
//60 for Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi)
    //Ice cream float aesthetic
//10 for Display the time remaining (in seconds) on the screen
//20 for Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points
    //The small ice cream on a jetski
//10 for Implement parallax scrolling

//100 points total


//Most base code taken from the Rocket Patrol Origins Tutorial provided in previous assignment



let config = {
    scene: [Menu, Play],
    type: Phaser.CANVAS,
    width: 640,
    height: 480
    
};

let keyF, keyR, keyLEFT, keyRIGHT;


let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let game = new Phaser.Game(config);
