var img;
var tilePixels = [];
var tileWidth = 20;
var randomGenerator = false;
var randomNumGenX;
var randomNumGenY;
var currentTile = 0;
var tilePositionNum;
var completeBoolean = false;
var downKeyArray = ["qDown", "aDown", "wDown", "sDown", "eDown", "dDown"];
var upKeyArray = ["zUp", "aUp", "xUp", "sUp", "dUp", "cUp"];
var leftKeyArray = ["eLeft", "dLeft", "cLeft", "wLeft", "sLeft", "xLeft"];
var rightKeyArray = ["qRight", "aRight", "zRight", "wRight", "sRight", "xRight"];
//Loads the image
function preload(){
    img = loadImage("American_flag.jpg");
  }


function setup(){
  createCanvas(windowWidth, windowHeight);
  img.resize(tileWidth*3, tileWidth*3);
  image(img, 0, 0);
  //2 for loops 1 for Width and 1 for Height, which are inserted as the argument variables for function Tile()
  //The variables inside the brackets for tilePixels make it so that
  for(var i = 0; i < 3; i++){
    var x = i * tileWidth;
     for(var j = 0; j < 3; j++){
       var y = j * tileWidth;
       console.log(i*3 + j);
       tilePixels[j + i * 3] = new Tile(x, y);

     }
  }
  for(var i = 0; i < 9; i++){
  tilePixels[i].init();
  }
}


function draw(){
  background(225);
  randomNumGenX = shuffle([0, tileWidth/3, 2 * tileWidth/3], true);
  randomNumGenY = shuffle([0, tileWidth/3, 2 * tileWidth/3], true);

    for(var i = 0; i < 8; i++){
    tilePixels[i].display();
  }
  randomRect();
  randomizeTiles();
}

