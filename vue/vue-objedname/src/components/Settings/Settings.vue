<template>
  <div class="settingsContainer">
    <h1>Otvaracie hodiny</h1>
    <div class="settingsDays">
      <div v-for="(item, index) in days" class="timePickerContainer">
        <h4>{{ item }}</h4>
        <div class="timePicker">
          Od
          <VueDatePicker
            @update:model-value="(e:any) => handleTime(e, `from`, index)"
            :key="index"
            time-picker
            :model-value="timeFrom[index]"
          >
            <template #input-icon> </template>
          </VueDatePicker>
        </div>
        <div class="timePicker">
          Do
          <VueDatePicker
            @update:model-value="(e:any) => handleTime(e, `to`,
          index)"
            :key="index"
            time-picker
            :model-value="timeTo[index]"
          >
            <template #input-icon> </template>
          </VueDatePicker>
        </div>
      </div>
    </div>
    <div class="settingsType">
      <h1>Kalendar</h1>
      <label for="xd">Zobraziť dni dopredu</label>
      <input
        class="customInput"
        v-bind:value="store.state.value.calendarDays"
        v-on:input="
          (e) => {
            let inputValue = parseInt(e.target.value);
            if (inputValue >= 1 && inputValue <= 5) {
              store.commit('setCalendarDays', inputValue);
            }
          }
        "
        :max="5"
        :min="1"
        type="number"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const days = [
  "Pondelok",
  "Utorok",
  "Streda",
  "Štvrtok",
  "Piatok",
  "Sobota",
  "Nedeľa",
];
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { convertTimeToHHMM } from "../../utils/helperFunctions";

const store = useStore();
const handleTime = (modelData: object, type: "from" | "to", index: number) => {
  if (!modelData) return;
  const formattedTime = convertTimeToHHMM(modelData);
  const assign = { ...store.state.value.oppeningHours };
  type === "from"
    ? (timeFrom.value[index] = modelData)
    : (timeTo.value[index] = modelData);
  assign[days[index]][type] = formattedTime;
  store.commit("setOppeningHours", assign);
  // do something else with the data
};

const timeFrom = ref([]);
const timeTo = ref([]);

// Fetch the opening hours data from the store and initialize timeFrom and timeTo refs
onMounted(() => {
  const openingHours = store.state.value.oppeningHours;
  days.forEach((day) => {
    const fromTime = openingHours[day].from.split(":");
    const toTime = openingHours[day].to.split(":");

    timeFrom.value.push({ hours: fromTime[0], minutes: fromTime[1] });
    timeTo.value.push({ hours: toTime[0], minutes: toTime[1] });
  });
});
</script>

<style lang="scss">
.timePickerWrapper {
  margin: 10px;
  gap: 10px;
  padding-left: 50px;
  font-size: 1.5rem;
}
.timePicker {
  font-size: 1.8rem;
  width: 120px;
  border-radius: 10px;
}
.react-time-picker__wrapper {
  border-radius: 10px;
}
.customInput {
  background-color: inherit;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.5rem;

  width: 100px;
  color: white;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.settingsType {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.settingsDays {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  gap: 10px;
}
:root {
  .dp__theme_light {
    --dp-border-radius: 10px;
    --dp-background-color: #313a4d;
    --dp-input-icon-padding: 5px;
    --dp-button-icon-height: 0;
    --dp-background-color: #313a4d;
    --dp-text-color: #f3f3f3;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1976d2;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-highlight-color: rgba(25, 118, 210, 0.1);
  }
}
</style>
