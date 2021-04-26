# Créer une application Réact

`npx create-react-app yourAppName`

## A supprimer :  
- Dans src : 
  - setupTests.js
  - App.test.js
  - logo.svg
  - vider le App.css
  - le contenu de `App.js` (import logo, le contenu de return)
- Dans public : 
  - logo192.png
  - logo512.png

## Modifier l'icone de notre App :  
**public/** ➡️ ajouter votre logo sous format `logo.ico`  
**index.html** ➡️ `<link rel="icon" href="%PUBLIC_URL%/logo.ico" />`

## Faciliter l'écriture de l'HTML en JSX
Dans le fichier .js ➡️ *Select Language Mode* (à coté de *Go live*) ➡️ sélectionner : **javascriptreact** (le logo du fichier devrait changer)

## Ajout de FontAwesome & Google Font le cas échéant
[FontAwesome](https://github.com/RaphaelHardFork/docs-perso/blob/main/FontAwesome.md)  
[GoogleFonts](https://github.com/RaphaelHardFork/docs-perso/blob/main/googleFonts.md)

## Utilisation de Bootstrap
`yarn add bootstrap@next`

Puis l'importer pour utiliser les class :  
```js
import "bootstrap/dist/css/bootstrap.css"
```


## Bonnes pratiques
Créer un fichier *components*