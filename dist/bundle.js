/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table, tr, td, th{
    border: 1px solid black;
    border-collapse: collapse;
}

th {
    width: 32px;
    background-color: beige;
}


[class*='cell'] {
    width: 32px;
    height: 32px;
}

[class*="ship"] {
    background-color: red;
}

[class*="miss"] {
    background-color: blue;
}

[class*="targetHit"] {
    background-color: violet;
}

.boards {
    display: flex;
    gap: 2rem;
}

/* .health {
    display: flex;
}

[class*="carrierHPbar"], 
[class*="BSHPbar"], 
[class*="cruiserHPbar"], 
[class*="submarineHPbar"],
[class*="destroyerHPbar"] {
    border: 1px solid black;
    width: 32px;
    height: 32px;
}

[class="carrierHP"], 
[class="BSHP"], 
[class="cruiserHP"], 
[class="submarineHP"], 
[class="destroyerHP"] {
    display: flex;
} */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;;AAGA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;;;;;;;;;;;;;;;;;;GAoBG","sourcesContent":["table, tr, td, th{\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\nth {\n    width: 32px;\n    background-color: beige;\n}\n\n\n[class*='cell'] {\n    width: 32px;\n    height: 32px;\n}\n\n[class*=\"ship\"] {\n    background-color: red;\n}\n\n[class*=\"miss\"] {\n    background-color: blue;\n}\n\n[class*=\"targetHit\"] {\n    background-color: violet;\n}\n\n.boards {\n    display: flex;\n    gap: 2rem;\n}\n\n/* .health {\n    display: flex;\n}\n\n[class*=\"carrierHPbar\"], \n[class*=\"BSHPbar\"], \n[class*=\"cruiserHPbar\"], \n[class*=\"submarineHPbar\"],\n[class*=\"destroyerHPbar\"] {\n    border: 1px solid black;\n    width: 32px;\n    height: 32px;\n}\n\n[class=\"carrierHP\"], \n[class=\"BSHP\"], \n[class=\"cruiserHP\"], \n[class=\"submarineHP\"], \n[class=\"destroyerHP\"] {\n    display: flex;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawBoard: () => (/* binding */ drawBoard),
/* harmony export */   drawCPU: () => (/* binding */ drawCPU)
/* harmony export */ });
// we do dom stuff here

// const domManipulation = () => {
//   const drawBoard = (currBoard) => {
//     for (let i = 0; i < 10; i++) {
//       for (let j = 0; j < 10; j++) {
//         if (board[i][j] != ("empty" || "M" || "X")) {
//           cell = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);
//           cell.classList.add("ship");
//         }
//       }
//     }
//   };
//   return {
//     drawBoard,
//   };
// };
// draws player board on screen
function drawBoard(currBoard, playerNum) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.querySelector(`[class*="player${playerNum}"][data-x="${j}"][data-y="${i}"]`);

      if (currBoard[i][j] == "M") {
        cell.classList.add("miss");
      } 
      else if (currBoard[i][j] == ("X")) {
        cell.classList.add("targetHit");
      }
      else if (currBoard[i][j] != ("empty" || 0 || 0)) {
        cell.classList.add("ship");
      }
    }
  }
}

function drawCPU(currBoard, playerNum) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.querySelector(`[class*="player${playerNum}"][data-x="${j}"][data-y="${i}"]`);

      if (currBoard[i][j] == "M") {
        cell.classList.add("miss");
      } 
      else if (currBoard[i][j] == ("X")) {
        cell.classList.add("targetHit");
      }
      
    }
  }
}

function trackHP() {
  
}




/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");




