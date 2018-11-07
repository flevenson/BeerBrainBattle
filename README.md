# BeerBrainBattle
## A React Redux Game to test your knowledge and challenge your friends for drinks.

Project spec can be found [here](http://frontend.turing.io/projects/binary-challenge.html).

## Setup Instructions 

npm install

npm start

## Tech Used

-React

-React-Router

-React-Redux

-Redux

-openTDB API (http://opentdb.com)

## See it live
![Home Screen](./beerbrainbattle/src/assets/homescreenshot.png "HomeScreen Screenshot")

![Question Screen](./beerbrainbattle/src/assets/question.png "HomeScreen Screenshot")

![Answer Screen](./beerbrainbattle/src/assets/answer.png "HomeScreen Screenshot")

![Game Over Screen](./beerbrainbattle/src/assets/gameOver.png "HomeScreen Screenshot")

## Wireframe
BeerBrainBattle is a web-based single page game that allows you to play trivia with friends, recieve questions from the openTDB trivia API and challenge your friends for drinks.

![WireFrame](./beerbrainbattle/src/assets/wireframe.jpg "App Wireframe")

## App Architecture

```
Provider
|
|_ BrowserRouter
  |
  |_ App (stateless)
    |
    |_ Question (stateless)
      |
      |_ Answer (stateless)
      |
      |_ GameOver (stateless)
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

