<template>
  <div class="navigationContainer">
    <Button
      icon="fas fa-user"
      @click="setPage(`settings`)"
      :active="page === 'settings'"
    />

    <Button
      icon="fas fa-star"
      @click="setPage(`favourites`)"
      :active="page === 'favourites'"
    />
    <Button
      icon="fas fa-history"
      @click="setPage(`history`)"
      :active="page === 'history'"
    />
    <Button
      icon="fas fa-calendar"
      @click="setPage(`calendar`)"
      :active="page === 'calendar'"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Button from "../Button/Button.vue";

const { page, setPage } = defineProps(["page", "setPage"]);
// const setPage = inject("setPage");
</script>

<style scoped lang="scss">
/* Add your styles here */
.navigationContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  gap: 2vw;

  position: relative;
  width: 98%;
}
</style>
