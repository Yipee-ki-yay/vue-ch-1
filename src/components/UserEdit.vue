<template>
  <div>
    <h2>You may edit the User here</h2>
    <p>Edit me!</p>  
    <p>user age: {{ userAge }}</p>  
    <button @click="editAge">Edit Age</button>
    <!-- <button @click="changeAgeFn()">Edit Age</button> -->
  </div>  
</template>

<script>
import { eventBus } from '../main.js';

export default {
  props: ['userAge', 'changeAgeFn'],
  methods: {
    editAge() {
      this.userAge = 30;
      // this.$emit('ageWasEditted', this.userAge);
      // eventBus.$emit('ageWasEditted', this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style scoped>
div{
  border: 1px solid #000;
  background-color: lime;
}

</style>
