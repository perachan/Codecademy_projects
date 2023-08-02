//const prompt = require('prompt-sync')({sigint: true});

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
    let x = 0;
    let y = 0;

    this.print();
    
    while (this._objects[x][y] === pathCharacter || this._objects[x][y] === fieldCharacter) {
      const direction = prompt('Type direction you want to move - F for forward, B for backward, L for left, R for right: ');

      if (direction.toUpperCase() === 'N' && y > 0) {
        y -= 1;
      } else if (direction.toUpperCase() === 'S' && y < this._field.length - 1) {
        y += 1;
      } else if (direction.toUpperCase() === 'W' && x > 0) {
        x -= 1;
      } else if (direction.toUpperCase() === 'E' && x < this._field[y].length - 1) {
        x += 1;
      } else {
        console.log('Invalid entry. Please enter N, S, E, or W');
        continue;
      }
    }

    if (direction.toUpperCase() === 'N') {
      if (y === 0) {
        console.log('You cannot move any further North. Please choose another direction')
      } else {
        y -=1
      }
    } else if (direction.toUpperCase() === 'S') {
        if (y >= this._field.length) {
          console.log('You cannot move any further South. Please choose another direction')
        } else {
          y +=1
        }
      } else if (direction.toUpperCase() === 'W') {
        if (x === 0) {
          console.log('You cannot move any further West. Please choose another direction')
        } else {
          x -= 1
        }
      } else if (direction.toUpperCase() === 'E') {
        if (x >= this._field[y].length) {
          console.log('You cannot move any further East. Please choose another direction')
        } else {
          x += 1
        }
      } else {
        console.log('Invalid entry. Please enter N, S, E, or W')
      } 
      if (this._hatAndHoles[y][x] === hat) {
        console.log('You found the hat! You win!')
      } else if (this._hatAndHoles[y][x] === hole) {
        console.log('You fell in a hole. Game Over')
      } else {
        this._field[y][x] = pathCharacter;
        this.print(this._field);
      }
    } 
  }


  // generate blank field, then randomly generate a hat and holes by replacing the object location on the blank field.
  generateField(height, width, percentageOfHoles) {
    let newField = new Array(height).fill().map(() => new Array(width).fill(fieldCharacter));
    let hatX = Math.round(Math.random() * (width - 1));
    let hatY = Math.round(Math.random() * (height - 1));
  
    newField[0][0] = pathCharacter; // mark the starting path
    newField[hatY][hatX] = hat;     // mark the hat
  
    // random the holes
    const amountOfHoles = Math.round((height * width * percentageOfHoles) / 100);
    let holeX, holeY;
  
    for (let i = 0; i < amountOfHoles; i++) {
      do {
        holeX = Math.floor(Math.random() * width);
        holeY = Math.floor(Math.random() * height);
      } while (newField[holeY][holeX] !== fieldCharacter || !(holeX === hatX && holeY === hatY));
  
      newField[holeY][holeX] = hole;
    }
    //console.log(newField);
    return newField;
  }

  generateBlankField(height, width) {
    let newField = new Array(height).fill().map(() => new Array(width).fill(fieldCharacter));
  }
  
}

let myField;

const blankField = Field.generateBlankField(5, 5)


const newField = Field.generateField(5, 5, 50);
console.log(blankField);

myField = new Field (newField, blankField);

myField.startGame();