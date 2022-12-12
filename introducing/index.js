var bool = true;
var a = 42;

if(bool) {
    let b = 89;
    console.log(a);
    console.log(a + b);
}

var b = "hallo world";
var c;

console.log("b is " + b);
console.log("c is " + c);

const d = "Belajar javascript lagi";

(function() {
    let e = d;
    e = 8;
})();

if(bool) var f = Math.random();
console.log(f);

var g;

(function() {
    console.log(`Value g is ${g}`)
})();

g = 90;
console.log(`Value g is ${g}`)

console.log(this.g);



// function f(){}
// const f = 5;

// function f() {
//     const g = 5;
//     var g;
// }

const OBJ = {key: "value"};
OBJ.key = "reinisialisasi";

const ARRAY = ["html", "css"];
ARRAY.push("javascript");

console.log(ARRAY);
console.log(OBJ);

var n = null;
var bool = true;
var undefin = undefined;
var numb = 90;
var bigInt = 999999999999999999999999999999999999999;
var str = "hallo world";
var obj = {
    name : "Joe doe",
    address : "Jakarta Selatan"
};

let answer = 42;
answer = obj.name;

console.log(answer);

let z = "The answer is " + answer;

z = "90" * 7;

console.log(z);

z = "90";
console.log(z);

console.log(parseInt("100"));

let result = +"90" + 90;

console.log(result);

let employeNames = ["Joe Doe", "Lorep Ipsum", "Fernandes Hernandez"];

console.log(employeNames);

let fishs = [ ,"Nemo", , , "Cupang"];
console.log(fishs);

const BANGUN_RUANG = [
    "Persegi",
    "Lingkaran",
    "Persegi Panjang",
    + "Trapesium"
];

console.log(fishs.length);
console.log(BANGUN_RUANG);

const STANDARD_ARRAY = [
    "first",
    "second",
    /* empty */,
    "fourth"
];

console.log(STANDARD_ARRAY);

class Car {
    constructor(name, model, price, year) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.year = year;
    }
}



let car = new Car(
    "toyota",
    "Honda",
    9000,
    2010
);

let bmw = new Car(
    "BWM Series 07",
    "Sport",
    900000,
    2022
);

function carType(model) {
    let msg;

    if(model === "Honda")
        msg = "Your car model is valid.";
    else
        msg = "Your car model is not valid.";
    
    return msg;
}

const {name, model, price, year} = car;
console.log(`${name} is type ${model}\n${carType(model)}`);


let myCars = {cars : {
    toyota : car,
    bmw    : bmw 
}};

console.log(`my first car is ${myCars.cars.toyota.name}\nsecond car is ${myCars.cars.bmw.name}`);

// wkwk

const jabur = {
    '' : "An empty string",
    '!' : "Bang!"
};

console.log(jabur["!"]);
console.log(jabur['']);

// Regex
const re = /ab+c/;

console.log(re);

let str0 = "foo";
let str1 = "one line \ntwo line";

let todos = "90 tasks";
let progress = "100%";

console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
