<template>
  <div>
    <inline-svg
      src="assets/icons/sample.svg"
      width="350"
      height="350"
    />
    <div class="v-counter-container">
      <span class="v-counter">{{ counterStore.counter }}</span>
      <a-button type="primary" @click="counterStore.increment()">
        +
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InlineSvg from 'vue-inline-svg';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
.v-counter-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .v-counter {
    font-size: 36px;
  }
}
</style>
