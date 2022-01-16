# Portefeuille électronique

-   Présentation du projet
-   Définition des objectifs
-   Décrire le public visé
-   Décrire les fonctionnalités

### Présentation du projet

Le projet consiste à réaliser un portefeuille électronique qui comprendrait les différentes monnaies électroniques et leurs cours. L'utilisateur aurait tout d'abord accès aux différents cours. En cliquant sur une monnaie en particulier, il peut accéder à plus de détails sur celle-ci. Puis s'il le souhaite, il peut créer un compte ou s'authentifier afin d'accéder à son porte-monnaie électronique.
L'application sera pensée mobile-first mais sera responsive.

## Technos utilisées
[![made-with-HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![made-with-CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


## Hosting provider
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

### Définition des objectifs

-   Proposer une interface soignée et épurée, avec une lecture facile des données pour l'utilisateur
-   Mettre en place un système d'authentification avec création et gestion de compte, ainsi que la sécurité.
-   Récupérer les données suivantes :

    -   Les différents cours via API https://coinmarketcap.com/ https://www.luno.com/en/developers
    -   Les graphiques via ChartJS

-   (Optionnel) Effectuer des transactions via blockchain
-   (Optionnel) Système de chat

### Décrire le public visé

Les utilisateurs, mobiles ou non, intéressés par les cryptomonnaies.

### Commandes

-   SASS :

```sh
sass src/main.scss public/css/styles.css
```

```sh
sass src/main.scss public/css/styles.css --watch
```

-   Git :
    git remote add upstream https://github.com/Mehdi-Adel/Crypto-project.git
    git pull upstream main

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Gmail Authentication

https://github.com/asyarb/react-use-googlelogin

### Spinner

https://github.com/davidhu2000/react-spinners
