export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static powOf(x, n) {
        return Math.pow(x, n);
    }

}

export class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    message() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

export class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }

}
