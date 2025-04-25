class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 20;
        
        this.leftArmX = this.bodyX - 120;
        this.leftArmY = this.bodyY + 20;
        
        this.rightArmX = this.bodyX + 120;
        this.rightArmY = this.bodyY + 20;

        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 100;
        
        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 100;
        
        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY - 20;

        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY - 20;

        this.leftAntennaX = this.bodyX - 30;
        this.leftAntennaY = this.bodyY - 80;

        this.rightAntennaX = this.bodyX + 30;
        this.rightAntennaY = this.bodyY - 80;

        this.fKey = null;
        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) => {
            if (my.sprite.mouthOpen.visible == true)
            {
                my.sprite.mouthClosed.visible = true;
                my.sprite.mouthOpen.visible = false;
            }
            else
            {
                my.sprite.mouthOpen.visible = true;
                my.sprite.mouthClosed.visible = false;
            } 
        });

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_whiteD.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteD.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteE.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_whiteE.png");

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteB.png");

        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_cute_light.png");

        my.sprite.leftAntenna = this.add.sprite(this.leftAntennaX, this.leftAntennaY, "monsterParts", "detail_dark_antenna_large.png");
        my.sprite.leftAntenna.flipX = true;
        my.sprite.rightAntenna = this.add.sprite(this.rightAntennaX, this.rightAntennaY, "monsterParts", "detail_dark_antenna_large.png");

        my.sprite.mouthClosed = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthClosed.flipY = true;
        my.sprite.mouthOpen = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthF.png");

        my.sprite.mouthOpen.visible = false;   
    }   

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown) 
        { 
            this.bodyX -= 5;
            this.leftArmX -= 5;
            this.rightArmX -= 5;
            this.leftLegX -= 5;
            this.rightLegX -= 5;
            this.leftEyeX -= 5;
            this.rightEyeX -= 5;
            this.leftAntennaX -= 5;
            this.rightAntennaX -= 5;
            
            my.sprite.body.x = this.bodyX;
            my.sprite.mouthClosed.x = this.bodyX;
            my.sprite.mouthOpen.x = this.bodyX;
            my.sprite.leftArm.x = this.leftArmX;
            my.sprite.rightArm.x = this.rightArmX;
            my.sprite.leftLeg.x = this.leftLegX;
            my.sprite.rightLeg.x = this.rightLegX;
            my.sprite.leftEye.x = this.leftEyeX;
            my.sprite.rightEye.x = this.rightEyeX;
            my.sprite.leftAntenna.x = this.leftAntennaX;
            my.sprite.rightAntenna.x = this.rightAntennaX;
        }
        if (this.dKey.isDown) 
        { 
            this.bodyX += 5;
            this.leftArmX += 5;
            this.rightArmX += 5;
            this.leftLegX += 5;
            this.rightLegX += 5;
            this.leftEyeX += 5;
            this.rightEyeX += 5;
            this.leftAntennaX += 5;
            this.rightAntennaX += 5;

            my.sprite.body.x = this.bodyX;
            my.sprite.mouthClosed.x = this.bodyX;
            my.sprite.mouthOpen.x = this.bodyX;
            my.sprite.leftArm.x = this.leftArmX;
            my.sprite.rightArm.x = this.rightArmX;
            my.sprite.leftLeg.x = this.leftLegX;
            my.sprite.rightLeg.x = this.rightLegX;
            my.sprite.leftEye.x = this.leftEyeX;
            my.sprite.rightEye.x = this.rightEyeX;
            my.sprite.leftAntenna.x = this.leftAntennaX;
            my.sprite.rightAntenna.x = this.rightAntennaX;
        }
    }
}