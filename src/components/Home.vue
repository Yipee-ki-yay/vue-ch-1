<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <h1>Trade or View tour Portfolio</h1>
            <p>You may Save & Load your Data</p>
            <p>Click on 'End Day' to begin a new Day!</p>
            <hr>
            <strong>Your Funds: ${{ getFunds }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters([
      'getFunds'
    ]),
    
  }
}
</script>

<style>

</style>
