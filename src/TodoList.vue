<template>
  <div id="toDo" class="to-do" >
    <Header title="Todo List" />
    <List />
    <Add />
    <Popup />
  </div>
</template>

<script>
import Header from "./components/todo/Header.vue";
import List from "./components/todo/List.vue";
import Add from "./components/todo/Add.vue";
import Popup from "./components/todo/Popup.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    Header,
    List,
    Add,
    Popup,
  },
};
</script>

<style scoped lang="scss">

:focus {
  outline: none;
}

.to-do {
  width: 500px;
  margin: 100px auto;
}
</style>
