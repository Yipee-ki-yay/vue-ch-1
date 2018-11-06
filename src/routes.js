import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';

export const routes = [
  { path: '', name: 'home', components: {
    default: Home,
  }},
  { path: '/portfolio', components: {
    default: Portfolio,
  }},
  { path: '/stocks', components: {
    default: Stocks,
  }},

  { path: '*', redirect: '/' }
];