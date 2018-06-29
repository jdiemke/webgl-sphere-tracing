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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fragment-shader.fs":
/*!********************************!*\
  !*** ./src/fragment-shader.fs ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nconst float width  = 640.0;\\nconst float height = 360.0;\\nconst float delta  = 0.06;\\nconst float PI =  3.14159265;\\n\\nconst vec3 lightDirection = vec3(-0.5, 0.5, -1.0);\\n\\nvec3 rotateX(vec3 pos, float alpha) {\\n    mat4 trans = mat4(\\n        1.0,        0.0,         0.0, 0.0,\\n\\t\\t0.0, cos(alpha), -sin(alpha), 0.0,\\n\\t\\t0.0, sin(alpha),  cos(alpha), 0.0,\\n\\t\\t0.0,        0.0,         0.0, 1.0\\n    );\\n\\n\\treturn vec3(trans * vec4(pos, 1.0));\\n}\\n\\nvec3 rotateY(vec3 pos, float alpha) {\\n\\tmat4 trans2= mat4(cos(alpha), 0.0, sin(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 1.0, 0.0, 0.0,\\n\\t\\t\\t\\t-sin(alpha), 0.0, cos(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 0.0, 0.0, 1.0);\\n\\n\\treturn vec3(trans2 * vec4(pos, 1.0));\\n}\\n\\nvec3 translate(vec3 position, vec3 translation) {\\n\\treturn position - translation;\\n}\\n\\nfloat udRoundBox(vec3 p, vec3 b, float r) {\\n    return length(max(abs(p) - b, 0.0)) - r;\\n}\\n\\nfloat sdSphere(vec3 p, float s) {\\n    return length(p) - s;\\n}\\n\\nfloat opS(float d1, float d2) {\\n    return max(-d1, d2);\\n}\\n\\nfloat opRep( vec3 p, vec3 c ) {\\n    vec3 q = mod(p, c) - 0.5 * c;\\n    return sdSphere(q, 0.5);\\n}\\n\\nfloat wonderCube(vec3 position) {\\n    vec3 disp = vec3(0.0,0.0,8.9);\\n    vec3 newPos = rotateY(rotateX(translate(position.xyz,disp),2.3*time),1.8*time);\\n    return opS( opRep(newPos, vec3(1.2,1.2,1.2)),udRoundBox(newPos, vec3(2.2,2.2,2.2), 0.5));\\n}\\n\\nfloat opCheapBend(vec3 p) {\\n    float c = cos(1.9*(1.0+sin(time*0.3))+p.y*0.19);\\n    float s = sin(1.9*(1.0+sin(time*0.3))+p.y*0.18);\\n    mat2  m = mat2(c,-s,s,c);\\n    vec3  q = vec3(m*p.xy,p.z);\\n    return wonderCube(q);\\n}\\n\\nfloat opU(float d1, float d2) {\\n    return min(d1,d2);\\n}\\n\\nfloat function(vec3 position) {\\n\\treturn opCheapBend(position);\\n}\\n\\nvec3 ray(vec3 start, vec3 direction, float t) {\\n\\treturn start + t * direction;\\n}\\n\\nvec3 gradient(vec3 position) {\\n\\treturn vec3(\\n        function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),\\n\\t    function(position + vec3(0.0, delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),\\n\\t    function(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta))\\n    );\\n}\\n\\n// FIXME: format correctly\\nvec4 plasma2() {\\n    float color1, color2, color;\\n\\tcolor1 =(sin(dot(gl_FragCoord.xy,vec2(sin(time*3.0),cos(time*3.0)))*0.02+time*3.0)+1.0)/2.0;\\n\\tvec2 center = vec2(640.0/2.0, 360.0/2.0) + vec2(640.0/2.0*sin(-time*3.0),360.0/2.0*cos(-time*3.0));\\n\\tcolor2 =(cos(length(gl_FragCoord.xy - center)*0.03)+1.0)/2.0;\\n\\tcolor = (color1+ color2)/2.0;\\n\\tfloat red = (cos(PI*color/0.5+time*2.0)+1.0)/2.0;\\n\\tfloat green = (sin(PI*color/0.5+time*2.0)+1.0)/2.0;\\n\\tfloat blue = (sin(+time*2.0)+1.0)/2.0;\\n\\treturn vec4(red,green,blue, 1.0);\\n}\\n\\n// optimize: dont compute const stuff in main but precompute\\nvoid main() {\\n\\tvec3 cameraPosition = vec3(0.0, 0.0, -1.4);\\n\\tfloat aspect = 360.0 / 640.0;\\n\\n\\tvec3 nearPlanePosition = vec3(\\n        (gl_FragCoord.x - 0.5 * width) / width * 2.0,\\n\\t\\t(gl_FragCoord.y - 0.5 * height) / height * 2.0 * aspect,\\n\\t\\t0.0\\n    );\\n\\n\\tvec3 viewDirection = normalize(nearPlanePosition - cameraPosition);\\n\\n    // optimization: start at near plane position\\n\\tfloat t = 0.0;\\n\\tfloat distance;\\n\\tvec3 position;\\n\\tvec4 color = plasma2();\\n\\tvec3 normal;\\n\\tvec3 up = normalize(vec3(0.0, 1.0, 0.0));\\n\\n\\tfor(int i = 0; i < 64; i++) {\\n\\t\\tposition = ray(cameraPosition,\\tviewDirection, t);\\n\\t\\tdistance = function(position);\\n\\n\\t\\tif(abs(distance) < 0.005) {\\n\\t\\t\\tnormal = normalize(gradient(position));\\n\\n\\t\\t\\tvec4 color1 = vec4(0.5, 0.9, 0.5, 1.0);\\n\\t\\t\\tvec4 color2 = vec4(1.0, 0.1, 0.1, 1.0);\\n\\n            // mix color based on normal and up vector\\n\\t\\t\\tvec4 color3 = mix(color2, color1, (1.0 + dot(up, normal)) / 2.0);\\n\\t\\t\\tcolor = color3 * max(dot(normal, normalize(lightDirection)), 0.0) + vec4(0.1, 0.1, 0.1, 1.0);\\n\\n\\t\\t\\t// specular color computation\\n\\t\\t\\tvec3 E = normalize(cameraPosition - position);\\n\\t\\t\\tvec3 R = reflect(normalize(-lightDirection), normal);\\n\\t\\t\\tfloat specular = pow(max(dot(R, E), 0.0), 8.0);\\n\\n            // Add specular color to diffuse color\\n\\t\\t\\tcolor += vec4(0.6, 0.4, 0.4, 0.0) * specular;\\n\\t\\t\\tbreak;\\n\\t\\t}\\n\\n\\t\\tt = t + distance;\\n\\t}\\n\\n\\tgl_FragColor = color;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/fragment-shader.fs?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst FragmentShader_1 = __webpack_require__(/*! ./shader/FragmentShader */ \"./src/shader/FragmentShader.ts\");\nconst VertexShader_1 = __webpack_require__(/*! ./shader/VertexShader */ \"./src/shader/VertexShader.ts\");\nlet timer;\nlet shaderProgram;\nlet vbo;\nfunction start() {\n    const canvas = document.getElementById(\"canvas\");\n    try {\n        exports.gl = canvas.getContext(\"webgl\");\n    }\n    catch (e) {\n        console.warn(\"Could not retrieve WebGL Context.\");\n    }\n    const vertexShader2 = new VertexShader_1.VertexShader(__webpack_require__(/*! ./vertex-shader.vs */ \"./src/vertex-shader.vs\"));\n    console.log(vertexShader2.getInfoLog());\n    const fragmentShader2 = new FragmentShader_1.FragmentxShader(__webpack_require__(/*! ./fragment-shader.fs */ \"./src/fragment-shader.fs\"));\n    console.log(fragmentShader2.getInfoLog());\n    shaderProgram = exports.gl.createProgram();\n    exports.gl.attachShader(shaderProgram, vertexShader2.getShader());\n    exports.gl.attachShader(shaderProgram, fragmentShader2.getShader());\n    exports.gl.linkProgram(shaderProgram);\n    console.log(exports.gl.getProgramInfoLog(shaderProgram));\n    const result = exports.gl.getProgramParameter(shaderProgram, exports.gl.LINK_STATUS);\n    if (!result) {\n        console.warn(\"link eror\");\n    }\n    exports.gl.useProgram(shaderProgram);\n    timer = exports.gl.getUniformLocation(shaderProgram, \"time\");\n    exports.gl.clearColor(0.0, 1.0, 1.0, 1.0);\n    exports.gl.clear(exports.gl.COLOR_BUFFER_BIT | exports.gl.DEPTH_BUFFER_BIT);\n    const vertices = new Float32Array([\n        -1.0, -1.0, -1.0,\n        1.0, -1.0, -1.0,\n        -1.0, 1.0, -1.0,\n        1.0, -1.0, -1.0,\n        1.0, 1.0, -1.0,\n        -1.0, 1.0, -1.0,\n    ]);\n    vbo = exports.gl.createBuffer();\n    exports.gl.bindBuffer(exports.gl.ARRAY_BUFFER, vbo);\n    exports.gl.bufferData(exports.gl.ARRAY_BUFFER, vertices, exports.gl.STATIC_DRAW);\n    exports.gl.vertexAttribPointer(0, 3, exports.gl.FLOAT, false, 0, 0);\n    exports.gl.enableVertexAttribArray(0);\n    if (exports.gl) {\n        startStop();\n    }\n}\nlet runss = true;\nlet animator;\nfunction startStop() {\n    runss = !runss;\n    if (runss) {\n        clearInterval(animator);\n    }\n    else {\n        animator = setInterval(() => animation(), 40);\n    }\n}\nlet time = 0;\nfunction animation() {\n    exports.gl.clearColor(0.1, 0.4, 0.1, 1.0);\n    exports.gl.clear(exports.gl.COLOR_BUFFER_BIT |\n        exports.gl.DEPTH_BUFFER_BIT);\n    time += 0.01;\n    exports.gl.uniform1f(timer, time);\n    exports.gl.drawArrays(exports.gl.TRIANGLES, 0, 6);\n}\nstart();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/shader/AbstractShader.ts":
