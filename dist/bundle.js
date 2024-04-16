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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;;AAGA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["table, tr, td, th{\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\nth {\n    width: 32px;\n    background-color: beige;\n}\n\n\n[class*='cell'] {\n    width: 32px;\n    height: 32px;\n}\n\n[class*=\"ship\"] {\n    background-color: red;\n}\n\n[class*=\"miss\"] {\n    background-color: blue;\n}\n\n[class*=\"targetHit\"] {\n    background-color: violet;\n}"],"sourceRoot":""}]);
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
/* harmony export */   drawBoard: () => (/* binding */ drawBoard)
/* harmony export */ });
// we do dom stuff here

const domManipulation = () => {
  const drawBoard = (currBoard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] != ("empty" || 0 || 0)) {
          cell = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);
          cell.classList.add("ship");
        }
      }
    }
  };
  return {
    drawBoard,
  };
};

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
/* harmony export */   insertCPUship: () => (/* binding */ insertCPUship),
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
function insertCPUship(ship, cpuPlayerObj) {
  while (true) {
    let xCoord = genXCoord();
    let yCoord = genYCoord();
    let direction = genDirection();

    if (
      cpuPlayerObj.compoundValidation(ship.length, yCoord, xCoord, direction) !=
      false
    ) {
      return cpuPlayerObj.placeShip(ship, yCoord, xCoord, direction);
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






// This is how the game will always start if the player wants to play CPU.
let cpuPlayer = (0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.newPlayer)('computer', 'CPU');
cpuPlayer.playerBoard.createBoard();

(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.carrier, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.battleship, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.submarine, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.cruiser, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.destroyer, cpuPlayer.playerBoard);


(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.drawBoard)(cpuPlayer.playerBoard.board, 2);


let player1 = (0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.newPlayer)('Mike', 'player');
player1.playerBoard.createBoard();

player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);

player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);

player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);

player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);

// player1.playerBoard.receiveAttack(4, 3);

// player1.playerBoard.receiveAttack(4, 5);

// player1.playerBoard.receiveAttack(0, 0);

// player1.playerBoard.receiveAttack(1, 0);

// player1.playerBoard.receiveAttack(2, 0);

// player1.playerBoard.receiveAttack(3, 0);

// player1.playerBoard.receiveAttack(3, 0);


console.table(player1.playerBoard.board);
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.drawBoard)(player1.playerBoard.board, 1);

