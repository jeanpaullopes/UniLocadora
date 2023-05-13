<template>
  <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{filme.titulo}}</div>
        <div class="text-subtitle2">{{filme.genero}}</div>
      </q-card-section>

      <q-card-section>
        <ul>
          <li v-for="ator in filme.atores" v-bind:key="ator">{{ ator }}</li>
      </ul>
      </q-card-section>
      <q-card-section>
        Diretor: {{ filme.diretor}}<br/>
        Ano: {{ filme.ano }}
      </q-card-section>
      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  props: {
    filme: Object
  }

}
</script>

<style>

</style>
