const { mongerInventory } = require("./fishMonger.js")
const { boatInventory } = require("./fishingBoat.js")

//The fishMenu function will return an HTML structure, with new menue items based off the list of fish.
//Use string interpolation within the html elements to get the desired output.
//The mongerInventory function will be the argument for fishMenu.
//Write a for of loop that iterates through the caughtFish array stored in the boatInventory function.
//Set up for loop in a way that I can input different maximum prices the chef is willing to spend.
//Store the html menu in a variable within the function and that variable will be the return value.
//Create parameter named fishItem
//Import the boatInventory function from fishingBoat.js to make sure fishMenu has access to it

const catchOfTheDay = boatInventory()
const fishBoughtByMongerMan = mongerInventory(catchOfTheDay)

const fishMenu = (fishItem) => {
    let htmlMenuString = ""
    for (const fish of fishItem) {
        htmlMenuString += `<h1>Menu</h1>
        <article class="menu">
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
        </article>
        `
    }
    return htmlMenuString
}
const finishedMenu = fishMenu(fishBoughtByMongerMan)

module.exports = { fishMenu }


