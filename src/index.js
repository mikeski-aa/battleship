import "./style.css";
import { gameBoard } from "./modules/gameboard";
import { newPlayer, genXCoord, genYCoord, genDirection, insertCPUship } from "./modules/players";
import { drawBoard } from "./modules/dom";
import { startGame, player2BoardClick, player2board } from "./modules/game";

startGame().gameStartCondition();

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
