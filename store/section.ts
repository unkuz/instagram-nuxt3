import { defineStore } from "pinia";
import { SECTION } from "~~/constants/section";
const state = () => ({
  selected: SECTION.HOME,
});
const getters = {
  getSectionSelect: (state) => {
    return state.selected;
  },
};
const actions = {
  selectSection(section) {
    this.selected = section;
  },
};
export const useSectionStore = defineStore("sectionStore", {
  state,
  getters,
  actions,
});
