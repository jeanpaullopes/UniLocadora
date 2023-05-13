
<template>
  <div class="q-pa-md">
    <q-table
      title="Filmes"
      :rows="rows"
      :columns="[
        { name: 'id', label: 'Id', field: 'id', sortable: true },
      { name: 'titulo', label: 'Título', field: 'titulo', sortable: true },
      { name: 'Diretor', label: 'Diretor', field: 'diretor', sortable: true }]
      "
      row-key="id"
    />
    adasdasdasd
  </div>
</template>

<script>
import Services from 'src/services'
//import { filmesStore } from 'src/stores/filmesStore';

export default {
  data() {
    return {
      rows: new Array()
    }
  },
  created() {
//    this.rows = filmesStore.getFilmesByAno(1972)
//    this.rows = Services.getFilmesByActor("Andy Garcia")
    this.rows = Services.getAllFilmes()

  }
}
</script>

<style>

</style>
