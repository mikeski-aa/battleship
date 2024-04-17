import "./style.css";
import { gameBoard } from "./modules/gameboard";
import { newPlayer, genXCoord, genYCoord, genDirection, insertCPUship } from "./modules/players";
import { drawBoard } from "./modules/dom";
import { startGame, player2BoardClick, player2board } from "./modules/game";

startGame().gameStartCondition();


