<template>
  <div class="header">
    <h3 class="heading">
      {{ title }}
      <span id="tasksNumber" class="tasks-numbers"
        >( {{ todoLength }} )</span
      >
    </h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["title"],
  computed: {
    ...mapGetters(["todoLength"]),
  },
};
</script>

<style scoped>
.header {
  background-color: #b80e65;
  border-radius: 5px;
}

.heading {
  padding: 15px 0 15px 15px;
  color: #fff;
  text-align: center;
  justify-content: center !important;
}

.heading span {
  margin-left: 15px;
}
</style>
