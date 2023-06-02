<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="new-button">
        <q-btn
          label="Novo"
          @click="editando = true"
          v-if="!editando"
          class="btn-primary"
        />
      </div>
      <q-form class="form" v-if="editando">
        <q-input
          outlined
          v-model="titulo"
          label="Título"
          class="input custom-input"
          label-color="white"
        />
        <q-input
          outlined
          v-model="diretor"
          label="Diretor"
          class="input custom-input"
          label-color="white"
        />
        <q-input
          outlined
          v-model="ano"
          label="Ano"
          class="input custom-input"
          label-color="white"
        />
        <q-input
          outlined
          v-model="genero"
          label="Gênero"
          class="input custom-input"
          label-color="white"
        />
        <q-input
          outlined
          v-model="atores"
          label="Atores (separe por ,)"
          class="input custom-input"
          label-color="white"
        />
        <q-btn
          label="Salvar"
          @click="salvar"
          class="btn-primary"
          dense
          rounded
        />
        <q-btn
          label="Cancelar"
          @click="editando = false"
          class="btn-primary"
          dense
          rounded
        />
      </q-form>
      <FilmeTable />
    </q-page-container>
  </q-layout>
</template>

<script>
import services from "src/services";
import FilmeTable from "../components/FilmeTable.vue";
export default {
  name: "CadastroFilme",
  components: { FilmeTable },
  data() {
    return {
      editando: false,
      titulo: "",
      diretor: "",
      ano: 0,
      genero: "",
      atores: "",
    };
  },
  methods: {
    salvar() {
      let novo = {
        titulo: this.titulo,
        diretor: this.diretor,
        ano: this.ano,
        genero: this.genero,
        atores: this.atores.split(","),
      };
      services.saveFilme(novo);
      this.editando = false;
    },
  },
};
</script>

<style>
.form {
  max-width: 50%;
}

.input {
  background-color: #141414;
  color: #fff;
  border-color: #707070;
}

.input__control,
.input__details {
  height: 42px;
}

.btn-primary {
  background-color: #e50914;
  color: #fff;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

.new-button {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.custom-input .q-field__native {
  color: #fff !important;
}
</style>
