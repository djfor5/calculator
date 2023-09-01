/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDisplay: () => (/* binding */ clearDisplay),
/* harmony export */   displayValue: () => (/* binding */ displayValue)
/* harmony export */ });
// eslint-disable-next-line no-param-reassign
function displayValue(value, displayEl) {
  displayEl.textContent = value;
}
function clearDisplay(displayEl) {
  displayEl.textContent = ""; // eslint-disable-line no-param-reassign
}



/***/ }),

/***/ "./src/maths.js":
/*!**********************!*\
  !*** ./src/maths.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(num1, operatorSelection, num2) {
  // eslint-disable-line consistent-return
  switch (operatorSelection) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
  }
}


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  font-size: 26px;
  font-weight: bold;
}

body {
  font-family: Arial, monospace, monospace;
}

button {
  border: 2px solid black;
  border-radius: 5px;

  cursor: pointer;

  transition: all 0.2s;
}

h1 {
  text-align: center;
}

#calculator {
  background-color: lightgrey;
  
  width: fit-content;
  margin: auto;
  padding: 15px;
  
  border: 3px solid black;
  border-radius: 15px;
  
  display: flex;
  flex-direction: column;
}

#display-container {
  color: white;
  background-color: rgb(80, 80,80);
  overflow: hidden;
  text-overflow: ellipsis;
  
  border: 2px solid black;
  border-radius: 4px;

  width: 200px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
}

#display {
  width: 100%;
  padding-right: 5px;

  text-align: right;
}

#buttons {
  display: flex;
  flex-direction: column;
}

#non-calculate {
  display: flex;
}

#digits-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#digits-container button {
  padding: 5px 12px;
  margin-bottom: 7px;
}

.digit {
  background-color: lightcyan;
}

.digit:hover {
  background-color: rgb(202, 231, 231);
}

.digit:active {
  background-color: rgb(178, 204, 204);
}

#decimal {
  background-color: rgb(14, 252, 252);

  width: 43px;
}

#decimal:hover {
  background-color: rgb(0, 230, 230);
}

#decimal:active {
  background-color: rgb(0, 204, 204);
}

#operators-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 15px;
}

/* #operators-container > button, */
.operator {
  background-color: rgb(221, 220, 134);

  padding: 5px 12px;
  margin: 1px;

  flex: 1 1 auto;
}

.operator:hover {
  background-color: rgb(189, 187, 109);
}

.operator:active {
  background-color: rgb(158, 156, 91);
}

#clear-backspace-equals-container {
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
}

#clear-backspace-equals-container button {
  padding: 5px 12px;
  margin: 1px;
}

#clear {
  background-color: rgb(255, 37, 37);
}

#clear:hover {
  background-color: rgb(230, 22, 22);
}

#clear:active {
  background-color: rgb(201, 15, 15);
}

#backspace {
  background-color: rgb(255, 182, 48);
}

#backspace:hover {
  background-color: rgb(233, 166, 43);
}

#backspace:active {
  background-color: rgb(202, 142, 29);
}

#equals {
  background-color: rgb(21, 241, 21);
}

#equals:hover {
  background-color: rgb(22, 206, 22);
}

#equals:active {
  background-color: rgb(16, 175, 16);
}

.inactive {
  opacity: 0.2;
}

