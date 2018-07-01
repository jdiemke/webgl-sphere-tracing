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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demos/cube/Application.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/FullscreenQuad.ts":
/*!*******************************!*\
  !*** ./src/FullscreenQuad.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst VertexBufferObject_1 = __webpack_require__(/*! ./vbo/VertexBufferObject */ \"./src/vbo/VertexBufferObject.ts\");\nclass FullscreenQuad {\n    constructor() {\n        const quadrilateralVertices = new Float32Array([\n            -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0, -1.0,\n            1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,\n        ]);\n        this.vbo = new VertexBufferObject_1.VertexBufferObject(quadrilateralVertices);\n    }\n    draw() {\n        this.vbo.draw();\n    }\n}\nexports.FullscreenQuad = FullscreenQuad;\n\n\n//# sourceURL=webpack:///./src/FullscreenQuad.ts?");

/***/ }),

/***/ "./src/RenderingContext.ts":
/*!*********************************!*\
  !*** ./src/RenderingContext.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Stores the currently active rendering context in a global variable.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.context = null;\nfunction setCurrentContext(currentContext) {\n    exports.context = currentContext;\n}\nexports.setCurrentContext = setCurrentContext;\n\n\n//# sourceURL=webpack:///./src/RenderingContext.ts?");

/***/ }),

/***/ "./src/Scene.ts":
/*!**********************!*\
  !*** ./src/Scene.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass AbstractScene {\n}\nexports.AbstractScene = AbstractScene;\n\n\n//# sourceURL=webpack:///./src/Scene.ts?");

/***/ }),

/***/ "./src/SphereTracingScene.ts":
/*!***********************************!*\
  !*** ./src/SphereTracingScene.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst FullscreenQuad_1 = __webpack_require__(/*! ./FullscreenQuad */ \"./src/FullscreenQuad.ts\");\nconst Scene_1 = __webpack_require__(/*! ./Scene */ \"./src/Scene.ts\");\nconst SphereTracingShaderProgram_1 = __webpack_require__(/*! ./shader/SphereTracingShaderProgram */ \"./src/shader/SphereTracingShaderProgram.ts\");\nclass SphereTracingScene extends Scene_1.AbstractScene {\n    constructor(vertexShaderSource, fragmentShaderSource) {\n        super();\n        this.startTime = Date.now();\n        this.shaderProgram = new SphereTracingShaderProgram_1.SphereTracingShaderProgram(vertexShaderSource, fragmentShaderSource);\n    }\n    init() {\n        this.shaderProgram.use();\n        this.fullscreenQuad = new FullscreenQuad_1.FullscreenQuad();\n    }\n    draw() {\n        this.shaderProgram.setTime((Date.now() - this.startTime) * 0.0002);\n        this.fullscreenQuad.draw();\n    }\n}\nexports.SphereTracingScene = SphereTracingScene;\n\n\n//# sourceURL=webpack:///./src/SphereTracingScene.ts?");

/***/ }),

/***/ "./src/Window.ts":
/*!***********************!*\
  !*** ./src/Window.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext = __webpack_require__(/*! ./RenderingContext */ \"./src/RenderingContext.ts\");\nclass Window {\n    constructor(elementId) {\n        const canvas = document.getElementById(elementId);\n        const gl = canvas.getContext('webgl');\n        if (gl === null) {\n            throw new Error('Could not initialize WebGL rendering context.');\n        }\n        RenderingContext.setCurrentContext(gl);\n    }\n    setScene(scene) {\n        this.scene = scene;\n    }\n    start() {\n        this.scene.init();\n        this.draw();\n    }\n    draw() {\n        this.scene.draw();\n        requestAnimationFrame(() => this.draw());\n    }\n}\nexports.Window = Window;\n\n\n//# sourceURL=webpack:///./src/Window.ts?");

/***/ }),

/***/ "./src/demos/cube/Application.ts":
/*!***************************************!*\
  !*** ./src/demos/cube/Application.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst SphereTracingScene_1 = __webpack_require__(/*! ./../../SphereTracingScene */ \"./src/SphereTracingScene.ts\");\nconst PULSAR = __webpack_require__(/*! ./../../Window */ \"./src/Window.ts\");\nclass Application {\n    main() {\n        const window = new PULSAR.Window('canvas');\n        window.setScene(new SphereTracingScene_1.SphereTracingScene(__webpack_require__(/*! ./shader/vertex-shader.vs */ \"./src/demos/cube/shader/vertex-shader.vs\"), __webpack_require__(/*! ./shader/fragment-shader.fs */ \"./src/demos/cube/shader/fragment-shader.fs\")));\n        window.start();\n    }\n}\nnew Application().main();\n\n\n//# sourceURL=webpack:///./src/demos/cube/Application.ts?");

