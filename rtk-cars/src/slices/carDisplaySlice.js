import { createSlice, nanoid } from "@reduxjs/toolkit";

const carDisplaySlice = createSlice({
  name: "carDisplay",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updatedCar = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedCar;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carDisplaySlice.actions;
export const carDisplayReducer = carDisplaySlice.reducer;
