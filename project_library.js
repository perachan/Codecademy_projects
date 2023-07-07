class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._rating = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get rating() {
        return this._rating;
    }

    set isCheckedOut(booleanValue) {
        this._isCheckedOut = booleanValue;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let sum = 0;
        for (let i = 0; i < this._rating.length; i++) { sum += this._rating[i]; } //this._rating.reduce((currentSum, rating) => currentSum + rating, 0);
        return sum / this._rating.length;
    }

    addRating(number) {
        if (number >= 1 && number <= 5) {
            this._rating.push(number);
        } else {
            console.log("Please provide a rating between 1 and 5.");
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    shuffle() {
        const shuffledSongs = [...this._songs];
        for (let i = shuffledSongs.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffledSongs[i], shuffledSongs[randomIndex]] = [shuffledSongs[randomIndex], shuffledSongs[i]];
        }
        return shuffledSongs;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', '544');
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', '116');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
historyOfEverything.addRating(1);
historyOfEverything.addRating(1);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const myCD = new CD("Thriller", "Michael Jackson", ["Beat It", "Billie Jean", "Thriller"]);
console.log(myCD.shuffle()); // Output: Randomly sorted array of songs