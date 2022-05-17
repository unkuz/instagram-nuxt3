import { defineStore } from "pinia";

const state = () => ({
  isPrepare: false,
});
const getters = {
  getIsPrepare: (state) => state.isPrepare,
};
const actions = {
  setPrepare() {
    this.isPrepare = true;
  },
  cancelPrepare() {
    this.isPrepare = false;
  },
};

export const useTransition = defineStore("transitionStore", {
  state,
  getters,
  actions,
});
