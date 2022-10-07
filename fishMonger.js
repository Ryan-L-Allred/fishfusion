const { boatInventory } = require("./fishingBoat.js")

//The array of fish is stored in the boatInventory function, whose return value is the array itself.
//Figure out where the array of fish should be iterated.
//Check to see if my boatInventory function pulls the arrary objects from fishingBoat.js into this module.
//Does not pull the fish array from fishingBoat.js, only the function.
//The monger will not be buying Tuna, WallEye, or Sunfish, since they either cost more than 7.50 or there are less than ten of them.
//Write a for loop in the mongerInventory function.
//Since the fish array is stored in the boatInventory function, I may be able to access the objects in the fish array.
//Create an empty array in mongerInventory to filter out the fish that mongerman doesn't want.

const catchOfTheDay = boatInventory()

const mongerInventory = (boughtFish) => {
    const mongerFish = []
    for (const fish of boughtFish) {
        if (fish.price < 7.50 && fish.amount > 10)
        mongerFish.push(fish)
        fish.amount = 10
    }
    return mongerFish
}
const fishBoughtByMongerMan = mongerInventory(catchOfTheDay)
//console.log(fishBoughtByMongerMan)

module.exports = { mongerInventory }

