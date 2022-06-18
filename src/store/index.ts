import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => {
    return {
      userName: 'hello vue3',
      count: 0
    }
  },
  getters: {
    getName(state) {
      // 两种方式
			// return state.userName
			return this.userName
		}
  },
  actions: {
    updateUserName(val) {
      this.userName = val
    }
  }
})