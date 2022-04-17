class Ship extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, pointValue, blorbo){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.blorb = blorbo;
        //this.moveSpeed = 3;
        //this.firing = false;
    }
    
    update(){
        
        if (this.blorb == 1){
            this.x -= 2;
        }

        if (this.blorb == 2){
            this.x -= 4;
        }
        
        
        if(this.x<=0 - this.width){
            this.x = game.config.width;
            
        }


    }

    reset(){
        this.x = game.config.width
    }
}