console.log(player1.battleship);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7VUN2Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkI7QUFDaUQ7QUFDdkQ7OztBQUcxQztBQUNBLGdCQUFnQiwyREFBUztBQUN6Qjs7QUFFQSwrREFBYTtBQUNiLCtEQUFhO0FBQ2IsK0RBQWE7QUFDYiwrREFBYTtBQUNiLCtEQUFhOzs7QUFHYix1REFBUzs7O0FBR1QsY0FBYywyREFBUztBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSx1REFBUzs7QUFFVCxnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYHRhYmxlLCB0ciwgdGQsIHRoe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRoIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuXG5bY2xhc3MqPSdjZWxsJ10ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuW2NsYXNzKj1cInNoaXBcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuW2NsYXNzKj1cIm1pc3NcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbltjbGFzcyo9XCJ0YXJnZXRIaXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJsZSwgdHIsIHRkLCB0aHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRoIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG5cXG5bY2xhc3MqPSdjZWxsJ10ge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5bY2xhc3MqPVxcXCJzaGlwXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbltjbGFzcyo9XFxcIm1pc3NcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbltjbGFzcyo9XFxcInRhcmdldEhpdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gd2UgZG8gZG9tIHN0dWZmIGhlcmVcblxuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBkcmF3Qm9hcmQgPSAoY3VyckJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdICE9IChcImVtcHR5XCIgfHwgXCJNXCIgfHwgXCJYXCIpKSB7XG4gICAgICAgICAgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2p9XCJdW2RhdGEteT1cIiR7aX1cIl1gKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGRyYXdCb2FyZCxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGRyYXdCb2FyZChjdXJyQm9hcmQsIHBsYXllck51bSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzKj1cInBsYXllciR7cGxheWVyTnVtfVwiXVtkYXRhLXg9XCIke2p9XCJdW2RhdGEteT1cIiR7aX1cIl1gKTtcblxuICAgICAgaWYgKGN1cnJCb2FyZFtpXVtqXSA9PSBcIk1cIikge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgfSBcbiAgICAgIGVsc2UgaWYgKGN1cnJCb2FyZFtpXVtqXSA9PSAoXCJYXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInRhcmdldEhpdFwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGN1cnJCb2FyZFtpXVtqXSAhPSAoXCJlbXB0eVwiIHx8IFwiTVwiIHx8IFwiWFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBkcmF3Qm9hcmQgfTtcbiIsImltcG9ydCB7IG5ld1NoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbi8vIGNyZWF0ZSBnYW1lYm9hcmQgdG8gdHJhY2sgc2hpcCBwb3NpdGlvbiBhbmQgbWlzc2VzXG4vLyBnYW1lYm9hcmQgY29vcmRpbmF0ZXMgYXJlIFkgLT4gWC4gV2Ugc2VsZWN0IHJvd3MgZmlyc3QgYmVmb3JlIGNvbHVtbnMgQUxXQVlTISEhXG5cbmNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcblxuICAvLyBzaG91bGQgb25seSBiZSByYW4gb25jZSB0byBwb3B1bGF0ZSB0aGUgYm9hcmRcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChcImVtcHR5XCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG4gIC8vIGNoZWNrIGlmIGNvb3JkaW5hdGVzIGFyZSBldmVuIG9uIHRoZSBib2FyZFxuICBjb25zdCB2YWxpZENvb3JkaW5hdGUgPSAoeUNvb3JkLCB4Q29vcmQpID0+IHtcbiAgICBpZiAoeUNvb3JkID4gOSB8fCB5Q29vcmQgPCAwIHx8IHhDb29yZCA+IDkgfHwgeENvb3JkIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY2hlY2sgaWYgcHJvcG9zZWQgbGVuZ3RoIGlzIHdpdGhpbiBib3VuZHNcbiAgY29uc3QgdmFsaWRhdGVMZW5ndGggPSAoc3RhcnRDb29yZCwgbGVuZ3RoKSA9PiB7XG4gICAgaWYgKHN0YXJ0Q29vcmQgKyBsZW5ndGggPiAxMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gZ2V0IHRoZSBjb29yZGluYXRlIHN0YXR1c1xuICBjb25zdCBjb29yZFN0YXR1cyA9ICh5Q29vcmQsIHhDb29yZCkgPT4ge1xuICAgIHJldHVybiBib2FyZFt5Q29vcmRdW3hDb29yZF07XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVTcGFjZSA9ICh5Q29vcmQsIHhDb29yZCwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgdGVtcEFycmF5ID0gW107XG5cbiAgICAvLyBob3Jpem9udGFsXG4gICAgaWYgKGRpcmVjdGlvbiA9PSAwICYmIHZhbGlkYXRlTGVuZ3RoKHhDb29yZCwgbGVuZ3RoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IHhDb29yZDsgaSAhPT0geENvb3JkICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcEFycmF5LnB1c2goYm9hcmRbeUNvb3JkXVtpXSk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wQXJyYXkpO1xuICAgICAgcmV0dXJuIHRlbXBBcnJheTtcbiAgICAgIC8vIHZlcnRpY2FsXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSAmJiB2YWxpZGF0ZUxlbmd0aCh5Q29vcmQsIGxlbmd0aCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgIT09IHlDb29yZCArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBBcnJheS5wdXNoKGJvYXJkW2ldW3hDb29yZF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBBcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJldmFsaWRhdGVDb29yZGluYXRlU3RhdHVzID0gKHByb3Bvc2VkQ29vcmRzKSA9PiB7XG4gICAgbGV0IGlzRW1wdHkgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcG9zZWRDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wb3NlZENvb3Jkc1tpXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIHJldHVybiAoaXNFbXB0eSA9IGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc0VtcHR5O1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIGFsbCBvZiB0aGUgdmFsaWRhdGlvbiBjb25kaXRpb25zIGFyZSBtZXQhXG4gIC8vIHRoaXMgaXMgYW4gaW5jcmVkaWJseSB1Z2x5IGZ1bmN0aW9uIGJ1dCBzaG91bGQgY2hlY2sgZXZlcnl0aGluZ1xuICBjb25zdCBjb21wb3VuZFZhbGlkYXRpb24gPSAoc2hpcFNpemUsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAodmFsaWRDb29yZGluYXRlKHlDb29yZCwgeENvb3JkKSkge1xuICAgICAgLy8gY2hlY2sgaG9yaXpvbnRhbGx5XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZUxlbmd0aCh4Q29vcmQsIHNoaXBTaXplKSkge1xuICAgICAgICAgIGxldCB0ZW1wU3BhY2UgPSB2YWxpZGF0ZVNwYWNlKHlDb29yZCwgeENvb3JkLCBzaGlwU2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBpZiAocmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXModGVtcFNwYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHZlcnRpY2FsbHlcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZUxlbmd0aCh5Q29vcmQsIHNoaXBTaXplKSkge1xuICAgICAgICAgIGxldCB0ZW1wU3BhY2UgPSB2YWxpZGF0ZVNwYWNlKHlDb29yZCwgeENvb3JkLCBzaGlwU2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBpZiAocmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXModGVtcFNwYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoY29tcG91bmRWYWxpZGF0aW9uKHNoaXAubGVuZ3RoLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKSkge1xuICAgICAgLy8gbGV0IHNoaXAgPSBuZXdTaGlwKHNoaXBTaXplKTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmQgKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS50YWJsZShib2FyZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJvYXJkWzBdWzBdKVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt5Q29vcmQgKyBpXVt4Q29vcmRdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKGJvYXJkKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYm9hcmRbMF1bMF0pXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIC8vIHJlY2VpdmUgYXR0YWNrIG9uIGVtcHR5IGNvb3JkcyBzaG91bGQgbWFyayBtYXAgd2l0aCBNXG4gIC8vIHRhcmdldCB0aGF0IGlzIGhpdCBuZWVkcyB0byBiZSBtYXJrZWQgd2l0aCBYIG9uIHRoZSBtYXAsIGFuZCBvYmogbmVlZHMgaGl0ICsgMVxuICAvLyBhZnRlciB0aGF0IG5lZWQgdG8gcnVuIGEgY2hlY2sgaWYgdGhlIHNoaXAgaGFzIGJlZW4gc3VuayFcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHlDb29yZCwgeENvb3JkKSA9PiB7XG4gICAgaWYgKGNvb3JkU3RhdHVzKHlDb29yZCwgeENvb3JkKSA9PSBcImVtcHR5XCIpIHtcbiAgICAgIGJvYXJkW3lDb29yZF1beENvb3JkXSA9IFwiTVwiO1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0gZWxzZSBpZiAoY29vcmRTdGF0dXMoeUNvb3JkLCB4Q29vcmQpID09IChcIk1cIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY29vcmRTdGF0dXMoeUNvb3JkLCB4Q29vcmQpID09IChcIlhcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0uaGl0Q291bnQgKz0gMTtcblxuICAgICAgaWYgKGJvYXJkW3lDb29yZF1beENvb3JkXS5pc1N1bmsoYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmhpdENvdW50KSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNoaXAgaGFzIGJlZW4gc3VuayEgXCIgKyBib2FyZFt5Q29vcmRdW3hDb29yZF0ubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmhpdENvdW50KTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdID0gXCJYXCI7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29tcG91bmRWYWxpZGF0aW9uLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXMsXG4gICAgdmFsaWRhdGVTcGFjZSxcbiAgICB2YWxpZGF0ZUxlbmd0aCxcbiAgICBjb29yZFN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgdmFsaWRDb29yZGluYXRlLFxuICAgIGNyZWF0ZUJvYXJkLFxuICAgIGJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IG5ld1NoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG4vLyBuZXcgcGxheWVycyB3aWxsIGJlIGNyZWF0ZWQgaGVyZVxuXG5jb25zdCBuZXdQbGF5ZXIgPSAoaW5wdXRQbGF5ZXJOYW1lLCBwbGF5ZXJUeXBlKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBpbnB1dFBsYXllck5hbWU7XG4gIGNvbnN0IHR5cGUgPSBwbGF5ZXJUeXBlO1xuICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgbGV0IGNhcnJpZXIgPSBuZXdTaGlwKDUpO1xuICBsZXQgYmF0dGxlc2hpcCA9IG5ld1NoaXAoNCk7XG4gIGxldCBjcnVpc2VyID0gbmV3U2hpcCgzKTtcbiAgbGV0IHN1Ym1hcmluZSA9IG5ld1NoaXAoMyk7XG4gIGxldCBkZXN0cm95ZXIgPSBuZXdTaGlwKDIpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBuYW1lLFxuICAgIHBsYXllckJvYXJkLFxuICAgIGNhcnJpZXIsXG4gICAgYmF0dGxlc2hpcCxcbiAgICBjcnVpc2VyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBkZXN0cm95ZXIsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZW5YQ29vcmQoKSB7XG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiBnZW5ZQ29vcmQoKSB7XG4gIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4geTtcbn1cblxuZnVuY3Rpb24gZ2VuRGlyZWN0aW9uKCkge1xuICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gIHJldHVybiBkaXJlY3Rpb247XG59XG4vLyBjb21wb3VuZFZhbGlkYXRpb24gPSAoc2hpcFNpemUsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pXG5mdW5jdGlvbiBpbnNlcnRDUFVzaGlwKHNoaXAsIGNwdVBsYXllck9iaikge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGxldCB4Q29vcmQgPSBnZW5YQ29vcmQoKTtcbiAgICBsZXQgeUNvb3JkID0gZ2VuWUNvb3JkKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGdlbkRpcmVjdGlvbigpO1xuXG4gICAgaWYgKFxuICAgICAgY3B1UGxheWVyT2JqLmNvbXBvdW5kVmFsaWRhdGlvbihzaGlwLmxlbmd0aCwgeUNvb3JkLCB4Q29vcmQsIGRpcmVjdGlvbikgIT1cbiAgICAgIGZhbHNlXG4gICAgKSB7XG4gICAgICByZXR1cm4gY3B1UGxheWVyT2JqLnBsYWNlU2hpcChzaGlwLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IGdlbkRpcmVjdGlvbiwgbmV3UGxheWVyLCBnZW5YQ29vcmQsIGdlbllDb29yZCwgaW5zZXJ0Q1BVc2hpcCB9O1xuIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgc2hpcFxuXG5jb25zdCBuZXdTaGlwID0gKHNpemUpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2l6ZTtcbiAgbGV0IGhpdENvdW50ID0gMDtcblxuICBjb25zdCBpc1N1bmsgPSAoY3VyckhpdHMpID0+IHtcbiAgICBpZiAoY3VyckhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cblxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdENvdW50LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG5ld1NoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgbmV3UGxheWVyLCBnZW5YQ29vcmQsIGdlbllDb29yZCwgZ2VuRGlyZWN0aW9uLCBpbnNlcnRDUFVzaGlwIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBkcmF3Qm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuXG5cbi8vIFRoaXMgaXMgaG93IHRoZSBnYW1lIHdpbGwgYWx3YXlzIHN0YXJ0IGlmIHRoZSBwbGF5ZXIgd2FudHMgdG8gcGxheSBDUFUuXG5sZXQgY3B1UGxheWVyID0gbmV3UGxheWVyKCdjb21wdXRlcicsICdDUFUnKTtcbmNwdVBsYXllci5wbGF5ZXJCb2FyZC5jcmVhdGVCb2FyZCgpO1xuXG5pbnNlcnRDUFVzaGlwKGNwdVBsYXllci5jYXJyaWVyLCBjcHVQbGF5ZXIucGxheWVyQm9hcmQpO1xuaW5zZXJ0Q1BVc2hpcChjcHVQbGF5ZXIuYmF0dGxlc2hpcCwgY3B1UGxheWVyLnBsYXllckJvYXJkKTtcbmluc2VydENQVXNoaXAoY3B1UGxheWVyLnN1Ym1hcmluZSwgY3B1UGxheWVyLnBsYXllckJvYXJkKTtcbmluc2VydENQVXNoaXAoY3B1UGxheWVyLmNydWlzZXIsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG5pbnNlcnRDUFVzaGlwKGNwdVBsYXllci5kZXN0cm95ZXIsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG5cblxuZHJhd0JvYXJkKGNwdVBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZCwgMik7XG5cblxubGV0IHBsYXllcjEgPSBuZXdQbGF5ZXIoJ01pa2UnLCAncGxheWVyJyk7XG5wbGF5ZXIxLnBsYXllckJvYXJkLmNyZWF0ZUJvYXJkKCk7XG5cbnBsYXllcjEucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllcjEuY2FycmllciwgNSwgNCwgMCk7XG5cbnBsYXllcjEucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllcjEuYmF0dGxlc2hpcCwgMCwgMCwgMSk7XG5cbnBsYXllcjEucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllcjEuY3J1aXNlciwgNywgMiwgMCk7XG5cbnBsYXllcjEucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllcjEuZGVzdHJveWVyLCAzLCA4LCAwKTtcblxuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDQsIDMpO1xuXG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soNCwgNSk7XG5cbi8vIHBsYXllcjEucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjaygwLCAwKTtcblxuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDEsIDApO1xuXG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soMiwgMCk7XG5cbi8vIHBsYXllcjEucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjaygzLCAwKTtcblxuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDMsIDApO1xuXG5cbmNvbnNvbGUudGFibGUocGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZCk7XG5kcmF3Qm9hcmQocGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZCwgMSk7XG5cbmNvbnNvbGUubG9nKHBsYXllcjEuYmF0dGxlc2hpcCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9