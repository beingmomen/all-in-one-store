import Vue from 'vue'
import Vuex from 'vuex'

import { getField, updateField } from 'vuex-map-fields';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [{ name: "Momen", time: "12:12" }, { name: "Ahmed", time: "14:12" },],
    isEditing: false,
    editItemName: "",
    editItemTime: "",
    addTodo: {
      name: "",
      currentTime: ""
    },
    popup: {
      show: false
    }
  },
  getters: {
    todoLength: state => {
      return state.todoList.length
    },
    todoItem: state => {
      return state.todoList.filter(item => item)
    },
    getField,
  },
  mutations: {
    addToList: state => {
      if(state.isEditing) {
        state.todoList.forEach(item => {
          if(item.name == state.editItemName) {
            item.name = state.addTodo.name
            item.time = state.addTodo.currentTime
          }
        })
      } else {
        if (state.addTodo.name !== "") {
          let names = state.todoList.map(item => item.name)
          if (names.indexOf(state.addTodo.name) == -1) {
            state.todoList.push({name: state.addTodo.name, time: state.addTodo.currentTime})
          }
        }
      }
      state.addTodo.name = ""
      state.isEditing = false
    },
    remove: (state, payload) => {
      let message = confirm(`Are you sure to delete ??`)
      if(message) {
        state.todoList.splice(payload, 1)
      }
    },
    edit: (state, data) => {
      state.isEditing = true
      state.editItemName = data.name 
      state.editItemTime = data.time
      state.addTodo.name = data.name
      state.addTodo.currentTime = data.time
    },

    updateField,
  },
  actions: {
    showPopup: state => {
      state.todoList.forEach(item => {
        if (item.time == state.currentTime) {
          console.log("ok: ", state.currentTime );
        } else {
          console.log("no");
        }
      })
    },
  },
  modules: {
  }
})
