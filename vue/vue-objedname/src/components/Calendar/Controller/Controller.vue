<template>
  <div class="day-select-row">
    <Button @click="prevDay" class="btn" icon="fas fa-chevron-left">ss</Button>
    <!-- Tu sa budu dni generovat podla toho kolko ich chceme na stranku z DeliveryMethod -->
    <button
      v-for="day in dateArray"
      :key="day[0]"
      @click="setActive(day[0])"
      class="btn day"
      :class="{ active: day[0].getDate() === active.getDate() }"
    >
      {{ formatDateWithoutYear(day[0]) }}
      <div
        style="
           {
            display: flex;
            flex-direction: row;
          }
        "
      >
        {{ day[1] }}
        <b>
          {{ day[0].getDate() === new Date().getDate() ? "Dnes" : "" }}
        </b>
        <b>
          {{
            day[0].getDate() === new Date(Date.now() + 86400000).getDate()
              ? "Zajtra"
              : ""
          }}
        </b>
      </div>
    </button>

    <Button @click="nextDay" class="btn" icon="fas fa-chevron-right"></Button>
  </div>
</template>

<script setup lang="ts">
import { getNext10Days } from "/src/utils/helperFunctions.tsx";
import Button from "/src/components/Button/Button.vue";
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
import { formatDateWithoutYear } from "../../../utils/helperFunctions";
const { setActive, active } = defineProps(["setActive", "active"]);
const store = useStore();
const startDate = ref(new Date());
// Create the dateArray using getNext10Days function
const dateArray = ref(
  getNext10Days(new Date(), store.state.value.calendarDays)
);

// Function to set the active date
const updateDateArray = () => {
  dateArray.value = getNext10Days(
    startDate.value,
    store.state.value.calendarDays
  );
};

const prevDay = () => {
  startDate.value = new Date(startDate.value);
  startDate.value.setDate(startDate.value.getDate() - 1);
  updateDateArray();

  setActive(startDate.value);
};

const nextDay = () => {
  startDate.value = new Date(startDate.value);
  startDate.value.setDate(startDate.value.getDate() + 1);
  updateDateArray();
  setActive(startDate.value);
};
</script>

<style>
/* Add your Calendar.scss styles here */
/* Define .active class styles for the active button */
.active {
  /* Add your active button styles here */
}
</style>
