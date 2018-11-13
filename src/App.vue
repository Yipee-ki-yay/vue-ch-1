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
                <li class="dropdown" @click="toggleMenu">
                  <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
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
  <transition name="slide" mode="out-in">
    <router-view></router-view>
  </transition>
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
      ]),
      toggleMenu($event) {
        if ($event.currentTarget.classList.contains('dropdown')) {
          $event.currentTarget.classList.toggle('open');
        }
      }
    }
  }
</script>

<style>
  .header {
    margin-top: 40px;
  }
  .dropdown-toggle.open .dropdown-menu {
    display: block;    
  }

  .slide-enter {

  }
  .slide-enter-active {
    animation: slide-in .4s ease-out forwards;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out .4s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }    
  }  
</style>
