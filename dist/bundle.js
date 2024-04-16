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

function drawBoard(currBoard) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);

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
    console.log(proposedCoords);
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







let cpuPlayer = (0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.newPlayer)('computer', 'CPU');
cpuPlayer.playerBoard.createBoard();

(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.carrier, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.battleship, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.submarine, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.cruiser, cpuPlayer.playerBoard);
(0,_modules_players__WEBPACK_IMPORTED_MODULE_2__.insertCPUship)(cpuPlayer.destroyer, cpuPlayer.playerBoard);
// compoundValidation = (shipSize, yCoord, xCoord, direction)

// console.log(cpuPlayer.playerBoard.compoundValidation(5, -1, 1, 1))

// if (cpuPlayer.playerBoard.placeShip(cpuPlayer.carrier, genYCoord(), genXCoord(), genDirection()) == false){
//     console.log('fail');
// } else {
//     console.log('no fail');
// }





(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.drawBoard)(cpuPlayer.playerBoard.board);
// let player1 = newPlayer('Mike', 'player');
// player1.playerBoard.createBoard();

// player1.playerBoard.placeShip(player1.carrier, 5, 4, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.placeShip(player1.battleship, 0, 0, 1);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.placeShip(player1.cruiser, 7, 2, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.placeShip(player1.destroyer, 3, 8, 0);

// player1.playerBoard.receiveAttack(4, 3);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(4, 5);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(0, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(1, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(2, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(3, 0);
// drawBoard(player1.playerBoard.board);
// player1.playerBoard.receiveAttack(3, 0);
// drawBoard(player1.playerBoard.board);

// console.table(player1.playerBoard.board);
// drawBoard(player1.playerBoard.board);

