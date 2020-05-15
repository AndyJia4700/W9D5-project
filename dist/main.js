/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n    constructor(array){\n        this.array = array;\n        //apply to every node in the interal array\n        // return this.array.map(el => {\n        //     $l(el);\n        // })\n    }\n\n    html(str){\n        if (str === undefined) {\n            return this.array[0].innerHTML;\n        } else {\n            for (let i = 0; i < this.array.length; i++) {\n                this.array[i].innerHTML = str;\n            }\n        }\n        return this;\n    }\n    \n    empty(){\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].innerHTML = \"\";\n        } \n        return this;\n    }\n\n    append(arg) {\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].innerHTML += arg;\n        }\n        return this\n    }\n\n\n\n    remove() {\n        let parents = [];\n        this.array.each(parent => parents.push(parent));\n\n        for (let i = 0; i < parents.length; i++) {\n            this.array[i].removeChild(parents[i]);\n        }\n\n    }\n\n    // ul class=\"ull\"\n    //     li class =\"lii\"     $(\"li\").remove();\n    //         li\n    //         li\n\n    // ol class=\"ol\"\n    // li\n    // li\n    // li\n\n    attr(key, value){\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].setAttribute(key, value)\n        }\n        return this\n    }\n\n    addClass(value){\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].setAttribute(\"class\", value)\n        }\n        return this\n    }\n\n    removeClass(){\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].removeAttribute(\"class\")\n        }\n        return this\n    }\n\n\n    // ul   ol  ==>   li   ,  $l(\"ul\").find(\"li\")\n    find(arg){\n        let selected = [];\n        for (let i = 0; i < this.array.length; i++) {\n            // let node = this.array[i]\n            selected = selected.concat(Array.from(this.array[i].querySelectorAll(arg)));\n        }\n        // const collect = Array.from(selected);\n        return new DOMNodeCollection(selected);\n    }\n\n\n    children(){ // [ul, ul]\n        let childArr = [];\n        for (let i = 0; i < this.array.length; i++) {\n            childArr = childArr.concat(this.array[i].children);\n        }\n        return childArr;\n    }\n\n    parent(){\n        let parentArr = [];\n        for (let i = 0; i < this.array.length; i++) {\n            if (parentArr.indexOf(this.array[i].parentNode) === -1 ) {\n                parentArr = parentArr.concat(this.array[i].parentNode);\n            }\n        }\n        return parentArr;\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\nwindow.$l = $l\nfunction $l(selectedClass) {\n    if (selectedClass instanceof HTMLElement === true) {\n      const elementList = new DOMNodeCollection([selectedClass]);\n      return elementList;\n  } else if(typeof selectedClass === \"string\") { \n    const elementList = document.querySelectorAll(selectedClass);\n    const collect = Array.from(elementList);\n    return new DOMNodeCollection(collect);\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });