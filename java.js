//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Slayer() {
    this.make = "Doom Slayer"
}

Slayer.prototype.slogan = function() {
    console.log("Rip and tear!")
};

var guy = new Slayer();
guy.slogan();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var Numbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var Fifth = Numbr.slice(5);

console.log(Fifth);

//3. Delete the last number in the array that you created above.

delete Numbr[9];

console.log(Numbr)

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function fruitSwitch () {

var originalString = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."
var mapObj = {
    Strawberries:"Bananas",
    strawberries:"bananas",
    strawberry:"banana"
};
originalString = originalString.replace(/Strawberries|strawberries|strawberry/gi, function(matched){return mapObj [matched];})    
console.log(originalString);
}

fruitSwitch();

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var myArray = ['Bodø', 'Brann', 'Rosenborg', 'Viking'];
console.log(myArray);

function swapArray (myArray) {
    myArray = [];
    console.log(myArray);
    myArray = ['Chevy Impala1a', 'Ford Mustang', 'Dodge Charger', 'Buick GNX'];
    console.log(myArray);
}


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var Peeps = [
    {
        name: "Dante",
        age: 30
    },
    {
        name: "Doomguy",
        age: "some milennia, give or take"
    },
    {
        name: "Pac-man",
        age: 39
    }
]

var guyWithNameDoomGuy = Peeps.filter(function(person){
    return(person.name == "Doomguy");
})

console.log(guyWithNameDoomGuy);

//7. Create a simple function that logs the date.

function logDate() {
   var d = new Date()
   var n = d.getDate();
   console.log(d)
}

logDate();