const startGame = () => {
  let cpuPlayer = (0,_players__WEBPACK_IMPORTED_MODULE_1__.newPlayer)("computer", "CPU");
  let player1 = (0,_players__WEBPACK_IMPORTED_MODULE_1__.newPlayer)("Player1", "player");
  let p1Count = 0;
  let p2Count = 0;

  const gameStartCondition = () => {
    initializePlayer();
    initializeCPU();
  };
  // testing for player 1

  const initializePlayer = () => {
    player1.playerBoard.createBoard();
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(player1.carrier, player1.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(player1.battleship, player1.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(player1.submarine, player1.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(player1.cruiser, player1.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(player1.destroyer, player1.playerBoard);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drawBoard)(player1.playerBoard.board, 1);

  };

  // This is how the game will always start if the player wants to play CPU.

  const initializeCPU = () => {
    cpuPlayer.playerBoard.createBoard();

    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(cpuPlayer.carrier, cpuPlayer.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(cpuPlayer.battleship, cpuPlayer.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(cpuPlayer.submarine, cpuPlayer.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(cpuPlayer.cruiser, cpuPlayer.playerBoard);
    (0,_players__WEBPACK_IMPORTED_MODULE_1__.insertShipRandomCoords)(cpuPlayer.destroyer, cpuPlayer.playerBoard);

    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drawCPU)(cpuPlayer.playerBoard.board, 2);

    player2BoardClick(cpuPlayer);
  };

  const player2BoardClick = () => {
    let p2board = document.querySelector(".p2board");
    p2board.addEventListener("click", (event) => {
      let xCoord = event.target.dataset.x;
      let yCoord = event.target.dataset.y;
      console.log([xCoord, yCoord]);

      if (xCoord != undefined && yCoord != undefined) {
        console.log("clickable tile");
        cpuPlayer.playerBoard.receiveAttack(yCoord, xCoord);
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drawCPU)(cpuPlayer.playerBoard.board, 2);
        p1Count += 1;
        console.log(p1Count);

        if (gameOver(cpuPlayer) == true) {
          return alert(`Game over ${player1.name} wins`);
        } else {
          return cpuTurn();
        }
      }

      return [xCoord, yCoord];
    });
  };

  const cpuTurn = () => {
    while (true) {
      let xCoord = (0,_players__WEBPACK_IMPORTED_MODULE_1__.genXCoord)();
      let yCoord = (0,_players__WEBPACK_IMPORTED_MODULE_1__.genYCoord)();

      if (
        player1.playerBoard.board[yCoord][xCoord] != "X" &&
        player1.playerBoard.board[yCoord][xCoord] != "M"
      ) {
        player1.playerBoard.receiveAttack(yCoord, xCoord);
        p2Count += 1;
        console.log(p2Count);

        if (gameOver(player1) == true) {
          return alert(`Game over ${cpuPlayer.name} wins`);
        } else {
          return (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drawBoard)(player1.playerBoard.board, 1);
        }
      } else if (p2Count == 100) {
        return alert("Max moves reached by CPU");
      }
    }
  };

  const gameOver = (inputPlayer) => {
    let totalHP =
      inputPlayer.carrier.hitCount +
      inputPlayer.battleship.hitCount +
      inputPlayer.cruiser.hitCount +
      inputPlayer.submarine.hitCount +
      inputPlayer.destroyer.hitCount;

    if (totalHP < 17) {
      return false;
    } else {
      return true;
    }
  };

  const resetGame = () => {
    initializePlayer();
    initializeCPU();
  };

  //place ship by clicking on board
  const placeShip = () => {
   
  };

  return {
    placeShip,
    gameOver,
    gameStartCondition,
    initializePlayer,
    player2BoardClick,
    initializeCPU,
    cpuPlayer,
  };
};

// let player1 = newPlayer("Mike", "player");
// player1.playerBoard.createBoard();

// player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);

// player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);

// player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);

// player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);

// // player1.playerBoard.receiveAttack(4, 3);

// // player1.playerBoard.receiveAttack(4, 5);

// // player1.playerBoard.receiveAttack(0, 0);

// // player1.playerBoard.receiveAttack(1, 0);

// // player1.playerBoard.receiveAttack(2, 0);

// // player1.playerBoard.receiveAttack(3, 0);

// // player1.playerBoard.receiveAttack(3, 0);

// console.table(player1.playerBoard.board);
// drawBoard(player1.playerBoard.board, 1);

// console.log(player1.battleship);




/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoard: () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


// create gameboard to track ship position and misses
// gameboard coordinates are Y -> X. We select rows first before columns ALWAYS!!!

const gameBoard = () => {
  let board = [[], [], [], [], [], [], [], [], [], []];

  // should only be ran once to populate the board
  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board[i].push("empty");
      }
    }
    return board;
  };
  // check if coordinates are even on the board
  const validCoordinate = (yCoord, xCoord) => {
    if (yCoord > 9 || yCoord < 0 || xCoord > 9 || xCoord < 0) {
      return false;
    } else {
      return true;
    }
  };

  // check if proposed length is within bounds
  const validateLength = (startCoord, length) => {
    if (startCoord + length > 10) {
      return false;
    } else {
      return true;
    }
  };

  // get the coordinate status
  const coordStatus = (yCoord, xCoord) => {
    return board[yCoord][xCoord];
  };

  const validateSpace = (yCoord, xCoord, length, direction) => {
    let tempArray = [];

    // horizontal
    if (direction == 0 && validateLength(xCoord, length)) {
      for (let i = xCoord; i !== xCoord + length; i++) {
        tempArray.push(board[yCoord][i]);
      }
      // console.log(tempArray);
      return tempArray;
      // vertical
    } else if (direction == 1 && validateLength(yCoord, length)) {
      for (let i = yCoord; i !== yCoord + length; i++) {
        tempArray.push(board[i][xCoord]);
      }
      return tempArray;
    } else {
      throw new Error("Something went wrong");
    }
  };

  const revalidateCoordinateStatus = (proposedCoords) => {
    let isEmpty = true;
    for (let i = 0; i < proposedCoords.length; i++) {
      if (proposedCoords[i] !== "empty") {
        return (isEmpty = false);
      } else {
        isEmpty = true;
      }
    }

    return isEmpty;
  };

  // check if all of the validation conditions are met!
  // this is an incredibly ugly function but should check everything
  const compoundValidation = (shipSize, yCoord, xCoord, direction) => {
    if (validCoordinate(yCoord, xCoord)) {
      // check horizontally
      if (direction === 0) {
        if (validateLength(xCoord, shipSize)) {
          let tempSpace = validateSpace(yCoord, xCoord, shipSize, direction);
          if (revalidateCoordinateStatus(tempSpace)) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
        // check vertically
      } else if (direction === 1) {
        if (validateLength(yCoord, shipSize)) {
          let tempSpace = validateSpace(yCoord, xCoord, shipSize, direction);
          if (revalidateCoordinateStatus(tempSpace)) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  const placeShip = (ship, yCoord, xCoord, direction) => {
    if (compoundValidation(ship.length, yCoord, xCoord, direction)) {
      // let ship = newShip(shipSize);
      if (direction === 0) {
        for (let i = 0; i < ship.length; i++) {
          board[yCoord][xCoord + i] = ship;
        }
        // console.table(board);
        // console.log(board[0][0])
        return board;
      } else {
        for (let i = 0; i < ship.length; i++) {
          board[yCoord + i][xCoord] = ship;
        }
        // console.table(board);
        // console.log(board[0][0])
        return board;
      }
    } else {
      return false
    }
  };

  // receive attack on empty coords should mark map with M
  // target that is hit needs to be marked with X on the map, and obj needs hit + 1
  // after that need to run a check if the ship has been sunk!

  const receiveAttack = (yCoord, xCoord) => {
    if (coordStatus(yCoord, xCoord) == "empty") {
      board[yCoord][xCoord] = "M";
      return board;
    } else if (coordStatus(yCoord, xCoord) == ("M")) {
      console.log("move invalid");
      return false;
    } else if (coordStatus(yCoord, xCoord) == ("X")) {
      console.log("move invalid");
      return false;
    } else {
      board[yCoord][xCoord].hitCount += 1;

      if (board[yCoord][xCoord].isSunk(board[yCoord][xCoord].hitCount)) {
        console.log("Ship has been sunk! " + board[yCoord][xCoord].length);
        console.log(board[yCoord][xCoord].hitCount);
      }

      board[yCoord][xCoord] = "X";
      return board;
    }
  };

  return {
    compoundValidation,
    receiveAttack,
    revalidateCoordinateStatus,
    validateSpace,
    validateLength,
    coordStatus,
    placeShip,
    validCoordinate,
    createBoard,
    board,
  };
};




/***/ }),

/***/ "./src/modules/players.js":
/*!********************************!*\
  !*** ./src/modules/players.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genDirection: () => (/* binding */ genDirection),
/* harmony export */   genXCoord: () => (/* binding */ genXCoord),
/* harmony export */   genYCoord: () => (/* binding */ genYCoord),
/* harmony export */   insertShipRandomCoords: () => (/* binding */ insertShipRandomCoords),
/* harmony export */   newPlayer: () => (/* binding */ newPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


// new players will be created here

const newPlayer = (inputPlayerName, playerType) => {
  const name = inputPlayerName;
  const type = playerType;
  let playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();
  let carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.newShip)(5);
  let battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.newShip)(4);
  let cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.newShip)(3);
  let submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.newShip)(3);
  let destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.newShip)(2);

  return {
    type,
    name,
    playerBoard,
    carrier,
    battleship,
    cruiser,
    submarine,
    destroyer,
  };
};

