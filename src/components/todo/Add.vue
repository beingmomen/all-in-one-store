<template>
  <div>
    <div class="addition">
      <input
        class="task-input"
        type="text"
        name="task"
        placeholder="Add new task"
        v-model="addTodo.name"
        @keyup.enter="addToList"
      />
      <input
        class="current-time"
        type="time"
        name="time"
        v-model="addTodo.currentTime"
        @keyup.enter="addToList"
      />
      <font-awesome-icon
        @click="addToList"
        class="add-task"
        :icon="['fas', 'plus']"
        size="2x"
      />
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([]),
    ...mapFields(["addTodo"]),
  },
  methods: {
    ...mapMutations(["addToList"]),
  },

  mounted() {
    this.addTodo.currentTime = new Intl.DateTimeFormat("en-GB", {
        timeStyle: "short",
      }).format(new Date());
    setInterval(() => {
      this.addTodo.currentTime = new Intl.DateTimeFormat("en-GB", {
        timeStyle: "short",
      }).format(new Date());
    }, 10000);
  },
};
</script>

<style scoped>
.addition {
  position: relative;
}

.task-input {
  padding: 15px 20px;
  border: none;
  width: 100%;
  border-radius: 7px;
  margin-right: 1%;
  background-color: #002e63;
  color: #fff;
}

input:-internal-autofill-selected {
  background-color: #000;
}

.current-time {
  position: absolute;
  top: 12px;
  right: 47px;
  background-color: transparent;
  border: none;
  color: #9c9ba1;
}

.add-task {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #9c9ba1;
}
</style>
