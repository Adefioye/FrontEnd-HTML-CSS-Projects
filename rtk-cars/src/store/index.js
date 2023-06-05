import { configureStore } from "@reduxjs/toolkit";
import { carFormReducer, changeName, changeCost } from "../slices/carFormSlice";
import {
  carDisplayReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "../slices/carDisplaySlice";

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    carDisplay: carDisplayReducer,
  },
});

console.log(store.getState());

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };
