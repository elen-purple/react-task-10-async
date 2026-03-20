import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    deleteTask(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
    addTask(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addTask, deleteTask } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
