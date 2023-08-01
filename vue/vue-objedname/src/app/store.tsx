import { createStore } from "vuex";
import data from "../assets/data.json";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      value: {
        oppeningHours: {
          Pondelok: { from: "00:01", to: "00:00" },
          Utorok: { from: "00:00", to: "00:00" },
          Streda: { from: "00:00", to: "00:00" },
          Štvrtok: { from: "00:00", to: "00:00" },
          Piatok: { from: "00:00", to: "00:00" },
          Sobota: { from: "00:00", to: "00:00" },
          Nedeľa: { from: "00:00", to: "00:00" },
        },
        calendarDays: 1,
      },
      orders: data,
    };
  },
  mutations: {
    setOppeningHours(state, payload) {
      state.value.oppeningHours = payload;
    },
    setCalendarDays(state, payload) {
      state.value.calendarDays = payload;
    },
    setOrders(state, payload) {
      console.log(state.orders);
      state.orders = payload;
      console.log(state.orders);
    },
  },
});

store.subscribe((mutations, state) => {
  localStorage.setItem("vuex-state", JSON.stringify(state));
});

export default store;
