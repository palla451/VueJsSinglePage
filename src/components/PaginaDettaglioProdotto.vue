<template>
    <div>
      <h1>Dettaglio Prodotto</h1>
      {{codiceProdottoToWork}}
    </div>
</template>

<script>
export default {
  name: 'PaginaDettaglioProdotto',
  data(){
    return {
      codiceProdottoToWork: this.$route.params.codice,
    };
  },
};
</script>

<style scoped>

</style>
