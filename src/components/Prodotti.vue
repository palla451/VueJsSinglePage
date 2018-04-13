<template>
  <div id="ProdottiContainer">
    <h1>Ciao sono la pagina prodotti</h1>
    <ul>
      <li v-for="item in elencoProdotti" :key="item">
        <strong>{{item.codice}}</strong><br />
        <strong>{{item.nome}}</strong><br />
        <strong>{{item.prezzo}}</strong><br />
        <router-link :to="{'name':'PaginaDettaglioProdotto', params:{codice:item.codice}}">
          DettaglioProdotto
        </router-link><br/>
        <img v-for="photo in item.immagini" v-bind:key="photo" :src="photo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Prodotti',
  data() {
    return {
      elencoProdotti: [
        {
          codice: 'AA001',
          nome: 'Magic Mouse',
          prezzo: '90',
          immagini: [
            'https://placeimg.com/350/350/nature',
            'https://placeimg.com/350/350/peolpe',
            'https://placeimg.com/350/350/tech',
          ],
        },
        {
          codice: 'AA002',
          nome: 'iMac 27 Retina',
          prezzo: '2100',
          immagini: [
            'https://placeimg.com/350/350/animals',
            'https://placeimg.com/350/350/sepia',
            'https://placeimg.com/350/350/architecture',
          ],
        },
        {
          codice: 'AA003',
          nome: 'iPhone 7 128Gb',
          prezzo: '869',
          immagini: [
            'https://placeimg.com/350/350/nature',
            'https://placeimg.com/350/350/peolpe',
            'https://placeimg.com/350/350/tech',
          ],
        },
        {
          codice: 'AA004',
          nome: 'Apple Watch 3',
          prezzo: '499',
          immagini: [
            'https://placeimg.com/350/350/nature',
            'https://placeimg.com/350/350/peolpe',
            'https://placeimg.com/350/350/tech',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
  h1 {
    background-color: aquamarine;
    text-decoration: underline;
  }
  ul li {
    list-style-type: none;
  }
</style>