// console.log(player1.battleship);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7O1VDdkJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ2lEO0FBQ3ZEOzs7O0FBSTFDLGdCQUFnQiwyREFBUztBQUN6Qjs7QUFFQSwrREFBYTtBQUNiLCtEQUFhO0FBQ2IsK0RBQWE7QUFDYiwrREFBYTtBQUNiLCtEQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7QUFNQSx1REFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9tb2R1bGVzL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgdGFibGUsIHRyLCB0ZCwgdGh7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG5cbltjbGFzcyo9J2NlbGwnXSB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuXG5bY2xhc3MqPVwic2hpcFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5bY2xhc3MqPVwibWlzc1wiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuW2NsYXNzKj1cInRhcmdldEhpdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmxlLCB0ciwgdGQsIHRoe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxudGgge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxufVxcblxcblxcbltjbGFzcyo9J2NlbGwnXSB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbltjbGFzcyo9XFxcInNoaXBcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuW2NsYXNzKj1cXFwibWlzc1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuW2NsYXNzKj1cXFwidGFyZ2V0SGl0XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyB3ZSBkbyBkb20gc3R1ZmYgaGVyZVxuXG5jb25zdCBkb21NYW5pcHVsYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGRyYXdCb2FyZCA9IChjdXJyQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gIT0gKFwiZW1wdHlcIiB8fCBcIk1cIiB8fCBcIlhcIikpIHtcbiAgICAgICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7an1cIl1bZGF0YS15PVwiJHtpfVwiXWApO1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZHJhd0JvYXJkKGN1cnJCb2FyZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7an1cIl1bZGF0YS15PVwiJHtpfVwiXWApO1xuXG4gICAgICBpZiAoY3VyckJvYXJkW2ldW2pdID09IFwiTVwiKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICB9IFxuICAgICAgZWxzZSBpZiAoY3VyckJvYXJkW2ldW2pdID09IChcIlhcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0SGl0XCIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY3VyckJvYXJkW2ldW2pdICE9IChcImVtcHR5XCIgfHwgXCJNXCIgfHwgXCJYXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGRyYXdCb2FyZCB9O1xuIiwiaW1wb3J0IHsgbmV3U2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuLy8gY3JlYXRlIGdhbWVib2FyZCB0byB0cmFjayBzaGlwIHBvc2l0aW9uIGFuZCBtaXNzZXNcbi8vIGdhbWVib2FyZCBjb29yZGluYXRlcyBhcmUgWSAtPiBYLiBXZSBzZWxlY3Qgcm93cyBmaXJzdCBiZWZvcmUgY29sdW1ucyBBTFdBWVMhISFcblxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuXG4gIC8vIHNob3VsZCBvbmx5IGJlIHJhbiBvbmNlIHRvIHBvcHVsYXRlIHRoZSBib2FyZFxuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKFwiZW1wdHlcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcbiAgLy8gY2hlY2sgaWYgY29vcmRpbmF0ZXMgYXJlIGV2ZW4gb24gdGhlIGJvYXJkXG4gIGNvbnN0IHZhbGlkQ29vcmRpbmF0ZSA9ICh5Q29vcmQsIHhDb29yZCkgPT4ge1xuICAgIGlmICh5Q29vcmQgPiA5IHx8IHlDb29yZCA8IDAgfHwgeENvb3JkID4gOSB8fCB4Q29vcmQgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBjaGVjayBpZiBwcm9wb3NlZCBsZW5ndGggaXMgd2l0aGluIGJvdW5kc1xuICBjb25zdCB2YWxpZGF0ZUxlbmd0aCA9IChzdGFydENvb3JkLCBsZW5ndGgpID0+IHtcbiAgICBpZiAoc3RhcnRDb29yZCArIGxlbmd0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXQgdGhlIGNvb3JkaW5hdGUgc3RhdHVzXG4gIGNvbnN0IGNvb3JkU3RhdHVzID0gKHlDb29yZCwgeENvb3JkKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3lDb29yZF1beENvb3JkXTtcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZVNwYWNlID0gKHlDb29yZCwgeENvb3JkLCBsZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGxldCB0ZW1wQXJyYXkgPSBbXTtcblxuICAgIC8vIGhvcml6b250YWxcbiAgICBpZiAoZGlyZWN0aW9uID09IDAgJiYgdmFsaWRhdGVMZW5ndGgoeENvb3JkLCBsZW5ndGgpKSB7XG4gICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpICE9PSB4Q29vcmQgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wQXJyYXkucHVzaChib2FyZFt5Q29vcmRdW2ldKTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRlbXBBcnJheSk7XG4gICAgICByZXR1cm4gdGVtcEFycmF5O1xuICAgICAgLy8gdmVydGljYWxcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxICYmIHZhbGlkYXRlTGVuZ3RoKHlDb29yZCwgbGVuZ3RoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IHlDb29yZDsgaSAhPT0geUNvb3JkICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcEFycmF5LnB1c2goYm9hcmRbaV1beENvb3JkXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcEFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXMgPSAocHJvcG9zZWRDb29yZHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wb3NlZENvb3Jkcyk7XG4gICAgbGV0IGlzRW1wdHkgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcG9zZWRDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wb3NlZENvb3Jkc1tpXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIHJldHVybiAoaXNFbXB0eSA9IGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc0VtcHR5O1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIGFsbCBvZiB0aGUgdmFsaWRhdGlvbiBjb25kaXRpb25zIGFyZSBtZXQhXG4gIC8vIHRoaXMgaXMgYW4gaW5jcmVkaWJseSB1Z2x5IGZ1bmN0aW9uIGJ1dCBzaG91bGQgY2hlY2sgZXZlcnl0aGluZ1xuICBjb25zdCBjb21wb3VuZFZhbGlkYXRpb24gPSAoc2hpcFNpemUsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAodmFsaWRDb29yZGluYXRlKHlDb29yZCwgeENvb3JkKSkge1xuICAgICAgLy8gY2hlY2sgaG9yaXpvbnRhbGx5XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZUxlbmd0aCh4Q29vcmQsIHNoaXBTaXplKSkge1xuICAgICAgICAgIGxldCB0ZW1wU3BhY2UgPSB2YWxpZGF0ZVNwYWNlKHlDb29yZCwgeENvb3JkLCBzaGlwU2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBpZiAocmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXModGVtcFNwYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHZlcnRpY2FsbHlcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZUxlbmd0aCh5Q29vcmQsIHNoaXBTaXplKSkge1xuICAgICAgICAgIGxldCB0ZW1wU3BhY2UgPSB2YWxpZGF0ZVNwYWNlKHlDb29yZCwgeENvb3JkLCBzaGlwU2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBpZiAocmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXModGVtcFNwYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoY29tcG91bmRWYWxpZGF0aW9uKHNoaXAubGVuZ3RoLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKSkge1xuICAgICAgLy8gbGV0IHNoaXAgPSBuZXdTaGlwKHNoaXBTaXplKTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmQgKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS50YWJsZShib2FyZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJvYXJkWzBdWzBdKVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt5Q29vcmQgKyBpXVt4Q29vcmRdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKGJvYXJkKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYm9hcmRbMF1bMF0pXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIC8vIHJlY2VpdmUgYXR0YWNrIG9uIGVtcHR5IGNvb3JkcyBzaG91bGQgbWFyayBtYXAgd2l0aCBNXG4gIC8vIHRhcmdldCB0aGF0IGlzIGhpdCBuZWVkcyB0byBiZSBtYXJrZWQgd2l0aCBYIG9uIHRoZSBtYXAsIGFuZCBvYmogbmVlZHMgaGl0ICsgMVxuICAvLyBhZnRlciB0aGF0IG5lZWQgdG8gcnVuIGEgY2hlY2sgaWYgdGhlIHNoaXAgaGFzIGJlZW4gc3VuayFcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHlDb29yZCwgeENvb3JkKSA9PiB7XG4gICAgaWYgKGNvb3JkU3RhdHVzKHlDb29yZCwgeENvb3JkKSA9PSBcImVtcHR5XCIpIHtcbiAgICAgIGJvYXJkW3lDb29yZF1beENvb3JkXSA9IFwiTVwiO1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0gZWxzZSBpZiAoY29vcmRTdGF0dXMoeUNvb3JkLCB4Q29vcmQpID09IChcIk1cIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY29vcmRTdGF0dXMoeUNvb3JkLCB4Q29vcmQpID09IChcIlhcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0uaGl0Q291bnQgKz0gMTtcblxuICAgICAgaWYgKGJvYXJkW3lDb29yZF1beENvb3JkXS5pc1N1bmsoYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmhpdENvdW50KSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNoaXAgaGFzIGJlZW4gc3VuayEgXCIgKyBib2FyZFt5Q29vcmRdW3hDb29yZF0ubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmhpdENvdW50KTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdID0gXCJYXCI7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29tcG91bmRWYWxpZGF0aW9uLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcmV2YWxpZGF0ZUNvb3JkaW5hdGVTdGF0dXMsXG4gICAgdmFsaWRhdGVTcGFjZSxcbiAgICB2YWxpZGF0ZUxlbmd0aCxcbiAgICBjb29yZFN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgdmFsaWRDb29yZGluYXRlLFxuICAgIGNyZWF0ZUJvYXJkLFxuICAgIGJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IG5ld1NoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG4vLyBuZXcgcGxheWVycyB3aWxsIGJlIGNyZWF0ZWQgaGVyZVxuXG5jb25zdCBuZXdQbGF5ZXIgPSAoaW5wdXRQbGF5ZXJOYW1lLCBwbGF5ZXJUeXBlKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBpbnB1dFBsYXllck5hbWU7XG4gIGNvbnN0IHR5cGUgPSBwbGF5ZXJUeXBlO1xuICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgbGV0IGNhcnJpZXIgPSBuZXdTaGlwKDUpO1xuICBsZXQgYmF0dGxlc2hpcCA9IG5ld1NoaXAoNCk7XG4gIGxldCBjcnVpc2VyID0gbmV3U2hpcCgzKTtcbiAgbGV0IHN1Ym1hcmluZSA9IG5ld1NoaXAoMyk7XG4gIGxldCBkZXN0cm95ZXIgPSBuZXdTaGlwKDIpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBuYW1lLFxuICAgIHBsYXllckJvYXJkLFxuICAgIGNhcnJpZXIsXG4gICAgYmF0dGxlc2hpcCxcbiAgICBjcnVpc2VyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBkZXN0cm95ZXIsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZW5YQ29vcmQoKSB7XG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiBnZW5ZQ29vcmQoKSB7XG4gIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4geTtcbn1cblxuZnVuY3Rpb24gZ2VuRGlyZWN0aW9uKCkge1xuICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gIHJldHVybiBkaXJlY3Rpb247XG59XG4vLyBjb21wb3VuZFZhbGlkYXRpb24gPSAoc2hpcFNpemUsIHlDb29yZCwgeENvb3JkLCBkaXJlY3Rpb24pXG5mdW5jdGlvbiBpbnNlcnRDUFVzaGlwKHNoaXAsIGNwdVBsYXllck9iaikge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGxldCB4Q29vcmQgPSBnZW5YQ29vcmQoKTtcbiAgICBsZXQgeUNvb3JkID0gZ2VuWUNvb3JkKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGdlbkRpcmVjdGlvbigpO1xuXG4gICAgaWYgKFxuICAgICAgY3B1UGxheWVyT2JqLmNvbXBvdW5kVmFsaWRhdGlvbihzaGlwLmxlbmd0aCwgeUNvb3JkLCB4Q29vcmQsIGRpcmVjdGlvbikgIT1cbiAgICAgIGZhbHNlXG4gICAgKSB7XG4gICAgICByZXR1cm4gY3B1UGxheWVyT2JqLnBsYWNlU2hpcChzaGlwLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IGdlbkRpcmVjdGlvbiwgbmV3UGxheWVyLCBnZW5YQ29vcmQsIGdlbllDb29yZCwgaW5zZXJ0Q1BVc2hpcCB9O1xuIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgc2hpcFxuXG5jb25zdCBuZXdTaGlwID0gKHNpemUpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2l6ZTtcbiAgbGV0IGhpdENvdW50ID0gMDtcblxuICBjb25zdCBpc1N1bmsgPSAoY3VyckhpdHMpID0+IHtcbiAgICBpZiAoY3VyckhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cblxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdENvdW50LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG5ld1NoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgbmV3UGxheWVyLCBnZW5YQ29vcmQsIGdlbllDb29yZCwgZ2VuRGlyZWN0aW9uLCBpbnNlcnRDUFVzaGlwIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBkcmF3Qm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuXG5cblxubGV0IGNwdVBsYXllciA9IG5ld1BsYXllcignY29tcHV0ZXInLCAnQ1BVJyk7XG5jcHVQbGF5ZXIucGxheWVyQm9hcmQuY3JlYXRlQm9hcmQoKTtcblxuaW5zZXJ0Q1BVc2hpcChjcHVQbGF5ZXIuY2FycmllciwgY3B1UGxheWVyLnBsYXllckJvYXJkKTtcbmluc2VydENQVXNoaXAoY3B1UGxheWVyLmJhdHRsZXNoaXAsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG5pbnNlcnRDUFVzaGlwKGNwdVBsYXllci5zdWJtYXJpbmUsIGNwdVBsYXllci5wbGF5ZXJCb2FyZCk7XG5pbnNlcnRDUFVzaGlwKGNwdVBsYXllci5jcnVpc2VyLCBjcHVQbGF5ZXIucGxheWVyQm9hcmQpO1xuaW5zZXJ0Q1BVc2hpcChjcHVQbGF5ZXIuZGVzdHJveWVyLCBjcHVQbGF5ZXIucGxheWVyQm9hcmQpO1xuLy8gY29tcG91bmRWYWxpZGF0aW9uID0gKHNoaXBTaXplLCB5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKVxuXG4vLyBjb25zb2xlLmxvZyhjcHVQbGF5ZXIucGxheWVyQm9hcmQuY29tcG91bmRWYWxpZGF0aW9uKDUsIC0xLCAxLCAxKSlcblxuLy8gaWYgKGNwdVBsYXllci5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY3B1UGxheWVyLmNhcnJpZXIsIGdlbllDb29yZCgpLCBnZW5YQ29vcmQoKSwgZ2VuRGlyZWN0aW9uKCkpID09IGZhbHNlKXtcbi8vICAgICBjb25zb2xlLmxvZygnZmFpbCcpO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygnbm8gZmFpbCcpO1xuLy8gfVxuXG5cblxuXG5cbmRyYXdCb2FyZChjcHVQbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gbGV0IHBsYXllcjEgPSBuZXdQbGF5ZXIoJ01pa2UnLCAncGxheWVyJyk7XG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLmNyZWF0ZUJvYXJkKCk7XG5cbi8vIHBsYXllcjEucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllcjEuY2FycmllciwgNSwgNCwgMCk7XG4vLyBkcmF3Qm9hcmQocGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZCk7XG4vLyBwbGF5ZXIxLnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXIxLmJhdHRsZXNoaXAsIDAsIDAsIDEpO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyMS5jcnVpc2VyLCA3LCAyLCAwKTtcbi8vIGRyYXdCb2FyZChwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkKTtcbi8vIHBsYXllcjEucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllcjEuZGVzdHJveWVyLCAzLCA4LCAwKTtcblxuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDQsIDMpO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDQsIDUpO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDAsIDApO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDEsIDApO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDIsIDApO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDMsIDApO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gcGxheWVyMS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDMsIDApO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuXG4vLyBjb25zb2xlLnRhYmxlKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuLy8gZHJhd0JvYXJkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmJhdHRsZXNoaXApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==