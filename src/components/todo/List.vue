<template>
  <div>
    <ul id="list" class="list">
      <Item ></Item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item,
  },
};
</script>

<style scoped>
.list {
  overflow: hidden;
  padding: 0;
  margin-top: 20px;
  position: relative;
}

.done {
  text-decoration: line-through;
}

.list .edit-input {
  margin-bottom: 10px;
  padding: 15px 20px;
  border: none;
  width: 100%;
  border-radius: 7px;
  margin-right: 1%;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
}

.list .edit-time {
  position: absolute;
  top: 15px;
  right: 35px;
  background-color: transparent;
  border: none;
  color: #fff;
}

.list .edit-add {
  position: absolute;
  top: 19px;
  right: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
</style>
