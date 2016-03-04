var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
//Jacob Parnell
// 04/03/2016
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //add Roll button to the scene
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            //Add Play Label
            this._die1Label = new objects.Label("Placeholder for Die 1", "20px Consolas", "#000000", 325, 225);
            this.addChild(this._die1Label);
            this._die2Label = new objects.Label("Placeholder for Die 2", "20px Consolas", "#000000", 525, 225);
            this.addChild(this._die2Label);
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._rollDice = function () {
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
                        break;
                    case 3:
                        diceLine[roll] = "Dice3";
                        break;
                    case 4:
                        diceLine[roll] = "Dice4";
                        break;
                    case 5:
                        diceLine[roll] = "Dice5";
                        break;
                    case 6:
                        diceLine[roll] = "Dice6";
                        break;
                }
            }
            return diceLine;
        };
        Play.prototype._initializeBitmapArray = function () {
            this._rolls = new Array();
            for (var roll = 0; roll < 2; roll++) {
                this._rolls[roll] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._rolls[roll].x = 200 + (roll * 200);
                this._rolls[roll].y = 100;
                this.addChild(this._rolls[roll]);
                console.log("roll" + roll + " " + this._rolls[roll]);
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            console.log("Roll");
            var bitmap = this._rollDice();
            for (var die = 0; die < 2; die++) {
                this._rolls[die].image = assets.getResult(bitmap[die]);
                if (die == 1) {
                    this._die2Label.text = bitmap[die];
                }
                else {
                    this._die1Label.text = bitmap[die];
                }
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map