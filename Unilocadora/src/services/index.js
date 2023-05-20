import api from "./api";
import { appStore } from "src/stores/appStore";

const services = {
  getAllFilmes(callback) {
    if (appStore.filmes.length == 0) {
      console.log("getAllFilmes zerado");
      api
        .get("/filmes")
        .then((response) => {
          appStore.setFilmes(response.data);
          if (callback != null) {
            callback(appStore.filmes);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      console.log("getAllFilmes com dados");
      if (callback != null) {
        console.log("getAllFilmes com dados e callback ");
        console.log(appStore.filmes);
        callback(appStore.filmes);
      } else {
        return appStore.filmes;
      }
    }
  },
  getFilmesByActor(actor) {
    return filmesStore.getFilmesByActor(actor);
  },
  saveFilme(filme) {
    filmesStore.addFilme(filme);

    /* api.post('/filmes', filme).then((response)=>{
      filmesStore.setFilmes(response.data)
    }).catch((error)=>{
      alert(error.message)
    })
    */
  },
  saveCliente(cliente, callback) {
    api
      .post("/clientes", cliente)
      .then((response) => {
        console.log(response.data);
        appStore.setCliente(response.data);
        if (callback != null) {
          console.log("saveCliente com callback");
          callback(true);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  },
};

export default services;
