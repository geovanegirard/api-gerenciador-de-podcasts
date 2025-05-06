# Podcast streaming

### Descrição
Um app no estilo streaming, onde seja possível separar episódios de podcasts por categoria.

### Domínio
Podcasts em vídeo.

### Features
- Listar os podcasts por sessões de categorias.
  - [saúde, fitness, mentalidade, humor ...].
- Filtrar episódios por nome de podcasts.

## Como

#### Feature:

Listar os episódios por sessões de categorias.

### Como vou implementar:

GET: retorna lista de episódios.

response: 

```js
[
  {
    podcastName: "Flow",
    episode: "SACANI RESPONDE [VIDA NO UNIVERSO]",
    videoId: "N209olqF23Q",
    cover: "https://i.ytimg.com/vi/N209olqF23Q/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=N209olqF23Q",
    categories: ["Astronomia", "Ficção científica"],
  },
  {
    podcastName: "Flow",
    episode: "FELCA, BALESTRIN E CARIANI - Flow #429",
    videoId: "IK5FIpS1ioU",
    cover: "https://i.ytimg.com/vi/IK5FIpS1ioU/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=IK5FIpS1ioU",
    categories: ["Esporte", "Saúde", "Humor"],
  }
]
```