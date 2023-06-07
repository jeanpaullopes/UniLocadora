<template>
  <q-card>
    <q-input
      filled
      v-model="email"
      label="E-mail"
      lazy-rules
      :rules="[(val) => !!val || 'E-mail é obrigatório']"
    />
    <q-input type="password" label="senha" v-model="senha" />
    <q-btn label="Login" color="primary" @click="login" />
  </q-card>
</template>
<script>
import services from "src/services";
export default {
  name: "PageLogin",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    login() {
      services.login(this.email, this.senha, (response) => {
        if (response) {
          this.$router.push("/");
        } else {
          alert("deu errado");
        }
      });
    },
  },
};
</script>
