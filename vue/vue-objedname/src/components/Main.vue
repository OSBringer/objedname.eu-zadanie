<template>
  <div class="main">
    <header>
      <Navigation :page="page" :setPage="setPage" />
    </header>
    <div class="timed-orders-module">
      <component :is="renderSwitch(page)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Calendar from "./Calendar/Calendar.vue";
import Settings from "./Settings/Settings.vue";
import Navigation from "./Navigation/Navigation.vue"; //
import History from "./History/History.vue";
import Favourites from "./Favourites/Favourites.vue";
const page = ref("calendar");

const renderSwitch = (page: string) => {
  switch (page) {
    case "calendar":
      return Calendar;
    case "settings":
      return Settings;
    case "favourites":
      return Favourites;
    case "history":
      return History;
    default:
      return Calendar;
  }
};

const setPage = (newPage: string) => {
  page.value = newPage;
};
</script>

<style>
#root {
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}
.timed-orders-module {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
}
header {
  display: flex;
  justify-content: center;
  position: absolute;

  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
}

.main {
  width: 90%;

  margin: 0 auto;
}
</style>
