
import api from './api';
import { filmesStore } from 'src/stores/filmesStore';

const services = {
  getAllFilmes( callback ) {
    if (filmesStore.filmes.length == 0) {
      console.log('getAllFilmes zerado')
      api.get('/filmes').then((response)=>{
        filmesStore.setFilmes(response.data)
        if (callback != null) {
          callback(filmesStore.filmes)
        }
      }).catch((error)=>{
        alert(error.message)
      })
    } else {
      console.log('getAllFilmes com dados')
      if (callback != null) {
        console.log('getAllFilmes com dados e callback ')
        console.log(filmesStore.filmes)
        callback(filmesStore.filmes)
      } else {
        return filmesStore.filmes
      }

    }
  },
  getFilmesByActor(actor) {
    return filmesStore.getFilmesByActor(actor)
  },
  saveFilme(filme) {
    filmesStore.addFilme(filme)

   /* api.post('/filmes', filme).then((response)=>{
      filmesStore.setFilmes(response.data)
    }).catch((error)=>{
      alert(error.message)
    })
    */
  }

}

export default services;
