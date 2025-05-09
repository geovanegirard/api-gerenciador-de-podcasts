# 🎧 Podcast Streaming

## Descrição

**Podcast Streaming** é um aplicativo no estilo de plataformas de streaming que permite listar e filtrar episódios de podcasts em vídeo, organizados por categorias como saúde, fitness, mentalidade, humor, entre outras.

## Domínio

> 🎥 Podcasts em vídeo

O objetivo principal é fornecer uma interface simples para visualizar episódios e organizá-los de maneira intuitiva por temas.

---

## 🚀 Funcionalidades

* ✅ Listagem de episódios de podcast por sessões de categorias
* 🔍 Filtro de episódios pelo nome do podcast
* 🖼️ Exibição de informações como nome do episódio, thumbnail, link para o vídeo e categorias

---

## 🔧 Como funciona

### 📌 Endpoints

#### 1. **Listar episódios por categoria**

**GET** `/list`

Retorna a lista completa de episódios organizados com suas respectivas categorias.

**Exemplo de resposta:**

```json
[
  {
    "podcastName": "Flow",
    "episode": "SACANI RESPONDE [VIDA NO UNIVERSO]",
    "videoId": "N209olqF23Q",
    "cover": "https://i.ytimg.com/vi/N209olqF23Q/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=N209olqF23Q",
    "categories": ["Astronomia", "Ficção científica"]
  },
  {
    "podcastName": "Flow",
    "episode": "FELCA, BALESTRIN E CARIANI - Flow #429",
    "videoId": "IK5FIpS1ioU",
    "cover": "https://i.ytimg.com/vi/IK5FIpS1ioU/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=IK5FIpS1ioU",
    "categories": ["Esporte", "Saúde", "Humor"]
  }
]
```

---

#### 2. **Filtrar episódios por nome do podcast**

**GET** `/episode?podcastName=Flow`

Filtra e retorna apenas os episódios pertencentes ao nome do podcast informado via query string.

---

## 💻 Tecnologias Utilizadas

* [TypeScript](https://www.typescriptlang.org/) — Superset de JavaScript que adiciona tipagem estática.
* [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript server-side.
* [TSX](https://github.com/esbuild-kit/tsx) — Utilitário para rodar TypeScript diretamente sem transpilar manualmente.
* [tsup](https://tsup.egoist.dev/) — Empacotador moderno de TypeScript baseado em esbuild.
* [@types/node](https://www.npmjs.com/package/@types/node) — Tipagens TypeScript para APIs do Node.js.

---

## 💻 Tecnologias Utilizadas

* TypeScript
* Node.js (HTTP nativo)
* JavaScript (ES Modules)
* YouTube Thumbnails (para imagens de capa dos episódios)

---

## 📦 Como rodar o projeto

Clone este repositório.

```bash
# Instale as dependências
npm install

# Execute o servidor
start:dev
```

---

## 📫 Contato

Caso tenha dúvidas ou sugestões, fique à vontade para entrar em contato.
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Geovane%20Girard-blue?style=flat\&logo=linkedin)](https://www.linkedin.com/in/geovane-girard/)
