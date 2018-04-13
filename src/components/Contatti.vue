<template>
    <div>
      <h1>Contatti</h1>
      <form>
        <div class="form-group">
          <label for="fldNome">Nome</label>
          <input type="text" class="form-control" id="fldNome" placeholder="Nome"
                 v-model="fldNome">
        </div>
        <div class="form-group">
          <label for="fldCognome">Cognome</label>
          <input type="text" class="form-control" id="fldCognome" placeholder="Cognome"
                 v-model="fldCognome">
        </div>
        <div class="form-group">
          <label for="fldEmail">Password</label>
          <input type="email" class="form-control" id="fldEmail" placeholder="Email"
                 v-model="fldEmail">
        </div>
        <button type="button" class="btn btn-default" v-on:click="gestisciForm">Invia</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Contatti',
  data() {
    return {
      fldNome: '',
      fldCognome: '',
      fldEmail: '',
    };
  },
  methods: {
    gestisciForm() {
      const jsonData={
        nome: this.fldNome.toUpperCase(),
        cognome: this.fldCognome.toUpperCase(),
        email: this.fldEmail.toUpperCase(),
      };
      console.log(jsonData);
    },
  },
};
</script>

<style scoped>

</style>
