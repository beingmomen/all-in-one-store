<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body m-auto text-center">
              <h5 class="card-title">Todo List </h5>
              <router-link to="/todo"><a href="#"  class="btn btn-primary">Go To Todo List</a></router-link>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body m-auto text-center">
              <h5 class="card-title">BMI</h5>
              <router-link to="/bmi"><a href="#" class="btn btn-primary">Go To BMI</a></router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {

};

</script>


<style>
.home {
    height: 500px;
    display: flex;
    align-items: center;
}
</style>