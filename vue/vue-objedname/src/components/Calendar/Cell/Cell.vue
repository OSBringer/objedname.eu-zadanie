<template>
  <div
    @click="handleClick"
    :style="{}"
    class="time-select"
    :class="{
      active: !(props.capacity >= props.originalCapacity) && active,
      disabled: props.capacity >= props.originalCapacity,
    }"
  >
    {{ time }}
    <span class="availability"> ({{ capacity }}/{{ originalCapacity }}) </span>
  </div>
  <modal
    v-if="showModal"
    @close="showModal = false"
    :time="time"
    :capacity="capacity"
    :originalCapacity="originalCapacity"
    :isSucces="false"
    :setShowSuccessModal="() => (showSuccessModal = true)"
  >
  </modal>
  <modal
    v-if="showSuccessModal"
    @closeSuccess="showSuccessModal = false"
    :isSucces="true"
  >
  </modal>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import Modal from "../Modal/Modal.vue";
import { isValidTimeFormat } from "/src/utils/helperFunctions.tsx";
const showModal = ref(false);
const showSuccessModal = ref(false);
const props = defineProps({
  time: String,
  capacity: Number,
  onClick: Function,
  active: Boolean,
  originalCapacity: Number,
});

const handleClick = () => {
  if (!isValidTimeFormat(props.time)) {
    // Handle the case when the time format is incorrect
    console.error("Invalid time format");
    return;
  }
  if (props.onClick) {
    showModal.value = true;
    props.onClick();
  }
};
</script>

<style lang="scss" scoped>
.time-select {
  cursor: pointer;
}
.active {
  background-color: #85bb36;
}
.disabled {
  backdrop-filter: blur(2px);
  backdrop-filter: brightness(50%);
  border-color: black;
  color: gray;
  cursor: not-allowed;
}

/* Add the styles from "Calendar.scss" here */
</style>
