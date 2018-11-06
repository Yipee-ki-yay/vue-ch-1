<template>
<div class="container">

  <div class="row">
    <div class="col-xs-12">
      <div class="row">
        <!--  -->
        <div class="col-xs-6" v-for="(stock, index) in stocks"
                              :key="index">
          <div class="panel panel-success"> 
            <div class="panel-heading"> 
              <strong class="panel-title">{{ stock.title }}</strong> 
              <small>(Price: {{ stock.price }})</small>
            </div> 
            <div class="panel-body"> 
              <div class="row">
                <div class="col-xs-5">
                  <input 
                         @input="onInput({index: index, value: $event.target.value}); 
                                 setQuantity(index, $event.target.value)" 
                         type="text" class="form-control" 
                         placeholder="Quantity">
                </div>
                <div class="col-xs-7 text-right">
                  <button class="btn btn-success" 
                          :disabled="stock.isBtnDis"
                          @click="onBuy({index: index, quantity: quantity})">Buy</button>
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      quantity: []
    };
  },
  computed: {
    ...mapGetters({
      'stocks': 'getStocks'
    }),
  },
  methods: {
    ...mapActions([
      'onInput',
      'onBuy'
    ]),
    setQuantity(index, value) {
      this.quantity[index] = value;
    }
  }

}
</script>

<style>

</style>
