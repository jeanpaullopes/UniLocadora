<script>
import { useQuasar } from "quasar";
import FormCliente from "src/components/FormCliente.vue";
import Services from "src/services";
import { appStore } from "src/stores/appStore";
import { defineComponent } from "vue";
import FilmeCard from "../components/FilmeCard.vue";
import CardCarrinho from "../components/cardCarrinho.vue";

export default defineComponent({
  components: { FormCliente, FilmeCard, CardCarrinho },
  name: "IndexPage",
  data() {
    return {
      filmes: Array,
      showFormCliente: false,
      carrinho: appStore.carrinho,
    };
  },
  created() {
    Services.getAllFilmes((data) => {
      this.filmes = data;
    });
    Services.checkLogado();
  },
  methods: {
    login() {
      appStore.cliente = {
        id: 1,
        nome: "teste",
        email: "",
      };
    },
    logout() {
      Services.logout();
    },
    onLocarFilme(filme) {
      appStore.carrinho.cliente = appStore.cliente;
      appStore.carrinho.filmes.push(filme);
      appStore.carrinho.data = new Date();
    },
    naoLogado() {
      console.log(appStore.cliente == null);
      return appStore.cliente == null;
    },
    onSalvarCliente(cliente) {
      Services.saveCliente(cliente, (ok) => {
        console.log("no onsalvar " + ok);
        if (ok) {
          this.showFormCliente = false;
          const $q = useQuasar();
          $q.notify({
            message: "Cliente salvo com sucesso!\nbem vindo " + cliente.nome,
            color: "positive",
            icon: "check",
          });
        }
      });
    },
  },
});
</script>

<template>
  <q-page class="flex flex-center">
    <div>
      <CardCarrinho :carrinho="carrinho" />
    </div>
    <div v-if="!naoLogado()">
      <q-btn @click="logout">Logout</q-btn>
    </div>
    <div v-if="naoLogado()">
      olá! seja bem vindo! faça seu login
      <q-btn to="/login">Login</q-btn>
      ou cadastra-se
      <q-btn @click="showFormCliente = !showFormCliente">Novo Cliente</q-btn>
    </div>
    <!--
    <RouterLink to="/cadastroFilme">Cadastro de Filmes</RouterLink>
    <a href="/cadastroFilme">Cadastro de Filmes</a>
    -->

    <form-cliente
      @salvarCliente="onSalvarCliente"
      v-if="showFormCliente"
      :cliente="{
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
      }"
    />

    <FilmeCard
      :logado="!naoLogado()"
      v-for="f in filmes"
      v-bind:key="f.id"
      :filme="f"
      :carrinho="carrinho"
      @locarFilme="onLocarFilme"
      @comparFilme="onComprarFilme"
    />
  </q-page>
</template>
