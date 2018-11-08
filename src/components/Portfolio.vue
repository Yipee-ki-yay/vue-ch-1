<template>
<div class="container">

  <div class="row">
    <div class="col-xs-12">
      <div class="row">
        <!--  -->
        <div class="col-xs-6" v-for="(stock, index) in getMyStocks"
                              :key="index">
          <div class="panel panel-info"> 
            <div class="panel-heading"> 
              <strong class="panel-title">{{ stock.title }}</strong> 
              <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </div> 
            <div class="panel-body"> 
              <div class="row">
                <div class="col-xs-5">
                  <input v-model="isDisabled" type="text" class="form-control" placeholder="Quantity">
                </div>
                <div class="col-xs-7 text-right">
                  <button class="btn btn-danger" :disabled="isDisabled == ''">Sell</button>
                </div>
              </div>  
            </div> 
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {
  data() {
    return {
      isDisabled: ''
    };
  },
  computed: {
    ...mapGetters([
      'getMyStocks'
    ]),
  }
}
</script>

<style>

</style>
