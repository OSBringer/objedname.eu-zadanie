<template>
  <div class="timedOrdersView">
    <Controller :active="active" :setActive="setActive" />
    <div class="time-select-container">
      <Cell
        v-for="(item, index) in filteredData"
        :key="index"
        @click="setChosenTime(item.Time)"
        :active="chosenTime === item.Time"
        :time="item.Time"
        :capacity="item.Capacity"
        :originalCapacity="item.OriginalCapacity"
      />
    </div>
    <h1 v-if="filteredData.length === 0">
      Otvárcie hodiny sa nezhodujú s časmi
    </h1>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Cell from "./Cell/Cell.vue";
import data from "../../assets/data.json";
import { getDateAndDay, isBetweenTimes } from "/src/utils/helperFunctions.tsx";
import Controller from "./Controller/Controller.vue";
// Import your store if needed
const store = useStore();
const active = ref(new Date());
const chosenTime = ref("");

const filteredData = computed(() => {
  const currentDay = getDateAndDay(active.value)[1];
  return store.state.orders.Data.filter((item) =>
    isBetweenTimes(
      store.state.value.oppeningHours[currentDay].from,
      store.state.value.oppeningHours[currentDay].to,
      item.Time
    )
  );
});

const setActive = (e) => {
  active.value = e;
};

const setChosenTime = (time) => {
  chosenTime.value = time;
};
</script>

<style lang="scss">
/* Add your styles here */
.timedOrdersView {
  width: 100%;
}

.day-select-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
}
h1 {
  text-align: center;
}
.btn {
  &.day {
    width: 100%;
    &.active {
      background-color: #d3a245;
    }

    &.disabled {
      background-color: red;
    }
  }
}

.time-select-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   background-color: dimgray;
  //   color: white;
  padding: 10px;
  border-radius: 10px;
}

.time-select {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #cbcfd4;

  color: white;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
  }
  .success {
    background-color: green;
  }
}
</style>
