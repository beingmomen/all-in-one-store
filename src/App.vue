<template>
  <div class="navigation">
    <div class="container">
      <ul class="nav nav-pills justify-content-center">
        <router-link
          class="nav-item"
          to="/"
          tag="li"
          active-class="active"
          exact
        >
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </router-link>
        <router-link class="nav-item" to="/todo" tag="li" active-class="active">
          <a class="nav-link" aria-current="page" href="#"
            >Todo ( {{ todoLength }} )</a
          >
        </router-link>
        <router-link class="nav-item" to="/bmi" tag="li" active-class="active">
          <a class="nav-link" aria-current="page" href="#">Bmi</a>
        </router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["todoLength"]),
  },
};
</script>

<style>
body {
  background-color: #1c1b4d !important;
  font-family: Arial, Helvetica, sans-serif;
}
.navigation {
  margin-top: 50px;
}
.nav-pills .nav-item.active .nav-link {
  color: #fff;
  background-color: #0d6efd;
}
</style>
