import { useState } from '#app';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  // State
  const counter = useState<number>('counter', () => 0);

  // Mutation
  const increment = () => {
    counter.value++
  }

  return { increment, counter }
});