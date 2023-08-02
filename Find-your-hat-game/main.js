const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(objects, field) {
    this._objects = objects;
    this._field = field;
  }

  // print field
  print() {
    for (let i = 0; i < length.this._field; i++){
      console.log(row.join(' '));
    }
  }

  // main function to start and process the game
  startGame() {

  }

  // ask user to input the direction
  getDirection() {
   
  }

  // update the current location after user update the input. Update the previous field with * 
  updateLocation() {

  }

  // check whether user got the hat, landed on a hole, got out of the field - return win, lose, continue
  checkMove() {

  }

  // generate blank field, then randomly generate a hat and holes by replacing the object location on the blank field.
  generateField(height, width, percentageOfHoles) {
    let newField = new Array(height).fill().map(() => new Array(width).fill(fieldCharacter));
    let hatX = Math.round(Math.random() * (width-1) + 1);
    let hatY = Math.round(Math.random() * (height-1) + 1);

    newField[0][0] = pathCharacter; // mark the starting path
    newField[hatX][hatY] = hat;     // mark the hat 

    // random the holes
    const amountOfHoles = Math.round(height*width*percentageOfHoles/100);

    
  }
}

