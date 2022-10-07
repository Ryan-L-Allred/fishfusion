const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory } = require("./fishMonger.js")
const { fishMenu } = require("./restaurant.js")
// Uncomment this code block when you're ready to test your logic
const catchOfTheDay = boatInventory()
const fishBoughtByMonger = mongerInventory(catchOfTheDay)

const menu = fishMenu(fishBoughtByMonger)
console.log(menu)

