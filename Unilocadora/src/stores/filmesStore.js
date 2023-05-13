
import { defineStore } from 'pinia'
const usefilmesStore = defineStore('filmes',
  {
    state: () => ({
      filmes: [],
    }),
    actions: {
      addFilme(filme) {
        this.filmes.push(filme)
      },
      setFilmes(filmes) {
        this.filmes = filmes
      },
      getFilmesByAno(ano) {
        return this.filmes.filter(filme => filme.ano == ano)
      },
      getFilmesByActor(actor) {
        return this.filmes.filter(filme => filme.atores.includes(actor))
      }
    }
  }
)
export const filmesStore = usefilmesStore()
