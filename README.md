# Space Ships 🚢

The app lists to the user all ships and sea plataforms from the **Space X's GraphQL** [api](https://api.spacex.land/graphql/), and click on the cards to find out additional informations about them.

*// A aplicação permite que o usuário veja os navios e plataformas marítimas disponíveis na API GraphQL da SpaceX, podendo clicar nos cards para descobrir mais sobre os mesmos.*

## App Overview // *overview da aplicação* 💻

![2021-12-06 17-35-20](https://user-images.githubusercontent.com/53411709/144918978-0aba2511-7965-4413-964f-f30be01b97e4.gif)


##

- 🏠 **Home** - View all the loaded cards // *veja todos os cards carregados*
- 💗 **Detail** - Check out the details about the clicked ship or sea plataform // *Descubra mais informações sobre o card clicado*

## How to run / *como executar* 💿

Go to project's directory and install all the dependencies
*//  Vá até o diretório do projeto e instale as dependências*
```
yarn | npm install
```

Next, simply run the project
*// Depois é só rodar o projeto =)*
```
yarn start || npm start
```
## Project Structure / *estrutura do projeto* 🌳
```
├── App.jsx 
├── assets // images
│   ├── arrow.svg
│   └── ship.svg
├── components // app containers
│   ├── Header
│   │   ├── Header.jsx
│   │   └── styles.js
│   ├── Loader
│   │   ├── Loader.jsx
│   │   └── styles.js
│   ├── ShipCard
│   │   ├── ShipCard.jsx
│   │   └── styles.js
│   ├── ShipsList
│   │   ├── ShipsList.jsx
│   │   └── styles.js
│   └── Template
│       ├── styles.js
│       └── Template.jsx
├── graphql // api requests
│   └── queries.js
├── index.js
├── pages // app screens
│   ├── Home
│   │   ├── Home.jsx
│   │   └── styles.js
│   └── ShipDetail
│       ├── ShipDetail.jsx
│       └── styles.js
├── redux // state management files
│   ├── actions
│   │   ├── ShipDetailActions.js
│   │   └── ShipsActions.js
│   ├── reducers
│   │   ├── index.js
│   │   ├── ShipDetailReducer.js
│   │   └── ShipsReducer.js
│   └── store.js
├── routes.js // app routes
└── styles
    └── global.js // global styles


``` 
## Tools used / *ferramentas utilizadas* 🛠
- React JS
- Styled Components
- Redux
- Router DOM
- GraphQL
- Figma (design tool)