img {
  width: 100px;
  height: 100px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;;EAElB,eAAe;;EAEf,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;;EAE3B,kBAAkB;EAClB,YAAY;EACZ,aAAa;;EAEb,uBAAuB;EACvB,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,gBAAgB;EAChB,uBAAuB;;EAEvB,uBAAuB;EACvB,kBAAkB;;EAElB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;;EAEnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;;EAEnC,WAAW;AACb;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,iBAAiB;AACnB;;AAEA,mCAAmC;AACnC;EACE,oCAAoC;;EAEpC,iBAAiB;EACjB,WAAW;;EAEX,cAAc;AAChB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;;EAEhB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  font-size: 26px;\n  font-weight: bold;\n}\n\nbody {\n  font-family: Arial, monospace, monospace;\n}\n\nbutton {\n  border: 2px solid black;\n  border-radius: 5px;\n\n  cursor: pointer;\n\n  transition: all 0.2s;\n}\n\nh1 {\n  text-align: center;\n}\n\n#calculator {\n  background-color: lightgrey;\n  \n  width: fit-content;\n  margin: auto;\n  padding: 15px;\n  \n  border: 3px solid black;\n  border-radius: 15px;\n  \n  display: flex;\n  flex-direction: column;\n}\n\n#display-container {\n  color: white;\n  background-color: rgb(80, 80,80);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  \n  border: 2px solid black;\n  border-radius: 4px;\n\n  width: 200px;\n  height: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n\n  display: flex;\n  align-items: center;\n}\n\n#display {\n  width: 100%;\n  padding-right: 5px;\n\n  text-align: right;\n}\n\n#buttons {\n  display: flex;\n  flex-direction: column;\n}\n\n#non-calculate {\n  display: flex;\n}\n\n#digits-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#digits-container button {\n  padding: 5px 12px;\n  margin-bottom: 7px;\n}\n\n.digit {\n  background-color: lightcyan;\n}\n\n.digit:hover {\n  background-color: rgb(202, 231, 231);\n}\n\n.digit:active {\n  background-color: rgb(178, 204, 204);\n}\n\n#decimal {\n  background-color: rgb(14, 252, 252);\n\n  width: 43px;\n}\n\n#decimal:hover {\n  background-color: rgb(0, 230, 230);\n}\n\n#decimal:active {\n  background-color: rgb(0, 204, 204);\n}\n\n#operators-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  margin-left: 15px;\n}\n\n/* #operators-container > button, */\n.operator {\n  background-color: rgb(221, 220, 134);\n\n  padding: 5px 12px;\n  margin: 1px;\n\n  flex: 1 1 auto;\n}\n\n.operator:hover {\n  background-color: rgb(189, 187, 109);\n}\n\n.operator:active {\n  background-color: rgb(158, 156, 91);\n}\n\n#clear-backspace-equals-container {\n  margin-top: 15px;\n\n  display: flex;\n  justify-content: space-between;\n}\n\n#clear-backspace-equals-container button {\n  padding: 5px 12px;\n  margin: 1px;\n}\n\n#clear {\n  background-color: rgb(255, 37, 37);\n}\n\n#clear:hover {\n  background-color: rgb(230, 22, 22);\n}\n\n#clear:active {\n  background-color: rgb(201, 15, 15);\n}\n\n#backspace {\n  background-color: rgb(255, 182, 48);\n}\n\n#backspace:hover {\n  background-color: rgb(233, 166, 43);\n}\n\n#backspace:active {\n  background-color: rgb(202, 142, 29);\n}\n\n#equals {\n  background-color: rgb(21, 241, 21);\n}\n\n#equals:hover {\n  background-color: rgb(22, 206, 22);\n}\n\n#equals:active {\n  background-color: rgb(16, 175, 16);\n}\n\n.inactive {\n  opacity: 0.2;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n}"],"sourceRoot":""}]);
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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _maths_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maths.js */ "./src/maths.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");



let number1;
let operator;
let number2;
let expressionStr = "";
let resultLength = 0;
const MAXIMUM_DISPLAY_LENGTH = 13;
let operatorCount = 0;

