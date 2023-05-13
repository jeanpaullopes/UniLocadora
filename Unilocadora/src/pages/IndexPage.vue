
<template>
  <q-page class="flex flex-center">
    <RouterLink to="/cadastroFilme">Cadastro de Filmes</RouterLink>
           <a href="/cadastroFilme">Cadastro de Filmes</a>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <FilmeCard v-for="f in filmes" v-bind:key="f.id" :filme='f'/>

  </q-page>
</template>

<script>
import Services from 'src/services'
import { defineComponent } from 'vue'
import FilmeCard from '../components/FilmeCard.vue'

export default defineComponent({
  components: { FilmeCard },
  name: 'IndexPage',
  data(){
    return {
      filmes: Array
    }
  },
  created() {
    Services.getAllFilmes( (data) => {this.filmes = data})
  }
})
</script>
