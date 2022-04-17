console.log("hello from menu dot js");


class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/shot.wav');
        this.load.audio('music', './assets/bgm.wav');
        this.load.image('grid','assets/grid.png');

      }
    

    create(){
        this.grid = this.add.tileSprite(
          0,0, game.config.width, game.config.height, 'grid'
      
        ).setOrigin(0,0);


        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '26px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text((game.config.width/3 ), game.config.height/2 - borderUISize - 
        borderPadding, 'ICE CREAM FLOAT', menuConfig).setOrigin(0,5);
        
        this.add.text((game.config.width/4.5), game.config.height/2, 
        'Use arrows to move & (F) to fire', menuConfig).setOrigin(0,5);

        menuConfig.backgroundColor = '#00FFFF';

        menuConfig.color = '#000';

        this.add.text((game.config.width/6), game.config.height/2 + borderUISize + 
        borderPadding, 'Press <-- for Novice or --> for Expert', menuConfig).setOrigin(0,5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        


        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("play");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("play");    
        }
      }
    }



