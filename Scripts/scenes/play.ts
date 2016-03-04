// PLAY SCENE
//Jacob Parnell
// 04/03/2016
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _rollButton: objects.Button;
        private _rolls: createjs.Bitmap[];
        private _die1Label: objects.Label;
        private _die2Label: objects.Label;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //add Roll button to the scene
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);


            //Add Play Label
            this._die1Label = new objects.Label(
                "Dice1", "20px Consolas",
                "#000000",
                325, 225);
            this.addChild(this._die1Label);

            this._die2Label = new objects.Label(
                "Dice2", "20px Consolas",
                "#000000",
                525, 225);
            this.addChild(this._die2Label);

            this._initializeBitmapArray();


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }

        private _rollDice(): string[] {
            var diceLine = ["", ""];
            var outCome = [0, 0];
            for (var roll = 0; roll < 2; roll++) {
                outCome[roll] = Math.floor((Math.random() * 6) + 1);
                switch (outCome[roll]) {
                    case 1:
                        diceLine[roll] = "Dice1";
                        break;
                    case 2:
                        diceLine[roll] = "Dice2";
                        break
                    case 3:
                        diceLine[roll] = "Dice3";
                        break
                    case 4:
                        diceLine[roll] = "Dice4";
                        break
                    case 5:
                        diceLine[roll] = "Dice5";
                        break
                    case 6:
                        diceLine[roll] = "Dice6";
                        break
                }
            }
            return diceLine;
        }

        private _initializeBitmapArray(): void {
            this._rolls = new Array<createjs.Bitmap>();
            for (var roll: number = 0; roll < 2; roll++) {
                this._rolls[roll] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._rolls[roll].x = 200 + (roll * 200);
                this._rolls[roll].y = 100;
                this.addChild(this._rolls[roll]);
                console.log("roll" + roll + " " + this._rolls[roll]);
            }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent): void {
            console.log("Roll");
            var bitmap: string[] = this._rollDice();

            for (var die: number = 0; die < 2; die++) {
                this._rolls[die].image = assets.getResult(bitmap[die]);
                if (die == 1) {
                    this._die2Label.text = bitmap[die];
                } else {
                    this._die1Label.text = bitmap[die];
                }
            }

        }

    }
}