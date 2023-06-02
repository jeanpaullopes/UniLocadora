<template>
  <div class="films-table">
    <q-table
      title="Filmes"
      :rows="rows"
      :columns="[
        { name: 'id', label: 'Id', field: 'id', sortable: true },
        { name: 'titulo', label: 'Título', field: 'titulo', sortable: true },
        { name: 'diretor', label: 'Diretor', field: 'diretor', sortable: true },
      ]"
      row-key="id"
      color="primary"
    />
  </div>
</template>
<script>
import Services from "src/services";
//import { filmesStore } from 'src/stores/filmesStore';

export default {
  data() {
    return {
      rows: [],
    };
  },
  created() {
    //    this.rows = filmesStore.getFilmesByAno(1972)
    //    this.rows = Services.getFilmesByActor("Andy Garcia")
    this.rows = Services.getAllFilmes();
  },
};
</script>
<style>
.films-table {
  padding: 1rem;
}

.q-table {
  background-color: #141414;
  color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.q-table__title {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}

.q-table__header th {
  background-color: #1f1f1f;
  color: #fff;
  font-weight: bold;
}

.q-table__rows .q-table__separator {
  background-color: #333;
}

.q-table__rows .q-tr-selected {
  background-color: #1f1f1f;
}

.q-table__rows .q-tr-selected:hover {
  background-color: #1f1f1f;
}

.q-table__rows .q-tr:hover {
  background-color: #1f1f1f;
}
</style>
