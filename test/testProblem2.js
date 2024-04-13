const problem2 = require("../problem2");

const inventory = require("../inventory");

const result = problem2(inventory);

if (problem2) {
  console.log(`Last car is a ${result.car_make} ${result.car_model}`);
} else console.log("No car");
