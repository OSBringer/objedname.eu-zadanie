<template>
  <button @click="onClick" :class="['btn', className]">
    {{ text }}

    <i v-if="active" class="active fa-solid fa-circle-check"></i>
    <!-- <span class="active fas fa-check"> </span> -->
    <span :class="icon"></span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    icon: {
      // You may need to define the appropriate type here, depending on the icon library used
      default: null,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0px solid #cbcfd4;
  width: 100%;
  min-height: 5vh;
  background-color: #313a4d;
  color: white;

  height: 7vh;
  position: relative;

  padding: 10px;
  border-radius: 10px;
  .active {
    top: -8px;
    right: -8px;
    position: absolute;
    color: #26c672;
    font-size: 1.5rem;
    background-color: white;
    border-radius: 50%;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
  }
  &.success {
    background-color: green;
  }
  span {
    display: flex;
    font-size: 1.8rem;
  }
}
</style>
