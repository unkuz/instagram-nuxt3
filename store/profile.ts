import { defineStore } from "pinia";
import { SELECT_TYPE } from "@@/constants/screens/account";

export const useProfileStore = defineStore("profileStore", {
  state: () => ({
    select: SELECT_TYPE.ALL,
    isShowFollowing: false,
    isShowFollowers: false
  }),
  getters: {},
  actions: {
    setSelect (select: SELECT_TYPE) {
      this.select = select;
    },
    setIsShowFollowing (isShowFollowing: boolean) {
      this.isShowFollowing = isShowFollowing;
    },
    setIsShowFollowers (isShowFollowers: boolean) {
      this.isShowFollowers = isShowFollowers;
    }
  }
});
