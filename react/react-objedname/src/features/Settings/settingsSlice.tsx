import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    value: {
      openingDays: {
        Pondelok: { from: "00:00", to: "00:00" },
        Utorok: { from: "00:00", to: "00:00" },
        Streda: { from: "00:00", to: "00:00" },
        Štvrtok: { from: "00:00", to: "00:00" },
        Piatok: { from: "00:00", to: "00:00" },
        Sobota: { from: "00:00", to: "00:00" },
        Nedeľa: { from: "00:00", to: "00:00" },
      },
      calendarDays: 1,
    },
  },
  reducers: {
    setOppeningHours: (state, action) => {
      console.log(action.payload);
      state.value.openingDays = action.payload;
    },
    setCalendarDays: (state, action) => {
      state.value.calendarDays = action.payload;
    },
  },
});

export const { setOppeningHours, setCalendarDays } = settingsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSettingsValue = (state) => state.settings.value;
export default settingsSlice.reducer;
