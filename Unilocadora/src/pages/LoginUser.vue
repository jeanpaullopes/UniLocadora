<template>
  <q-page class="login-page">
    <main>
      <!-- <img id="logo" src="../assets/logo.png" /> -->

      <div class="login-card">
        <q-card class="q-pa-md" color="primary">
          <q-card-section>
            <q-form class="q-gutter-md">
              <div class="form-row">
                <label class="form-label">Email</label>
                <q-input
                  class="form-input"
                  outlined
                  v-model="email"
                  type="email"
                  color="primary"
                  dense
                />
              </div>
              <div class="form-row">
                <label class="form-label">Senha</label>
                <q-input
                  class="form-input"
                  outlined
                  v-model="password"
                  type="password"
                  color="primary"
                  dense
                />
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions>
            <q-btn
              flat
              color="primary"
              size="lg"
              class="full-width"
              label="Entrar"
              @click="onClick"
              style="
                font-family: 'Arial', sans-serif;
                font-weight: bold;
                text-transform: uppercase;
              "
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <div class="registration-link">
              Ainda não é cadastrado?
              <CadastrarUsuario />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </main>
  </q-page>
</template>

<script>
import CadastrarUsuario from "../components/modal/CadastrarUsuario.vue";
import { useRouter } from "vue-router";
const router = useRouter();

export default {
  name: "LoginUser",
  components: {
    CadastrarUsuario,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onClick() {
      const storedUser = sessionStorage.getItem("usuario");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === this.email && user.senha === this.password) {
          // Login bem-sucedido, fazer outras ações
          alert(`Bem-vindo, ${user.nome}!`);
          this.$router.push("/cadastroFilme");
          // Limpar os campos de email e senha
        } else {
          // Credenciais inválidas, exibir mensagem de erro
          alert("Credenciais inválidas.");
        }
      } else {
        // Usuário não encontrado, exibir mensagem de erro
        alert("Usuário não encontrado.");
      }
    },
  },
};
</script>

<style>
.login-page {
  background: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-card {
  width: 400px;
  max-width: 90%;
  background-color: #fff;
  padding: 2rem;
  color: #333;
  margin: 4rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.form-label {
  font-size: 18px;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-input {
  background-color: #f5f5f5;
  border-color: #ccc;
  color: #333;
}

.q-input__control,
.q-input__details {
  height: 42px;
}

.q-btn__content {
  font-size: 18px;
}

.text {
  display: block;
  margin-bottom: 0.5rem;
}

.registration-link {
  margin-top: 1rem;
  font-size: 14px;
  color: #666;
}
</style>