// set initial functionality toggles
let allowDigits = true;
let allowDecimal = true;
let allowBackspace = false;
let allowEquals = false;
let lastSelection = "";
const display = document.querySelector("#display");
const digitBtns = document.querySelectorAll("#digits-container .digit");
const decimal = document.querySelector("#decimal");
const operatorBtns = document.querySelectorAll("#operators-container button");
const addMultiplyDivideBtns = document.querySelectorAll(".operators-excluding-subtract");
const subtractBtn = document.querySelector("#subtract");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const equals = document.querySelector("#equals");
const allBtns = document.querySelectorAll("button");
updateAllowedButtons();
(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
digitBtns.forEach(digitBtn => {
  digitBtn.addEventListener("click", () => {
    if (!allowDigits) return; // prevent additional digits from being added to result displayed
    if (expressionStr.length >= MAXIMUM_DISPLAY_LENGTH) return;
    expressionStr += digitBtn.id;

    // toggle functionality
    allowBackspace = true;
    if (operatorCount > 0) {
      allowEquals = true;
    }
    lastSelection = "operand"; // set last value input

    updateAllowedButtons();
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
  });
});
decimal.addEventListener("click", () => {
  if (!allowDecimal) return;
  if (expressionStr.length >= MAXIMUM_DISPLAY_LENGTH) return;

  // add leading zero before decimal if no other digit is before the decimal
  if (lastSelection === "" || lastSelection === "operator" || lastSelection === "negative") {
    expressionStr += "0" + decimal.textContent; // eslint-disable-line prefer-template
  } else {
    expressionStr += decimal.textContent;
  }

  // toggle functionality
  allowDecimal = false;
  allowBackspace = true;
  if (operatorCount > 0) {
    allowEquals = true;
  }
  lastSelection = "operand"; // set last value input

  updateAllowedButtons();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
});
operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener("click", () => {
    if (lastSelection === "negative") return; // only operand can follow a negative
    if (operatorCount !== 0 && lastSelection !== "operator") return; // only allow one operator to be used (excluding negatives)
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id !== "subtract") return; // don't allow double operator unless second is negative

    if (lastSelection === "operator" && expressionStr.length >= MAXIMUM_DISPLAY_LENGTH) return;
    if (lastSelection !== "operator" && expressionStr.length >= MAXIMUM_DISPLAY_LENGTH - 2) return;

    // add trailing zero if last character is a decimal at time of adding an operator
    if (expressionStr.slice(expressionStr.length - 1) === ".") {
      expressionStr += "0";
      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
    }
    operator = operatorBtn.textContent;
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id === "subtract") {
      lastSelection = "negative"; // set last value input
      expressionStr += `${operator}`;
    } else if (lastSelection === "operand") {
      lastSelection = "operator"; // set last value input
      expressionStr += ` ${operator} `;
      operatorCount++;
    }

    // toggle functionality
    allowDigits = true;
    allowDecimal = true;
    allowBackspace = true;
    allowEquals = false;
    updateAllowedButtons();
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
  });
});
equals.addEventListener("click", () => {
  if (!allowEquals) return;
  if (lastSelection !== "operand" || operatorCount !== 1) return; // exit if expression does not contain operand operator operand

  const operandOperatorOperand = expressionStr.split(" ");
  number1 = operandOperatorOperand[0]; // eslint-disable-line prefer-destructuring
  number1 = Number(number1);
  const operatorSymbol = operandOperatorOperand[1];
  switch (operatorSymbol) {
    case "+":
      operator = "add";
      break;
    case "-":
      operator = "subtract";
      break;
    case "*":
      operator = "multiply";
      break;
    case "/":
      operator = "divide";
      break;
    default:
  }
  number2 = operandOperatorOperand[2]; // eslint-disable-line prefer-destructuring
  number2 = Number(number2);
  const result = (0,_maths_js__WEBPACK_IMPORTED_MODULE_1__.operate)(number1, operator, number2);
  operatorCount = 0; // reset count to enable operator to be used again
  expressionStr = result.toString(); // resolve the expression to show the result

  // toggle functionality
  allowDigits = false; // prevent additional digits from being abitrarily added to result displayed
  allowDecimal = false;
  allowBackspace = false;
  allowEquals = false;
  resultLength = expressionStr.length;
  lastSelection = "operand"; // set last value input

  updateAllowedButtons();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
  console.log("number1: ", number1);
  console.log("operator: ", operator);
  console.log("number2: ", number2);
  console.log(`%cresult: ${result}`, "font-weight: bold");
  console.log("\n");
});
clear.addEventListener("click", () => {
  // toggle functionality
  allowDigits = true;
  allowDecimal = true;
  allowBackspace = false;
  allowEquals = false;
  operatorCount = 0;
  expressionStr = "";
  resultLength = 0;
  lastSelection = ""; // set last value input

  number1 = null;
  operator = null;
  number2 = null;
  console.clear();
  updateAllowedButtons();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.clearDisplay)(display);
});
backspace.addEventListener("click", () => {
  if (!allowBackspace) return;
  if (expressionStr.length <= resultLength) return;
  if (expressionStr === "") return;
  if (expressionStr.slice(expressionStr.length - 1) === ".") {
    expressionStr = expressionStr.slice(0, expressionStr.length - 1);
    lastSelection = "operand";
    allowDecimal = true;
  } else if (expressionStr.slice(expressionStr.length - 1) === " ") {
    expressionStr = expressionStr.slice(0, expressionStr.length - 3);
    lastSelection = "operand";
    allowBackspace = true;
    allowEquals = false;
    operatorCount = 0;
  } else if (expressionStr.slice(expressionStr.length - 1) === "-") {
    expressionStr = expressionStr.slice(0, expressionStr.length - 1);
    if (expressionStr.length > 0) {
      lastSelection = "operator";
      allowBackspace = true;
      allowEquals = false;
    } else {
      lastSelection = "";
      allowBackspace = false;
      allowEquals = false;
    }
  } else {
    expressionStr = expressionStr.slice(0, expressionStr.length - 1);
    if (expressionStr.length === 0) {
      lastSelection = "";
      allowBackspace = false;
      allowEquals = false;
    } else if (expressionStr.slice(expressionStr.length - 1) === " ") {
      lastSelection = "operator";
      allowBackspace = true;
      allowEquals = false;
    } else if (expressionStr.slice(expressionStr.length - 1) === "-") {
      lastSelection = "negative";
      allowBackspace = true;
      allowEquals = false;
    }
  }
  updateAllowedButtons();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayValue)(expressionStr, display);
});
function updateAllowedButtons() {
  if (allowDigits) {
    digitBtns.forEach(digitBtn => digitBtn.classList.remove("inactive"));
    console.log("%cDigits allowed", "color: green");
  } else {
    digitBtns.forEach(digitBtn => digitBtn.classList.add("inactive"));
    console.log("%cDigits NOT allowed", "color: red");
  }
  if (allowDecimal) {
    decimal.classList.remove("inactive");
    console.log("%cDecimal allowed", "color: green");
  } else {
    decimal.classList.add("inactive");
    console.log("%cDecimal NOT allowed", "color: red");
  }
  if (allowBackspace && expressionStr.length > resultLength) {
    backspace.classList.remove("inactive");
    console.log("%cBackspace allowed", "color: green");
  } else {
    backspace.classList.add("inactive");
    console.log("%cBackspace NOT allowed", "color: red");
  }

  // check for add, multiply, and divide button
  if (lastSelection !== "" && lastSelection !== "operator" && lastSelection !== "negative" && operatorCount === 0) {
    addMultiplyDivideBtns.forEach(addMultiplyDivideBtn => addMultiplyDivideBtn.classList.remove("inactive"));
    console.log("%cAdd, multiply, and divide allowed", "color: green");
  } else {
    addMultiplyDivideBtns.forEach(addMultiplyDivideBtn => addMultiplyDivideBtn.classList.add("inactive"));
    console.log("%cAdd, multiply, and divide NOT allowed", "color: red");
  }

  // check for subtract button
  if (lastSelection === "negative" || allowEquals) {
    subtractBtn.classList.add("inactive");
    console.log("%cSubtract (or negative) NOT allowed", "color: red");
  } else {
    subtractBtn.classList.remove("inactive");
    console.log("%cSubtract (or negative) allowed", "color: green");
  }
  if (allowEquals) {
    equals.classList.remove("inactive");
    console.log("%cEquals allowed", "color: green");
  } else {
    equals.classList.add("inactive");
    console.log("%cEquals NOT allowed", "color: red");
  }

  // prevent any buttons being used (except clear and backspace) if display string is too long
  if (expressionStr.length >= MAXIMUM_DISPLAY_LENGTH) {
    allBtns.forEach(allBtn => allBtn.classList.add("inactive"));
    clear.classList.remove("inactive");
  }
  console.log("\n");
}
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map