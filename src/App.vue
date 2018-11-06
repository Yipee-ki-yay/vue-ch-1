<template>
<div>

  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <nav class="navbar navbar-default"> 
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              
              <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class=""><router-link to="/portfolio">Portfolio</router-link></li>
                <li><router-link to="/stocks">Stocks</router-link></li>
              </ul>
              <!--  -->
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#" @click.prevent="onEndDay">End Day</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Save Data</a></li>
                    <li><a href="#">Load Data</a></li>
                  </ul>
                </li>
                <li><a><strong>Funds: ${{ getFunds }}</strong></a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </nav>
            
        </div>
      </div>
    </div>
  </header>
  <router-view></router-view>
  <!-- <app-home></app-home>
  <app-stocks></app-stocks>
  <app-portfolio></app-portfolio> -->
</div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'getFunds'
      ]),
    },
    methods: {
      ...mapActions([
        'onEndDay'
      ])
    }
  }
</script>

<style>
  .header {
    margin-top: 40px;
  }
</style>
