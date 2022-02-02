import { defineStore } from "pinia";

export const indexStore = defineStore("index", {
  // data
  state: () => {
    return {
      count: 0,
    };
  },
  // computed
  getters: {},
  // methods
  actions: {
    increment() {
      this.$patch((state) => {
        state.count++;
      });
    },
    decrement() {
      this.$patch((state) => {
        state.count--;
      });
    },
  },
});
