<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <app-user></app-user>
        </div>
      </div>
    </div>
</template>

<script>
import User from './components/User.vue'

export default {

  components: {
    appUser: User
  }
}

</script>

<style>
div.component {
  border: 1px solid #000;
  padding: 30px;
}  

</style>
