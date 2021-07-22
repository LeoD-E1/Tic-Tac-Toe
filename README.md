# Tic-Tac-Toe

This project was a challenge to enter in a company.His goal is return the state of a board with the following form
* [
  * [1, 2, 0],
  * [2, 1, 2],
  * [0, 2, 1]
* ]

Then return, 1 if x won, 2 if O won, -1 if the game continues, 0 if a tie ocurred

### The rules are:
* if there is 0 in the board and no one won, the result should be -1, which means game is now playing
* if there is 0 in the board or not and X won, the result should be 1.
* if there is 0 in the board or not and O won, the result should be 2.
* if there is no 0 in the board and no one won, the result should be 0, which means game is a tie.

## Begining 🚀

_These instructions will allow you to get a copy of the project on your local machine for development and testing purposes._

### Pre requirements 📋

* Nodejs => nodejs.org
* npm => this package manager comes with nodejs

### Instalación 🔧

Once cloned this repository, go to the path where are this project and run the follow command in a terminal or cmd

  **npm install**
  
with this you have already to run the project

### Deployment
Once that you has instaled the dependencies, run the follow command

  **npm run test**
  
This will run the tests, which read the boards in the json file