/*!**************************************!*\
  !*** ./src/shader/AbstractShader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\nclass AbstractShader {\n    constructor(source) {\n        this.create();\n        this.addSource(source);\n        this.compile();\n    }\n    getInfoLog() {\n        return index_1.gl.getShaderInfoLog(this.shader);\n    }\n    getShader() {\n        return this.shader;\n    }\n    create() {\n        this.shader = index_1.gl.createShader(this.getShaderType());\n    }\n    addSource(source) {\n        index_1.gl.shaderSource(this.shader, source);\n    }\n    compile() {\n        index_1.gl.compileShader(this.shader);\n    }\n}\nexports.AbstractShader = AbstractShader;\n\n\n//# sourceURL=webpack:///./src/shader/AbstractShader.ts?");

/***/ }),

/***/ "./src/shader/FragmentShader.ts":
/*!**************************************!*\
  !*** ./src/shader/FragmentShader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\nconst AbstractShader_1 = __webpack_require__(/*! ./AbstractShader */ \"./src/shader/AbstractShader.ts\");\nclass FragmentxShader extends AbstractShader_1.AbstractShader {\n    getShaderType() {\n        return index_1.gl.FRAGMENT_SHADER;\n    }\n}\nexports.FragmentxShader = FragmentxShader;\n\n\n//# sourceURL=webpack:///./src/shader/FragmentShader.ts?");

/***/ }),

/***/ "./src/shader/VertexShader.ts":
/*!************************************!*\
  !*** ./src/shader/VertexShader.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\nconst AbstractShader_1 = __webpack_require__(/*! ./AbstractShader */ \"./src/shader/AbstractShader.ts\");\nclass VertexShader extends AbstractShader_1.AbstractShader {\n    getShaderType() {\n        return index_1.gl.VERTEX_SHADER;\n    }\n}\nexports.VertexShader = VertexShader;\n\n\n//# sourceURL=webpack:///./src/shader/VertexShader.ts?");

/***/ }),

/***/ "./src/vertex-shader.vs":
/*!******************************!*\
  !*** ./src/vertex-shader.vs ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec3 position;\\n\\nvoid main(void) {\\n    gl_Position = vec4(position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/vertex-shader.vs?");

/***/ })

/******/ });