function genXCoord() {
  let x = Math.floor(Math.random() * 10);

  return x;
}

function genYCoord() {
  let y = Math.floor(Math.random() * 10);
  return y;
}

function genDirection() {
  let direction = Math.floor(Math.random() * 2);
  return direction;
}
// compoundValidation = (shipSize, yCoord, xCoord, direction)
function insertShipRandomCoords(ship, targetPlayerObject) {
  while (true) {
    let xCoord = genXCoord();
    let yCoord = genYCoord();
    let direction = genDirection();

    if (
      targetPlayerObject.compoundValidation(ship.length, yCoord, xCoord, direction) !=
      false
    ) {
      return targetPlayerObject.placeShip(ship, yCoord, xCoord, direction);
    }
  }
}



/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newShip: () => (/* binding */ newShip)
/* harmony export */ });
// factory function for creating a new ship

const newShip = (size) => {
  const length = size;
  let hitCount = 0;

  const isSunk = (currHits) => {
    if (currHits >= length) {
        return true;
    } else {
        return false;
    }
  };



  return {
    length,
    hitCount,
    isSunk,
  };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/players */ "./src/modules/players.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");






// startGame().gameStartCondition();

// let playCPU = document.querySelector('.playCPU');
// playCPU.addEventListener('click', (e) => {
//     startGame().gameStartCondition();
//     playCPU.removeEventListener('click', e);
// });


let test = (0,_modules_game__WEBPACK_IMPORTED_MODULE_4__.startGame)();

// test.initializePlayer();
// test.placeShip();

