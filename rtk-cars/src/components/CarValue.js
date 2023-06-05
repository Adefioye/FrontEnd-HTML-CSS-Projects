import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ carDisplay: { searchTerm, cars } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let cost = 0;

    for (let car of filteredCars) {
      cost += car.cost;
    }

    return cost;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
