const plantArea = 0.8;
const radius = 5;
const totalArea = 3.1415 * radius * radius;

function calculateAreaOccupied(plantNum, weeks) {
  let areaOccupied = 0;

  for (let i = 0; i < weeks; i++) {
    // Calculate the area occupied by the current number of plants
    areaOccupied += plantNum * plantArea;

    // Double the number of plants for the next week
    plantNum = plantNum * 2;
  }
  // Calculate the percentage of area occupied by plants
  var areaPercent = (areaOccupied / totalArea) * 100;

  console.log("Area occupied after", weeks, "weeks:", areaPercent, "%");

  if (areaPercent > 80) {
    console.log("Pruned");
  } else if (areaPercent >= 50 && areaPercent <= 80) {
    console.log("Monitored");
  } else if (areaPercent < 50) {
    console.log("Planted");
  }
}

var plants = 20;
calculateAreaOccupied(plants, 1);
calculateAreaOccupied(plants, 2);
calculateAreaOccupied(plants, 3);

//Question 2
function recommendedRadius(plantNum, weeks) {
  var totalAreaRequired = 0;
  var currentPlants = plants;

  for (var i = 0; i < weeks; i++) {
    totalAreaRequired += currentPlants * plantArea;
    currentPlants = currentPlants * 2; // Double the number of plants for the next week
  }
  // Calculate the radius using the formula for the area of a circle
  var recommendedRadius = Math.sqrt(totalAreaRequired / Math.PI);
  console.log(
    "recommended radius ",
    recommendedRadius,
    " for area of ",
    totalAreaRequired
  );
  return recommendedRadius;
}

plants = 100;
var x = recommendedRadius(plants, 1);

//Question 3
function plantStatus(plantNum, weeks) {
  try {
    const recommendedRad = recommendedRadius(plantNum, weeks);
    if (recommendedRad > radius) {
      throw new Error("The plant area does not have enough space.");
    } else {
      calculateAreaOccupied(plantNum, weeks);
    }
  } catch (error) {
    console.error(error.message);
  }
}

plants = 40;
plantStatus(plants, 1);
