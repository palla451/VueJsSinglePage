<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active">
            <router-link :to="{'name':'HomePage'}">
              Home <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{'name':'PaginaProdotti'}">
              Prodotti
            </router-link>
          </li>
          <li>
              <router-link :to="{'name':'PaginaAzienda'}">
                Azienda
              </router-link>
          </li>
          <li>
            <router-link :to="{'name':'PaginaContatti'}">
              Contatti
            </router-link>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->

    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  padding-top: 90px;
}
</style>