function Tile(x, y){
  this.x = x;
  this.y = y;
  this.direction;
  this.imgTile;
  this.init = function(){

    this.imgTile = createImage(tileWidth, tileWidth);
//This will load the pixels for the imgTile which at the moment is just blank with a certain size
    this.imgTile.loadPixels();
//This for loop allows for the pixels to be taken from the original image and made into separate images.
      for(var i = 0; i < tileWidth; i++){
          for(var j = 0; j < tileWidth; j++){
//The imgTile pixels, which are based on the coordinates (j, i), are set as the pixels from the original image by using the get commmand.
                this.imgTile.set(j, i , get(this.x + j, this.y + i));
          }
      }
//After the changes are made, the imgTile pixels will be updated to the new version which we made through the use of a for loop.
     this.imgTile.updatePixels();


    }

    this.display = function(){
//This command will actually display the image, imgTile, at the coordinates this.x and this.y
      image(this.imgTile, this.x, this.y);
      noFill();
      stroke(255, 0, 0);
      rect(this.x, this.y, tileWidth, tileWidth);
    }

    this.canMoveHere = function(direction){
      for(var i = 0; i < rightKeyArray.length; i++){
        if(direction === rightKeyArray[i]){
          for(var i = 0; i < tilePixels.length; i++){
            if(tilePixels[i].x ===  0 + tileWidth && tilePixels[i].y === 0){
              return false;
            }
          }
          return true;
        }
      }

      for(var i = 0; i < leftKeyArray.length; i++){
        if(direction === leftKeyArray[i]){
          for(var i = 0; i < tilePixels.length; i++){
            if(tilePixels[i].x ===  tileWidth - tileWidth && tilePixels[i].y === 0){
              return false;
            }
          }
          return true;
        }
      }

      for(var i = 0; i < upKeyArray.length; i++){
        if(direction === upKeyArray[i]){
          for(var i = 0; i < tilePixels.length; i++){
            if(tilePixels[i].x === 0 && tilePixels[i].y === tileWidth - tileWidth){
              return false;
            }
          }
          return true;
        }
      }

      for(var i = 0; i < downKeyArray.length; i++){
        if(direction === downKeyArray[i]){
          for(var i = 0; i < tilePixels.length; i++){
            if(tilePixels[i].x === 0 && tilePixels[i].y === 0 + tileWidth){
              return false;
            }
          }
          return true;
        }
      }

    }

    this.tileMovement = function(){
      for(var i = 0; i < downKeyArray.length; i++){
        if(direction === downKeyArray[i] && direction === true){
          tilePixels[tilePositionNum].y = tilePixels[tilePositionNum].y + tileWidth;
        }
      }

      for(var i = 0; i < rightKeyArray.length; i++){
        if(direction === rightKeyArray[i] && direction === true){
          tilePixels[tilePositionNum].x = tilePixels[tilePositionNum].x + tileWidth;
        }
      }

      for(var i = 0; i < upKeyArray.length; i++){
        if(direction === upKeyArray[i] && direction === true){
          tilePixels[tilePositionNum].y = tilePixels[tilePositionNum].y - tileWidth;
        }
      }

      for(var i = 0; i < leftKeyArray.length; i++){
        if(direction === leftKeyArray[i] && direction === true){
          tilePixels[tilePositionNum].x = tilePixels[tilePositionNum].x - tileWidth;
        }
      }

    }

    this.buttonMovement = function(){
      if(keyIsPressed === Q){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === 0 && tilePixels[i].y === 0){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === DOWN_ARROW){
        this.direction = "qDown";
        }
        if(keyIsPressed === RIGHT_ARROW){
          this.direction = "qRight";
        }
      }

      else if(keyIsPressed === A){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === 0 && tilePixels[i].y === tileWidth){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === UP_ARROW){
          this.direction = "aUp";

        }
        if(keyIsPressed === DOWN_ARROW){
          this.direction = "aDown";
        }
        if(keyIsPressed === RIGHT_ARROW){
          this.direction  = "aRight";
        }
      }

      else if(keyIsPressed === Z){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === 0 && tilePixels[i].y === 2 * tileWidth){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === UP_ARROW){
          this.direction = "zUp";
        }
        if(keyIsPressed === RIGHT_ARROW){
          this.direction =  "zRight";
        }
      }
      else if(keyIsPressed === W){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === tileWidth && tilePixels[i].y === 0){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === LEFT_ARROW){
          this.direction = "wLeft";
        }
        if(keyIsPressed === RIGHT_ARROW){
          this.direction = "wRight";
        }
        if(keyIsPressed === DOWN_ARROW){
          this.direction = "wDown";
        }
      }
      else if(keyIsPressed === S){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === tileWidth && tilePixels[i].y === tileWidth){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === DOWN_ARROW){
          this.direction = "sDown";
        }
        if(keyIsPressed === LEFT_ARROW){
          this.direction = "sLeft";
        }
        if(keyIsPressed === RIGHT_ARROW){
          this.direction = "sRight";
        }
        if(keyIsPressed === UP_ARROW){
          this.direction = "sUp";
        }
      }
      else if(keyIsPressed === X){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === tileWidth && tilePixels[i].y === 2 * tileWidth){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === LEFT_ARROW){
          this.direction = "xLeft";
        }
        if(keyIsPressed === RIGHT_ARROW){
          this.direction = "xRight";
        }
        if(keyIsPressed === UP_ARROW){
          this.direction = "xUp";
        }
      }
      else if(keyIsPressed === E){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === 2 * tileWidth && tilePixels[i].y === 0){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === LEFT_ARROW){
          this.direction = "eLeft";

        }
        if(keyIsPressed === DOWN_ARROW){
          this.direction = "eDown";

        }
      }
      else if(keyIsPressed === D){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === 2 * tileWidth && tilePixels[i].y === tileWidth){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === UP_ARROW){
          this.direction = "dUp";

        }
        if(keyIsPressed === LEFT_ARROW){
          this.direction = "dLeft";

        }
        if(keyIsPressed === DOWN_ARROW){
          this.direction = "dDown";

        }
      }
      else if(keyIsPressed === C){
        for(var i = 0; i < 9; i++){
          if(tilePixels[i].x === 2 * tileWidth && tilePixels[i].y === 2 * tileWidth){
            tilePositionNum = i;
          }
        }
        if(keyIsPressed === LEFT_ARROW){
          this.direction = "cLeft";

        }
        if(keyIsPressed === UP_ARROW){
          this.direction = "cUp";

        }
      }
    }
  }

  function randomizeTiles(){

     if(mouseIsPressed && mouseX >= 350 && mouseX <= 450 && mouseY >= 0 && mouseY <= 50){

       randomGenerator = true;
//This will be used for later when the puzzle is complete so that it doesnt say completed before it is randomized.
       completeBoolean = true;


      }
     }
     if(randomGenerator === true){
      for(var i = 0; i < randomNumGenX.length; i++){
        for(var i = 0; i < 9; i++){
        tilePixel[i].x += randomNumGenX[i];
        tilePixel[i].y += randomNumGenY[i];
      }
// this.x += randomNumGenX[i];
// this.y += randomNumGenY[i];
   }

   }

   function randomRect(){
     fill(100);
     rect(350, 0, 100, 50);

     fill(0);
     textSize(18);
     text("Randomize", 355, 30);
   }

// function completedPuzzle(){
//   for(var i = 0; i < tile; i++){
//     for(var j = 0; j < ;  j++){
//       for(var c = 0; c <  ; c++){
//         if(completeBoolean === true && tilePixels){
//           img.resize(windowWidth, windowHeigth);
//           text("Good Job!", 50, 50);
//         }
//       }
//     }
//   }
// }
//
// function timer(){
//
// }
//
// function resetPuzzle(){
//
// }