let testBtn = document.querySelector('.placeP1Ship');
testBtn.addEventListener('click', () => {
    test.gameStartCondition();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sd0JBQXdCLDRDQUE0Qyw4QkFBOEIsZ0NBQWdDLEdBQUcsUUFBUSxrQkFBa0IsOEJBQThCLEdBQUcsdUJBQXVCLGtCQUFrQixtQkFBbUIsR0FBRyx1QkFBdUIsNEJBQTRCLEdBQUcsdUJBQXVCLDZCQUE2QixHQUFHLDRCQUE0QiwrQkFBK0IsR0FBRyxhQUFhLG9CQUFvQixnQkFBZ0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsaUpBQWlKLDhCQUE4QixrQkFBa0IsbUJBQW1CLEdBQUcsOEhBQThILG9CQUFvQixJQUFJLHVCQUF1QjtBQUMxcUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM3RDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IseUJBQXlCLFFBQVE7QUFDakM7QUFDQSx1REFBdUQsRUFBRSxhQUFhLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLDBEQUEwRCxVQUFVLGFBQWEsRUFBRSxhQUFhLEVBQUU7O0FBRWxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxDQUFHLElBQUksQ0FBRztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUIsMERBQTBELFVBQVUsYUFBYSxFQUFFLGFBQWEsRUFBRTs7QUFFbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERVO0FBT3JCO0FBQ3dCOztBQUUzQztBQUNBLGtCQUFrQixtREFBUztBQUMzQixnQkFBZ0IsbURBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGdFQUFzQjtBQUMxQixJQUFJLGdFQUFzQjtBQUMxQixJQUFJLGdFQUFzQjtBQUMxQixJQUFJLGdFQUFzQjtBQUMxQixJQUFJLGdFQUFzQjtBQUMxQixJQUFJLCtDQUFTOztBQUViOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxnRUFBc0I7QUFDMUIsSUFBSSxnRUFBc0I7QUFDMUIsSUFBSSxnRUFBc0I7QUFDMUIsSUFBSSxnRUFBc0I7QUFDMUIsSUFBSSxnRUFBc0I7O0FBRTFCLElBQUksNkNBQU87O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBTztBQUNmO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRCxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVM7QUFDNUIsbUJBQW1CLG1EQUFTOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsVUFBVTtBQUNWLGlCQUFpQiwrQ0FBUztBQUMxQjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEtZOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S21CO0FBQ1A7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFTO0FBQzdCLGdCQUFnQiw4Q0FBTztBQUN2QixtQkFBbUIsOENBQU87QUFDMUIsZ0JBQWdCLDhDQUFPO0FBQ3ZCLGtCQUFrQiw4Q0FBTztBQUN6QixrQkFBa0IsOENBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUY7Ozs7Ozs7Ozs7Ozs7OztBQ3hEakY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7O1VDdkJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMyQjtBQUNpRDtBQUN2RDtBQUNrQzs7QUFFNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSixXQUFXLHdEQUFTOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYHRhYmxlLCB0ciwgdGQsIHRoe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRoIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuXG5bY2xhc3MqPSdjZWxsJ10ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuW2NsYXNzKj1cInNoaXBcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuW2NsYXNzKj1cIm1pc3NcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbltjbGFzcyo9XCJ0YXJnZXRIaXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcbn1cblxuLmJvYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi8qIC5oZWFsdGgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbltjbGFzcyo9XCJjYXJyaWVySFBiYXJcIl0sIFxuW2NsYXNzKj1cIkJTSFBiYXJcIl0sIFxuW2NsYXNzKj1cImNydWlzZXJIUGJhclwiXSwgXG5bY2xhc3MqPVwic3VibWFyaW5lSFBiYXJcIl0sXG5bY2xhc3MqPVwiZGVzdHJveWVySFBiYXJcIl0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuW2NsYXNzPVwiY2FycmllckhQXCJdLCBcbltjbGFzcz1cIkJTSFBcIl0sIFxuW2NsYXNzPVwiY3J1aXNlckhQXCJdLCBcbltjbGFzcz1cInN1Ym1hcmluZUhQXCJdLCBcbltjbGFzcz1cImRlc3Ryb3llckhQXCJdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJsZSwgdHIsIHRkLCB0aHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRoIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG5cXG5bY2xhc3MqPSdjZWxsJ10ge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5bY2xhc3MqPVxcXCJzaGlwXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbltjbGFzcyo9XFxcIm1pc3NcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbltjbGFzcyo9XFxcInRhcmdldEhpdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4vKiAuaGVhbHRoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuW2NsYXNzKj1cXFwiY2FycmllckhQYmFyXFxcIl0sIFxcbltjbGFzcyo9XFxcIkJTSFBiYXJcXFwiXSwgXFxuW2NsYXNzKj1cXFwiY3J1aXNlckhQYmFyXFxcIl0sIFxcbltjbGFzcyo9XFxcInN1Ym1hcmluZUhQYmFyXFxcIl0sXFxuW2NsYXNzKj1cXFwiZGVzdHJveWVySFBiYXJcXFwiXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5bY2xhc3M9XFxcImNhcnJpZXJIUFxcXCJdLCBcXG5bY2xhc3M9XFxcIkJTSFBcXFwiXSwgXFxuW2NsYXNzPVxcXCJjcnVpc2VySFBcXFwiXSwgXFxuW2NsYXNzPVxcXCJzdWJtYXJpbmVIUFxcXCJdLCBcXG5bY2xhc3M9XFxcImRlc3Ryb3llckhQXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gd2UgZG8gZG9tIHN0dWZmIGhlcmVcblxuLy8gY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gKCkgPT4ge1xuLy8gICBjb25zdCBkcmF3Qm9hcmQgPSAoY3VyckJvYXJkKSA9PiB7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4vLyAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbi8vICAgICAgICAgaWYgKGJvYXJkW2ldW2pdICE9IChcImVtcHR5XCIgfHwgXCJNXCIgfHwgXCJYXCIpKSB7XG4vLyAgICAgICAgICAgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2p9XCJdW2RhdGEteT1cIiR7aX1cIl1gKTtcbi8vICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGRyYXdCb2FyZCxcbi8vICAgfTtcbi8vIH07XG4vLyBkcmF3cyBwbGF5ZXIgYm9hcmQgb24gc2NyZWVuXG5mdW5jdGlvbiBkcmF3Qm9hcmQoY3VyckJvYXJkLCBwbGF5ZXJOdW0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCJwbGF5ZXIke3BsYXllck51bX1cIl1bZGF0YS14PVwiJHtqfVwiXVtkYXRhLXk9XCIke2l9XCJdYCk7XG5cbiAgICAgIGlmIChjdXJyQm9hcmRbaV1bal0gPT0gXCJNXCIpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmIChjdXJyQm9hcmRbaV1bal0gPT0gKFwiWFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXRIaXRcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjdXJyQm9hcmRbaV1bal0gIT0gKFwiZW1wdHlcIiB8fCBcIk1cIiB8fCBcIlhcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0NQVShjdXJyQm9hcmQsIHBsYXllck51bSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzKj1cInBsYXllciR7cGxheWVyTnVtfVwiXVtkYXRhLXg9XCIke2p9XCJdW2RhdGEteT1cIiR7aX1cIl1gKTtcblxuICAgICAgaWYgKGN1cnJCb2FyZFtpXVtqXSA9PSBcIk1cIikge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgfSBcbiAgICAgIGVsc2UgaWYgKGN1cnJCb2FyZFtpXVtqXSA9PSAoXCJYXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInRhcmdldEhpdFwiKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFja0hQKCkge1xuICBcbn1cblxuZXhwb3J0IHsgZHJhd0JvYXJkLCBkcmF3Q1BVIH07XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7XG4gIG5ld1BsYXllcixcbiAgZ2VuWENvb3JkLFxuICBnZW5ZQ29vcmQsXG4gIGdlbkRpcmVjdGlvbixcbiAgaW5zZXJ0U2hpcFJhbmRvbUNvb3Jkcyxcbn0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgZHJhd0JvYXJkLCBkcmF3Q1BVIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgbGV0IGNwdVBsYXllciA9IG5ld1BsYXllcihcImNvbXB1dGVyXCIsIFwiQ1BVXCIpO1xuICBsZXQgcGxheWVyMSA9IG5ld1BsYXllcihcIlBsYXllcjFcIiwgXCJwbGF5ZXJcIik7XG4gIGxldCBwMUNvdW50ID0gMDtcbiAgbGV0IHAyQ291bnQgPSAwO1xuXG4gIGNvbnN0IGdhbWVTdGFydENvbmRpdGlvbiA9ICgpID0+IHtcbiAgICBpbml0aWFsaXplUGxheWVyKCk7XG4gICAgaW5pdGlhbGl6ZUNQVSgpO1xuICB9O1xuICAvLyB0ZXN0aW5nIGZvciBwbGF5ZXIgMVxuXG4gIGNvbnN0IGluaXRpYWxpemVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgIGluc2VydFNoaXBSYW5kb21Db29yZHMocGxheWVyMS5jYXJyaWVyLCBwbGF5ZXIxLnBsYXllckJvYXJkKTtcbiAgICBpbnNlcnRTaGlwUmFuZG9tQ29vcmRzKHBsYXllcjEuYmF0dGxlc2hpcCwgcGxheWVyMS5wbGF5ZXJCb2FyZCk7XG4gICAgaW5zZXJ0U2hpcFJhbmRvbUNvb3JkcyhwbGF5ZXIxLnN1Ym1hcmluZSwgcGxheWVyMS5wbGF5ZXJCb2FyZCk7XG4gICAgaW5zZXJ0U2hpcFJhbmRvbUNvb3JkcyhwbGF5ZXIxLmNydWlzZXIsIHBsYXllcjEucGxheWVyQm9hcmQpO1xuICAgIGluc2VydFNoaXBSYW5kb21Db29yZHMocGxheWVyMS5kZXN0cm95ZXIsIHBsYXllcjEucGxheWVyQm9hcmQpO1xuICAgIGRyYXdCb2FyZChwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkLCAxKTtcblxuICB9O1xuXG4gIC8vIFRoaXMgaXMgaG93IHRoZSBnYW1lIHdpbGwgYWx3YXlzIHN0YXJ0IGlmIHRoZSBwbGF5ZXIgd2FudHMgdG8gcGxheSBDUFUuXG5cbiAgY29uc3QgaW5pdGlhbGl6ZUNQVSA9ICgpID0+IHtcbiAgICBjcHVQbGF5ZXIucGxheWVyQm9hcmQuY3JlYXRlQm9hcmQoKTtcblxuICAgIGluc2VydFNoaXBSYW5kb21Db29yZHMoY3B1UGxheWVyLmNhcnJpZXIsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG4gICAgaW5zZXJ0U2hpcFJhbmRvbUNvb3JkcyhjcHVQbGF5ZXIuYmF0dGxlc2hpcCwgY3B1UGxheWVyLnBsYXllckJvYXJkKTtcbiAgICBpbnNlcnRTaGlwUmFuZG9tQ29vcmRzKGNwdVBsYXllci5zdWJtYXJpbmUsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG4gICAgaW5zZXJ0U2hpcFJhbmRvbUNvb3JkcyhjcHVQbGF5ZXIuY3J1aXNlciwgY3B1UGxheWVyLnBsYXllckJvYXJkKTtcbiAgICBpbnNlcnRTaGlwUmFuZG9tQ29vcmRzKGNwdVBsYXllci5kZXN0cm95ZXIsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG5cbiAgICBkcmF3Q1BVKGNwdVBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZCwgMik7XG5cbiAgICBwbGF5ZXIyQm9hcmRDbGljayhjcHVQbGF5ZXIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllcjJCb2FyZENsaWNrID0gKCkgPT4ge1xuICAgIGxldCBwMmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMmJvYXJkXCIpO1xuICAgIHAyYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgbGV0IHhDb29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICBsZXQgeUNvb3JkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQueTtcbiAgICAgIGNvbnNvbGUubG9nKFt4Q29vcmQsIHlDb29yZF0pO1xuXG4gICAgICBpZiAoeENvb3JkICE9IHVuZGVmaW5lZCAmJiB5Q29vcmQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2thYmxlIHRpbGVcIik7XG4gICAgICAgIGNwdVBsYXllci5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHlDb29yZCwgeENvb3JkKTtcbiAgICAgICAgZHJhd0NQVShjcHVQbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQsIDIpO1xuICAgICAgICBwMUNvdW50ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHAxQ291bnQpO1xuXG4gICAgICAgIGlmIChnYW1lT3ZlcihjcHVQbGF5ZXIpID09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoYEdhbWUgb3ZlciAke3BsYXllcjEubmFtZX0gd2luc2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjcHVUdXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFt4Q29vcmQsIHlDb29yZF07XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3B1VHVybiA9ICgpID0+IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHhDb29yZCA9IGdlblhDb29yZCgpO1xuICAgICAgbGV0IHlDb29yZCA9IGdlbllDb29yZCgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeUNvb3JkXVt4Q29vcmRdICE9IFwiWFwiICYmXG4gICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeUNvb3JkXVt4Q29vcmRdICE9IFwiTVwiXG4gICAgICApIHtcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHlDb29yZCwgeENvb3JkKTtcbiAgICAgICAgcDJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhwMkNvdW50KTtcblxuICAgICAgICBpZiAoZ2FtZU92ZXIocGxheWVyMSkgPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBhbGVydChgR2FtZSBvdmVyICR7Y3B1UGxheWVyLm5hbWV9IHdpbnNgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQsIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHAyQ291bnQgPT0gMTAwKSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIk1heCBtb3ZlcyByZWFjaGVkIGJ5IENQVVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAoaW5wdXRQbGF5ZXIpID0+IHtcbiAgICBsZXQgdG90YWxIUCA9XG4gICAgICBpbnB1dFBsYXllci5jYXJyaWVyLmhpdENvdW50ICtcbiAgICAgIGlucHV0UGxheWVyLmJhdHRsZXNoaXAuaGl0Q291bnQgK1xuICAgICAgaW5wdXRQbGF5ZXIuY3J1aXNlci5oaXRDb3VudCArXG4gICAgICBpbnB1dFBsYXllci5zdWJtYXJpbmUuaGl0Q291bnQgK1xuICAgICAgaW5wdXRQbGF5ZXIuZGVzdHJveWVyLmhpdENvdW50O1xuXG4gICAgaWYgKHRvdGFsSFAgPCAxNykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIGluaXRpYWxpemVQbGF5ZXIoKTtcbiAgICBpbml0aWFsaXplQ1BVKCk7XG4gIH07XG5cbiAgLy9wbGFjZSBzaGlwIGJ5IGNsaWNraW5nIG9uIGJvYXJkXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICgpID0+IHtcbiAgIFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGdhbWVPdmVyLFxuICAgIGdhbWVTdGFydENvbmRpdGlvbixcbiAgICBpbml0aWFsaXplUGxheWVyLFxuICAgIHBsYXllcjJCb2FyZENsaWNrLFxuICAgIGluaXRpYWxpemVDUFUsXG4gICAgY3B1UGxheWVyLFxuICB9O1xufTtcblxuLy8gbGV0IHBsYXllcjEgPSBuZXdQbGF5ZXIoXCJNaWtlXCIsIFwicGxheWVyXCIpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5jcmVhdGVCb2FyZCgpO1xuXG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXIxLmNhcnJpZXIsIDUsIDQsIDApO1xuXG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXIxLmJhdHRsZXNoaXAsIDAsIDAsIDEpO1xuXG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXIxLmNydWlzZXIsIDcsIDIsIDApO1xuXG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXIxLmRlc3Ryb3llciwgMywgOCwgMCk7XG5cbi8vIC8vIHBsYXllcjEucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayg0LCAzKTtcblxuLy8gLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDQsIDUpO1xuXG4vLyAvLyBwbGF5ZXIxLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMCk7XG5cbi8vIC8vIHBsYXllcjEucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjaygxLCAwKTtcblxuLy8gLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDIsIDApO1xuXG4vLyAvLyBwbGF5ZXIxLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soMywgMCk7XG5cbi8vIC8vIHBsYXllcjEucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjaygzLCAwKTtcblxuLy8gY29uc29sZS50YWJsZShwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkKTtcbi8vIGRyYXdCb2FyZChwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkLCAxKTtcblxuLy8gY29uc29sZS5sb2cocGxheWVyMS5iYXR0bGVzaGlwKTtcblxuZXhwb3J0IHsgc3RhcnRHYW1lIH07XG4iLCJpbXBvcnQgeyBuZXdTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG4vLyBjcmVhdGUgZ2FtZWJvYXJkIHRvIHRyYWNrIHNoaXAgcG9zaXRpb24gYW5kIG1pc3Nlc1xuLy8gZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIGFyZSBZIC0+IFguIFdlIHNlbGVjdCByb3dzIGZpcnN0IGJlZm9yZSBjb2x1bW5zIEFMV0FZUyEhIVxuXG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG5cbiAgLy8gc2hvdWxkIG9ubHkgYmUgcmFuIG9uY2UgdG8gcG9wdWxhdGUgdGhlIGJvYXJkXG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goXCJlbXB0eVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuICAvLyBjaGVjayBpZiBjb29yZGluYXRlcyBhcmUgZXZlbiBvbiB0aGUgYm9hcmRcbiAgY29uc3QgdmFsaWRDb29yZGluYXRlID0gKHlDb29yZCwgeENvb3JkKSA9PiB7XG4gICAgaWYgKHlDb29yZCA+IDkgfHwgeUNvb3JkIDwgMCB8fCB4Q29vcmQgPiA5IHx8IHhDb29yZCA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNoZWNrIGlmIHByb3Bvc2VkIGxlbmd0aCBpcyB3aXRoaW4gYm91bmRzXG4gIGNvbnN0IHZhbGlkYXRlTGVuZ3RoID0gKHN0YXJ0Q29vcmQsIGxlbmd0aCkgPT4ge1xuICAgIGlmIChzdGFydENvb3JkICsgbGVuZ3RoID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIGdldCB0aGUgY29vcmRpbmF0ZSBzdGF0dXNcbiAgY29uc3QgY29vcmRTdGF0dXMgPSAoeUNvb3JkLCB4Q29vcmQpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeUNvb3JkXVt4Q29vcmRdO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlU3BhY2UgPSAoeUNvb3JkLCB4Q29vcmQsIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgbGV0IHRlbXBBcnJheSA9IFtdO1xuXG4gICAgLy8gaG9yaXpvbnRhbFxuICAgIGlmIChkaXJlY3Rpb24gPT0gMCAmJiB2YWxpZGF0ZUxlbmd0aCh4Q29vcmQsIGxlbmd0aCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgIT09IHhDb29yZCArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBBcnJheS5wdXNoKGJvYXJkW3lDb29yZF1baV0pO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGVtcEFycmF5KTtcbiAgICAgIHJldHVybiB0ZW1wQXJyYXk7XG4gICAgICAvLyB2ZXJ0aWNhbFxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDEgJiYgdmFsaWRhdGVMZW5ndGgoeUNvb3JkLCBsZW5ndGgpKSB7XG4gICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpICE9PSB5Q29vcmQgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wQXJyYXkucHVzaChib2FyZFtpXVt4Q29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wQXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXZhbGlkYXRlQ29vcmRpbmF0ZVN0YXR1cyA9IChwcm9wb3NlZENvb3JkcykgPT4ge1xuICAgIGxldCBpc0VtcHR5ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3Bvc2VkQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcG9zZWRDb29yZHNbaV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICByZXR1cm4gKGlzRW1wdHkgPSBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0VtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbXB0eTtcbiAgfTtcblxuICAvLyBjaGVjayBpZiBhbGwgb2YgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9ucyBhcmUgbWV0IVxuICAvLyB0aGlzIGlzIGFuIGluY3JlZGlibHkgdWdseSBmdW5jdGlvbiBidXQgc2hvdWxkIGNoZWNrIGV2ZXJ5dGhpbmdcbiAgY29uc3QgY29tcG91bmRWYWxpZGF0aW9uID0gKHNoaXBTaXplLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKHZhbGlkQ29vcmRpbmF0ZSh5Q29vcmQsIHhDb29yZCkpIHtcbiAgICAgIC8vIGNoZWNrIGhvcml6b250YWxseVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICBpZiAodmFsaWRhdGVMZW5ndGgoeENvb3JkLCBzaGlwU2l6ZSkpIHtcbiAgICAgICAgICBsZXQgdGVtcFNwYWNlID0gdmFsaWRhdGVTcGFjZSh5Q29vcmQsIHhDb29yZCwgc2hpcFNpemUsIGRpcmVjdGlvbik7XG4gICAgICAgICAgaWYgKHJldmFsaWRhdGVDb29yZGluYXRlU3RhdHVzKHRlbXBTcGFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayB2ZXJ0aWNhbGx5XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICBpZiAodmFsaWRhdGVMZW5ndGgoeUNvb3JkLCBzaGlwU2l6ZSkpIHtcbiAgICAgICAgICBsZXQgdGVtcFNwYWNlID0gdmFsaWRhdGVTcGFjZSh5Q29vcmQsIHhDb29yZCwgc2hpcFNpemUsIGRpcmVjdGlvbik7XG4gICAgICAgICAgaWYgKHJldmFsaWRhdGVDb29yZGluYXRlU3RhdHVzKHRlbXBTcGFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKGNvbXBvdW5kVmFsaWRhdGlvbihzaGlwLmxlbmd0aCwgeUNvb3JkLCB4Q29vcmQsIGRpcmVjdGlvbikpIHtcbiAgICAgIC8vIGxldCBzaGlwID0gbmV3U2hpcChzaGlwU2l6ZSk7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3lDb29yZF1beENvb3JkICsgaV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoYm9hcmQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhib2FyZFswXVswXSlcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeUNvb3JkICsgaV1beENvb3JkXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS50YWJsZShib2FyZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJvYXJkWzBdWzBdKVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICAvLyByZWNlaXZlIGF0dGFjayBvbiBlbXB0eSBjb29yZHMgc2hvdWxkIG1hcmsgbWFwIHdpdGggTVxuICAvLyB0YXJnZXQgdGhhdCBpcyBoaXQgbmVlZHMgdG8gYmUgbWFya2VkIHdpdGggWCBvbiB0aGUgbWFwLCBhbmQgb2JqIG5lZWRzIGhpdCArIDFcbiAgLy8gYWZ0ZXIgdGhhdCBuZWVkIHRvIHJ1biBhIGNoZWNrIGlmIHRoZSBzaGlwIGhhcyBiZWVuIHN1bmshXG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh5Q29vcmQsIHhDb29yZCkgPT4ge1xuICAgIGlmIChjb29yZFN0YXR1cyh5Q29vcmQsIHhDb29yZCkgPT0gXCJlbXB0eVwiKSB7XG4gICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0gPSBcIk1cIjtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9IGVsc2UgaWYgKGNvb3JkU3RhdHVzKHlDb29yZCwgeENvb3JkKSA9PSAoXCJNXCIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmUgaW52YWxpZFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNvb3JkU3RhdHVzKHlDb29yZCwgeENvb3JkKSA9PSAoXCJYXCIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmUgaW52YWxpZFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmhpdENvdW50ICs9IDE7XG5cbiAgICAgIGlmIChib2FyZFt5Q29vcmRdW3hDb29yZF0uaXNTdW5rKGJvYXJkW3lDb29yZF1beENvb3JkXS5oaXRDb3VudCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaGlwIGhhcyBiZWVuIHN1bmshIFwiICsgYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkW3lDb29yZF1beENvb3JkXS5oaXRDb3VudCk7XG4gICAgICB9XG5cbiAgICAgIGJvYXJkW3lDb29yZF1beENvb3JkXSA9IFwiWFwiO1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbXBvdW5kVmFsaWRhdGlvbixcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJldmFsaWRhdGVDb29yZGluYXRlU3RhdHVzLFxuICAgIHZhbGlkYXRlU3BhY2UsXG4gICAgdmFsaWRhdGVMZW5ndGgsXG4gICAgY29vcmRTdGF0dXMsXG4gICAgcGxhY2VTaGlwLFxuICAgIHZhbGlkQ29vcmRpbmF0ZSxcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBib2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVCb2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBuZXdTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuLy8gbmV3IHBsYXllcnMgd2lsbCBiZSBjcmVhdGVkIGhlcmVcblxuY29uc3QgbmV3UGxheWVyID0gKGlucHV0UGxheWVyTmFtZSwgcGxheWVyVHlwZSkgPT4ge1xuICBjb25zdCBuYW1lID0gaW5wdXRQbGF5ZXJOYW1lO1xuICBjb25zdCB0eXBlID0gcGxheWVyVHlwZTtcbiAgbGV0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIGxldCBjYXJyaWVyID0gbmV3U2hpcCg1KTtcbiAgbGV0IGJhdHRsZXNoaXAgPSBuZXdTaGlwKDQpO1xuICBsZXQgY3J1aXNlciA9IG5ld1NoaXAoMyk7XG4gIGxldCBzdWJtYXJpbmUgPSBuZXdTaGlwKDMpO1xuICBsZXQgZGVzdHJveWVyID0gbmV3U2hpcCgyKTtcblxuICByZXR1cm4ge1xuICAgIHR5cGUsXG4gICAgbmFtZSxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjYXJyaWVyLFxuICAgIGJhdHRsZXNoaXAsXG4gICAgY3J1aXNlcixcbiAgICBzdWJtYXJpbmUsXG4gICAgZGVzdHJveWVyLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2VuWENvb3JkKCkge1xuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gZ2VuWUNvb3JkKCkge1xuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgcmV0dXJuIHk7XG59XG5cbmZ1bmN0aW9uIGdlbkRpcmVjdGlvbigpIHtcbiAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICByZXR1cm4gZGlyZWN0aW9uO1xufVxuLy8gY29tcG91bmRWYWxpZGF0aW9uID0gKHNoaXBTaXplLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKVxuZnVuY3Rpb24gaW5zZXJ0U2hpcFJhbmRvbUNvb3JkcyhzaGlwLCB0YXJnZXRQbGF5ZXJPYmplY3QpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgeENvb3JkID0gZ2VuWENvb3JkKCk7XG4gICAgbGV0IHlDb29yZCA9IGdlbllDb29yZCgpO1xuICAgIGxldCBkaXJlY3Rpb24gPSBnZW5EaXJlY3Rpb24oKTtcblxuICAgIGlmIChcbiAgICAgIHRhcmdldFBsYXllck9iamVjdC5jb21wb3VuZFZhbGlkYXRpb24oc2hpcC5sZW5ndGgsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pICE9XG4gICAgICBmYWxzZVxuICAgICkge1xuICAgICAgcmV0dXJuIHRhcmdldFBsYXllck9iamVjdC5wbGFjZVNoaXAoc2hpcCwgeUNvb3JkLCB4Q29vcmQsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG59XG5leHBvcnQgeyBnZW5EaXJlY3Rpb24sIG5ld1BsYXllciwgZ2VuWENvb3JkLCBnZW5ZQ29vcmQsIGluc2VydFNoaXBSYW5kb21Db29yZHMgfTtcbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IHNoaXBcblxuY29uc3QgbmV3U2hpcCA9IChzaXplKSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IHNpemU7XG4gIGxldCBoaXRDb3VudCA9IDA7XG5cbiAgY29uc3QgaXNTdW5rID0gKGN1cnJIaXRzKSA9PiB7XG4gICAgaWYgKGN1cnJIaXRzID49IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG5cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRDb3VudCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgeyBuZXdTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IG5ld1BsYXllciwgZ2VuWENvb3JkLCBnZW5ZQ29vcmQsIGdlbkRpcmVjdGlvbiwgaW5zZXJ0Q1BVc2hpcCB9IGZyb20gXCIuL21vZHVsZXMvcGxheWVyc1wiO1xuaW1wb3J0IHsgZHJhd0JvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9kb21cIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSwgcGxheWVyMkJvYXJkQ2xpY2ssIHBsYXllcjJib2FyZCB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZVwiO1xuXG4vLyBzdGFydEdhbWUoKS5nYW1lU3RhcnRDb25kaXRpb24oKTtcblxuLy8gbGV0IHBsYXlDUFUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheUNQVScpO1xuLy8gcGxheUNQVS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgc3RhcnRHYW1lKCkuZ2FtZVN0YXJ0Q29uZGl0aW9uKCk7XG4vLyAgICAgcGxheUNQVS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGUpO1xuLy8gfSk7XG5cblxubGV0IHRlc3QgPSBzdGFydEdhbWUoKTtcblxuLy8gdGVzdC5pbml0aWFsaXplUGxheWVyKCk7XG4vLyB0ZXN0LnBsYWNlU2hpcCgpO1xuXG5sZXQgdGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZVAxU2hpcCcpO1xudGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0ZXN0LmdhbWVTdGFydENvbmRpdGlvbigpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=