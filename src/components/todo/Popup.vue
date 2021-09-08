<template>
  <div id="overlay" class="overlay" v-if="popup.show">
    <div id="popUp" class="pop-up">
      <p id="reminderTime" class="reminder-time">{{popup.time}}</p>
      <hr />
      <h3 id="reminderName" class="reminder-name">{{popup.name}}</h3>
      <hr />
      <button id="done" class="button done-popup">Done</button>
      <button id="close" class="button close-popup">Close</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["popup", "todoList", "addTodo"]),
  },
  methods: {
    ...mapActions(["showPopup"]),
  },
  mounted() {
    setInterval(() => {
      this.todoList.forEach((item) => {
        if (item.time == this.addTodo.currentTime) {
          // this.popup.show = true
          this.popup.name = item.name
          this.popup.time = item.time
        }
      });
    }, 1000);
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  /* display: none; */
}

.pop-up {
  width: 350px;
  height: fit-content;
  background-color: #b80e65;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  z-index: 9999;
  border-radius: 5px;
  overflow: hidden;
}

.button {
  color: #fff;
  background-color: #1791b1;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
}

.reminder-time {
  color: #fff;
  padding: 20px 0px 0px 20px;
}

.reminder-name {
  color: #fff;
  text-transform: capitalize;
  text-align: center;
}

.close-popup {
  float: right;
}

.close-popup:focus,
.done-popup:focus {
  outline: none;
}
</style>