/***/ }),

/***/ "./src/demos/cube/shader/fragment-shader.fs":
/*!**************************************************!*\
  !*** ./src/demos/cube/shader/fragment-shader.fs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nconst float width  = 640.0;\\nconst float height = 360.0;\\nconst float delta  = 0.06;\\nconst float PI =  3.14159265;\\n\\nconst vec3 lightDirection = vec3(-0.5, 0.5, -1.0);\\n\\nvec3 rotateX(vec3 pos, float alpha) {\\n    mat4 trans = mat4(\\n        1.0,        0.0,         0.0, 0.0,\\n\\t\\t0.0, cos(alpha), -sin(alpha), 0.0,\\n\\t\\t0.0, sin(alpha),  cos(alpha), 0.0,\\n\\t\\t0.0,        0.0,         0.0, 1.0\\n    );\\n\\n\\treturn vec3(trans * vec4(pos, 1.0));\\n}\\n\\nvec3 rotateY(vec3 pos, float alpha) {\\n\\tmat4 trans2= mat4(cos(alpha), 0.0, sin(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 1.0, 0.0, 0.0,\\n\\t\\t\\t\\t-sin(alpha), 0.0, cos(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 0.0, 0.0, 1.0);\\n\\n\\treturn vec3(trans2 * vec4(pos, 1.0));\\n}\\n\\nvec3 translate(vec3 position, vec3 translation) {\\n\\treturn position - translation;\\n}\\n\\nfloat udRoundBox(vec3 p, vec3 b, float r) {\\n    return length(max(abs(p) - b, 0.0)) - r;\\n}\\n\\nfloat sdSphere(vec3 p, float s) {\\n    return length(p) - s;\\n}\\n\\nfloat opS(float d1, float d2) {\\n    return max(-d1, d2);\\n}\\n\\nfloat opRep( vec3 p, vec3 c ) {\\n    vec3 q = mod(p, c) - 0.5 * c;\\n    return sdSphere(q, 0.5);\\n}\\n\\nfloat wonderCube(vec3 position) {\\n    vec3 disp = vec3(0.0,0.0,8.9);\\n    vec3 newPos = rotateY(rotateX(translate(position.xyz,disp),2.3*time),1.8*time);\\n    return opS( opRep(newPos, vec3(1.2,1.2,1.2)),udRoundBox(newPos, vec3(2.2,2.2,2.2), 0.5));\\n}\\n\\nfloat opCheapBend(vec3 p) {\\n    float c = cos(1.9*(1.0+sin(time*0.3))+p.y*0.19);\\n    float s = sin(1.9*(1.0+sin(time*0.3))+p.y*0.18);\\n    mat2  m = mat2(c,-s,s,c);\\n    vec3  q = vec3(m*p.xy,p.z);\\n    return wonderCube(q);\\n}\\n\\nfloat opU(float d1, float d2) {\\n    return min(d1,d2);\\n}\\n\\nfloat function(vec3 position) {\\n\\treturn opCheapBend(position);\\n}\\n\\nvec3 ray(vec3 start, vec3 direction, float t) {\\n\\treturn start + t * direction;\\n}\\n\\nvec3 gradient(vec3 position) {\\n\\treturn vec3(\\n        function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),\\n\\t    function(position + vec3(0.0, delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),\\n\\t    function(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta))\\n    );\\n}\\n\\n// FIXME: format correctly\\nvec4 plasma2() {\\n    float color1, color2, color;\\n\\tcolor1 =(sin(dot(gl_FragCoord.xy,vec2(sin(time*3.0),cos(time*3.0)))*0.02+time*3.0)+1.0)/2.0;\\n\\tvec2 center = vec2(640.0/2.0, 360.0/2.0) + vec2(640.0/2.0*sin(-time*3.0),360.0/2.0*cos(-time*3.0));\\n\\tcolor2 =(cos(length(gl_FragCoord.xy - center)*0.03)+1.0)/2.0;\\n\\tcolor = (color1+ color2)/2.0;\\n\\tfloat red = (cos(PI*color/0.5+time*2.0)+1.0)/2.0;\\n\\tfloat green = (sin(PI*color/0.5+time*2.0)+1.0)/2.0;\\n\\tfloat blue = (sin(+time*2.0)+1.0)/2.0;\\n\\treturn vec4(red,green,blue, 1.0);\\n}\\n\\n// optimize: dont compute const stuff in main but precompute\\nvoid main() {\\n\\tvec3 cameraPosition = vec3(0.0, 0.0, -1.4);\\n\\tfloat aspect = 360.0 / 640.0;\\n\\n\\tvec3 nearPlanePosition = vec3(\\n        (gl_FragCoord.x - 0.5 * width) / width * 2.0,\\n\\t\\t(gl_FragCoord.y - 0.5 * height) / height * 2.0 * aspect,\\n\\t\\t0.0\\n    );\\n\\n\\tvec3 viewDirection = normalize(nearPlanePosition - cameraPosition);\\n\\n    // optimization: start at near plane position\\n\\tfloat t = 0.0;\\n\\tfloat distance;\\n\\tvec3 position;\\n\\tvec4 color = plasma2();\\n\\tvec3 normal;\\n\\tvec3 up = normalize(vec3(0.0, 1.0, 0.0));\\n\\n\\tfor(int i = 0; i < 64; i++) {\\n\\t\\tposition = ray(cameraPosition,\\tviewDirection, t);\\n\\t\\tdistance = function(position);\\n\\n\\t\\tif(abs(distance) < 0.005) {\\n\\t\\t\\tnormal = normalize(gradient(position));\\n\\n\\t\\t\\tvec4 color1 = vec4(0.5, 0.9, 0.5, 1.0);\\n\\t\\t\\tvec4 color2 = vec4(1.0, 0.1, 0.1, 1.0);\\n\\n            // mix color based on normal and up vector\\n\\t\\t\\tvec4 color3 = mix(color2, color1, (1.0 + dot(up, normal)) / 2.0);\\n\\t\\t\\tcolor = color3 * max(dot(normal, normalize(lightDirection)), 0.0) + vec4(0.1, 0.1, 0.1, 1.0);\\n\\n\\t\\t\\t// specular color computation\\n\\t\\t\\tvec3 E = normalize(cameraPosition - position);\\n\\t\\t\\tvec3 R = reflect(normalize(-lightDirection), normal);\\n\\t\\t\\tfloat specular = pow(max(dot(R, E), 0.0), 8.0);\\n\\n            // Add specular color to diffuse color\\n\\t\\t\\tcolor += vec4(0.6, 0.4, 0.4, 0.0) * specular;\\n\\t\\t\\tbreak;\\n\\t\\t}\\n\\n\\t\\tt = t + distance;\\n\\t}\\n\\n\\tgl_FragColor = color;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/demos/cube/shader/fragment-shader.fs?");

/***/ }),

