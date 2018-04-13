import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Prodotti from '@/components/Prodotti';
import Azienda from '@/components/Azienda';
import Contatti from '@/components/Contatti';
import PaginaDettaglioProdotto from '@/components/PaginaDettaglioProdotto';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/prodotti',
      name: 'PaginaProdotti',
      component: Prodotti,
    },
    {
      path: '/azienda',
      name: 'PaginaAzienda',
      component: Azienda,
    },
    {
      path: '/contatti',
      name: 'PaginaContatti',
      component: Contatti,
    },
    {
      path: '/dettaglio-prodotto/:codice',
      name: 'PaginaDettaglioProdotto',
      component: PaginaDettaglioProdotto,
    },
  ],
});
