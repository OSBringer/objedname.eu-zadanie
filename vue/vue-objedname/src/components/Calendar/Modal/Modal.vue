<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div v-if="!props.isSucces" class="modal-container">
        <div class="modal-close-icon">
          <i @click="$emit('close')" class="fa-solid fa-x"></i>
        </div>
        <div>
          <h3>Čas</h3>
          <b>{{ time }}</b>
        </div>
        <div class="modal-type">
          <h3>Typ donášky</h3>
          <div class="modal-radio">
            <label htmlFor="delivery">Donáška</label>
            <input
              type="radio"
              name="delivery"
              value="donaska"
              v-model="selectedDelivery"
            />
          </div>
          <div class="modal-radio">
            <label htmlFor="pickup">Vyzdvihnutie</label>
            <input
              type="radio"
              name="delivery"
              value="vyzdvihnutie"
              v-model="selectedDelivery"
            />
          </div>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <Button :onClick="handleSetOrder" text="Vytvoriť objednávku" />
          </slot>
        </div>
      </div>
      <div v-if="props.isSucces" class="modal-container">
        <div class="modal-close-icon">
          <i @click="$emit('closeSuccess')" class="fa-solid fa-x"></i>
        </div>
        <div class="modal-success">
          <i class="icon fa-solid fa-circle-check"></i>
          <h1>Objednávka vytvorená</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup id="modal-template">
import { defineProps } from "vue";
import { useStore } from "vuex";
import Button from "../../Button/Button.vue";
import { findIndexOfTime } from "/src/utils/helperFunctions.tsx";
const emits = defineEmits(["close"]);
let selectedDelivery = "donaska";
const props = defineProps({
  time: String,
  capacity: Number,
  originalCapacity: Number,
  isSucces: Boolean,
  setShowSuccessModal: Function,
});
const store = useStore();

const handleSetOrder = () => {
  const orders = { ...store.state.orders };
  const index = findIndexOfTime(orders.Data, props.time);
  const selectedValue = selectedDelivery;
  if (props.capacity < props.originalCapacity) {
    orders.Data[index].Capacity++;
    store.commit("setOrders", orders);
    props.isSucces = true;
    emits("close");
    props.setShowSuccessModal();
  } else {
    console.error("Kapacita je plna");
    props.isSucces = false;
  }

  //placeholder for ajax request to backend
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-success {
  display: block;
  color: #42b983;
  display: block;
  text-align: center;
  margin-top: 50px;

  .icon {
    font-size: 100px;
  }
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-radio {
  display: flex;
  gap: 5px;
  width: 100%;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #1a2439;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-type {
  display: flex;
  align-items: start;
  flex-direction: column;
}

.modal-close-icon {
  display: block;
  margin-left: auto;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  text-align: right;
  cursor: pointer;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
