import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import store from "./app/store"; // Assuming store.js is in the same directory as this script

const savedState = JSON.parse(localStorage.getItem("vuex-state"));
if (savedState) {
  store.replaceState(savedState);
}
const app = createApp(App);

// Install the Vuex store
app.use(store);

app.component("VueDatePicker", VueDatePicker);

app.mount("#app");
