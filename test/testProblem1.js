const problem1 = require("../problem1");

const inventory = require("../inventory");

let carId = 32;

const result = problem1(inventory, carId);
if (result) {
  console.log(
    `Car ${result.id} is a ${result.car_year} ${result.car_make} ${result.car_model}`
  );
} else {
  console.log(result);
}
