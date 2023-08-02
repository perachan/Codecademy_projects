const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(objects, field) {
    this._objects = objects;
    this._field = field;
  }

  print() {
    for (let i = 0; i < this._field.length; i++) {
      console.log(this._field[i].join(' '));
    }
  }

  startGame() {
    let x = 0;
    let y = 0;

    this.print();
    
    while (this._objects[x][y] === pathCharacter || this._objects[x][y] === fieldCharacter) {
      const direction = prompt('Type direction you want to move - F for forward, B for backward, L for left, R for right: ');

      if (direction.toLowerCase() === 'f' && y > 0) {
        y -= 1;
      } else if (direction.toLowerCase() === 'b' && y < this._field.length - 1) {
        y += 1;
      } else if (direction.toLowerCase() === 'l' && x > 0) {
        x -= 1;
      } else if (direction.toLowerCase() === 'r' && x < this._field[y].length - 1) {
        x += 1;
      } else {
        console.log('Invalid entry. Please enter F, B, L, or R');
        continue;
      }

      if (this._objects[x][y] === hat) {
        console.log('You found the hat! You win!');
        return;
      } else if (this._objects[x][y] === hole) {
        console.log('You fell in a hole. Game Over');
        return;
      } else {
        this._field[x][y] = pathCharacter;
        this.print();
      }
    }
  }

  static generateField(height, width, percentageOfHoles) {
    let newField = new Array(height).fill().map(() => new Array(width).fill(fieldCharacter));
    let hatX = Math.round(Math.random() * (width - 1));
    let hatY = Math.round(Math.random() * (height - 1));

    newField[0][0] = pathCharacter; // mark the starting path
    newField[hatY][hatX] = hat;     // mark the hat

    const amountOfHoles = Math.round((height * width * percentageOfHoles) / 100);
    let holeX, holeY;

    for (let i = 0; i < amountOfHoles; i++) {
      do {
        holeX = Math.floor(Math.random() * width);
        holeY = Math.floor(Math.random() * height);
      } while (newField[holeY][holeX] !== fieldCharacter || (holeX === hatX && holeY === hatY));

      newField[holeY][holeX] = hole;
    }

    return newField;
  }

  static generateBlankField(height, width) {
    return new Array(height).fill().map(() => new Array(width).fill(fieldCharacter));
  }
}

const blankField = Field.generateBlankField(5, 5);
const newField = Field.generateField(5, 5, 50);

let myField = new Field(newField, blankField);
myField.startGame();