/***/ "./src/demos/cube/shader/vertex-shader.vs":
/*!************************************************!*\
  !*** ./src/demos/cube/shader/vertex-shader.vs ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec3 position;\\n\\nvoid main(void) {\\n    gl_Position = vec4(position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/demos/cube/shader/vertex-shader.vs?");

/***/ }),

/***/ "./src/shader/AbstractShader.ts":
/*!**************************************!*\
  !*** ./src/shader/AbstractShader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext_1 = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\nclass AbstractShader {\n    constructor(source) {\n        this.create();\n        this.addSource(source);\n        this.compile();\n    }\n    getInfoLog() {\n        return RenderingContext_1.context.getShaderInfoLog(this.shader);\n    }\n    getShader() {\n        return this.shader;\n    }\n    create() {\n        this.shader = RenderingContext_1.context.createShader(this.getShaderType());\n    }\n    addSource(source) {\n        RenderingContext_1.context.shaderSource(this.shader, source);\n    }\n    compile() {\n        RenderingContext_1.context.compileShader(this.shader);\n    }\n}\nexports.AbstractShader = AbstractShader;\n\n\n//# sourceURL=webpack:///./src/shader/AbstractShader.ts?");

/***/ }),

/***/ "./src/shader/FragmentShader.ts":
/*!**************************************!*\
  !*** ./src/shader/FragmentShader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext_1 = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\nconst AbstractShader_1 = __webpack_require__(/*! ./AbstractShader */ \"./src/shader/AbstractShader.ts\");\nclass FragmentxShader extends AbstractShader_1.AbstractShader {\n    getShaderType() {\n        return RenderingContext_1.context.FRAGMENT_SHADER;\n    }\n}\nexports.FragmentxShader = FragmentxShader;\n\n\n//# sourceURL=webpack:///./src/shader/FragmentShader.ts?");

