// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const problem3 = (inventory) => {
    const result = [];
    for(let i=0; i<inventory.length; i++) {
        result.push(inventory[i].car_model);
    }
    return result.sort()
}

module.exports = problem3;