# Portefeuille électronique

-   Présentation du projet
-   Définition des objectifs
-   Décrire le public visé
-   Décrire les fonctionnalités

### Présentation du projet

Le projet consiste à réaliser un portefeuille électronique qui comprendrait les différentes monnaies électroniques et leurs cours. L'utilisateur aurait tout d'abord accès aux différents cours. En cliquant sur une monnaie en particulier, il peut accéder à plus de détails sur celle-ci. Puis s'il le souhaite, il peut créer un compte ou s'authentifier afin d'accéder à son porte-monnaie électronique.
L'application sera pensée mobile-first mais sera responsive.

### Définition des objectifs

- Proposer une interface soignée et épurée, avec une lecture facile des données pour l'utilisateur
- Mettre en place un système d'authentification avec création et gestion de compte, ainsi que la sécurité.
- Récupérer les données suivantes :

  - Les différents cours via API https://coinmarketcap.com/ https://www.luno.com/en/developers
  - Les graphiques via ChartJS

- (Optionnel) Effectuer des transactions via blockchain
- (Optionnel) Système de chat

### Décrire le public visé

Les utilisateurs, mobiles ou non, intéressés par les cryptomonnaies.

### Commandes

- SASS :
```sh
sass src/main.scss public/css/styles.css
```

```sh
sass src/main.scss public/css/styles.css --watch
```

- Git :
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