/***/ }),

/***/ "./src/shader/ShaderProgram.ts":
/*!*************************************!*\
  !*** ./src/shader/ShaderProgram.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext_1 = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\nclass ShaderProgramm {\n    constructor(vertexShader, fragmentShader) {\n        const program = RenderingContext_1.context.createProgram();\n        RenderingContext_1.context.attachShader(program, vertexShader.getShader());\n        RenderingContext_1.context.attachShader(program, fragmentShader.getShader());\n        RenderingContext_1.context.linkProgram(program);\n        console.log(RenderingContext_1.context.getProgramInfoLog(program));\n        const result = RenderingContext_1.context.getProgramParameter(program, RenderingContext_1.context.LINK_STATUS);\n        if (!result) {\n            console.warn('link eror');\n        }\n        this.shaderProgram = program;\n    }\n    use() {\n        RenderingContext_1.context.useProgram(this.shaderProgram);\n    }\n    getProgram() {\n        return this.shaderProgram;\n    }\n}\nexports.ShaderProgramm = ShaderProgramm;\n\n\n//# sourceURL=webpack:///./src/shader/ShaderProgram.ts?");

/***/ }),

/***/ "./src/shader/SphereTracingShaderProgram.ts":
/*!**************************************************!*\
  !*** ./src/shader/SphereTracingShaderProgram.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext_1 = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\nconst FragmentShader_1 = __webpack_require__(/*! ./FragmentShader */ \"./src/shader/FragmentShader.ts\");\nconst ShaderProgram_1 = __webpack_require__(/*! ./ShaderProgram */ \"./src/shader/ShaderProgram.ts\");\nconst VertexShader_1 = __webpack_require__(/*! ./VertexShader */ \"./src/shader/VertexShader.ts\");\nclass SphereTracingShaderProgram extends ShaderProgram_1.ShaderProgramm {\n    constructor(vertexShaderSource, fragmentShaderSource) {\n        super(new VertexShader_1.VertexShader(vertexShaderSource), new FragmentShader_1.FragmentxShader(fragmentShaderSource));\n        this.timerUniformLocation = RenderingContext_1.context.getUniformLocation(this.getProgram(), 'time');\n    }\n    setTime(time) {\n        RenderingContext_1.context.uniform1f(this.timerUniformLocation, time);\n    }\n}\nexports.SphereTracingShaderProgram = SphereTracingShaderProgram;\n\n\n//# sourceURL=webpack:///./src/shader/SphereTracingShaderProgram.ts?");

/***/ }),

/***/ "./src/shader/VertexShader.ts":
/*!************************************!*\
  !*** ./src/shader/VertexShader.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext_1 = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\nconst AbstractShader_1 = __webpack_require__(/*! ./AbstractShader */ \"./src/shader/AbstractShader.ts\");\nclass VertexShader extends AbstractShader_1.AbstractShader {\n    getShaderType() {\n        return RenderingContext_1.context.VERTEX_SHADER;\n    }\n}\nexports.VertexShader = VertexShader;\n\n\n//# sourceURL=webpack:///./src/shader/VertexShader.ts?");

/***/ }),

/***/ "./src/vbo/VertexBufferObject.ts":
/*!***************************************!*\
  !*** ./src/vbo/VertexBufferObject.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst RenderingContext_1 = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\nclass VertexBufferObject {\n    constructor(vertices) {\n        const buffer = RenderingContext_1.context.createBuffer();\n        RenderingContext_1.context.bindBuffer(RenderingContext_1.context.ARRAY_BUFFER, buffer);\n        RenderingContext_1.context.bufferData(RenderingContext_1.context.ARRAY_BUFFER, vertices, RenderingContext_1.context.STATIC_DRAW);\n        RenderingContext_1.context.vertexAttribPointer(0, 3, RenderingContext_1.context.FLOAT, false, 0, 0);\n        RenderingContext_1.context.enableVertexAttribArray(0);\n        this.vbo = buffer;\n    }\n    draw() {\n        RenderingContext_1.context.bindBuffer(RenderingContext_1.context.ARRAY_BUFFER, this.vbo);\n        RenderingContext_1.context.drawArrays(RenderingContext_1.context.TRIANGLES, 0, 6);\n    }\n}\nexports.VertexBufferObject = VertexBufferObject;\n\n\n//# sourceURL=webpack:///./src/vbo/VertexBufferObject.ts?");

/***/ })

/******/ });