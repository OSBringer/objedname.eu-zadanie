<template>
  <button @click="onClick" :class="['btn', className]">
    {{ text }}
    <span v-if="active">

    </span>
    <span>{{ icon }}</span>
  </button>
</template>

<script>
import { AiFillCheckCircle } from "vue-icons/ai";

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
  components: {
    AiFillCheckCircle,
  },
};
</script>
