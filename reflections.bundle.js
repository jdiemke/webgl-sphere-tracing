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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demos/reflections/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/FullscreenQuad.ts":
/*!*******************************!*\
  !*** ./src/FullscreenQuad.ts ***!
  \*******************************/
/*! exports provided: FullscreenQuad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FullscreenQuad\", function() { return FullscreenQuad; });\n/* harmony import */ var _vbo_VertexBufferObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vbo/VertexBufferObject */ \"./src/vbo/VertexBufferObject.ts\");\n\nclass FullscreenQuad {\n    constructor() {\n        const quadrilateralVertices = new Float32Array([\n            -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0, -1.0,\n            1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,\n        ]);\n        this.vbo = new _vbo_VertexBufferObject__WEBPACK_IMPORTED_MODULE_0__[\"VertexBufferObject\"](quadrilateralVertices);\n    }\n    draw() {\n        this.vbo.draw();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/FullscreenQuad.ts?");

/***/ }),

/***/ "./src/RenderingContext.ts":
/*!*********************************!*\
  !*** ./src/RenderingContext.ts ***!
  \*********************************/
/*! exports provided: context, setCurrentContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"context\", function() { return context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentContext\", function() { return setCurrentContext; });\n/**\n * Stores the currently active rendering context in a global variable.\n */\nlet context = null;\nfunction setCurrentContext(currentContext) {\n    context = currentContext;\n}\n\n\n//# sourceURL=webpack:///./src/RenderingContext.ts?");

/***/ }),

/***/ "./src/Scene.ts":
/*!**********************!*\
  !*** ./src/Scene.ts ***!
  \**********************/
/*! exports provided: AbstractScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AbstractScene\", function() { return AbstractScene; });\nclass AbstractScene {\n}\n\n\n//# sourceURL=webpack:///./src/Scene.ts?");

/***/ }),

/***/ "./src/SphereTracingScene.ts":
/*!***********************************!*\
  !*** ./src/SphereTracingScene.ts ***!
  \***********************************/
/*! exports provided: SphereTracingScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SphereTracingScene\", function() { return SphereTracingScene; });\n/* harmony import */ var _FullscreenQuad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullscreenQuad */ \"./src/FullscreenQuad.ts\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.ts\");\n/* harmony import */ var _shader_SphereTracingShaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/SphereTracingShaderProgram */ \"./src/shader/SphereTracingShaderProgram.ts\");\n\n\n\nclass SphereTracingScene extends _Scene__WEBPACK_IMPORTED_MODULE_1__[\"AbstractScene\"] {\n    constructor(vertexShaderSource, fragmentShaderSource) {\n        super();\n        this.startTime = Date.now();\n        this.shaderProgram = new _shader_SphereTracingShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"SphereTracingShaderProgram\"](vertexShaderSource, fragmentShaderSource);\n    }\n    init() {\n        this.shaderProgram.use();\n        this.fullscreenQuad = new _FullscreenQuad__WEBPACK_IMPORTED_MODULE_0__[\"FullscreenQuad\"]();\n    }\n    draw() {\n        const elapsedTime = (Date.now() - this.startTime) * 0.0002;\n        this.shaderProgram.use();\n        this.shaderProgram.setTime(elapsedTime);\n        this.fullscreenQuad.draw();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/SphereTracingScene.ts?");

/***/ }),

/***/ "./src/Window.ts":
/*!***********************!*\
  !*** ./src/Window.ts ***!
  \***********************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingContext */ \"./src/RenderingContext.ts\");\n\nclass Window {\n    constructor(elementId) {\n        const canvas = document.getElementById(elementId);\n        const gl = canvas.getContext('webgl');\n        if (gl === null) {\n            throw new Error('Could not initialize WebGL rendering context.');\n        }\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"setCurrentContext\"](gl);\n    }\n    setScene(scene) {\n        this.scene = scene;\n    }\n    start() {\n        this.scene.init();\n        this.draw();\n    }\n    draw() {\n        this.scene.draw();\n        requestAnimationFrame(() => this.draw());\n    }\n}\n\n\n//# sourceURL=webpack:///./src/Window.ts?");

/***/ }),

/***/ "./src/demos/reflections/Application.ts":
/*!**********************************************!*\
  !*** ./src/demos/reflections/Application.ts ***!
  \**********************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Application\", function() { return Application; });\n/* harmony import */ var _SphereTracingScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../SphereTracingScene */ \"./src/SphereTracingScene.ts\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Window */ \"./src/Window.ts\");\n\n\nclass Application {\n    main() {\n        const window = new _Window__WEBPACK_IMPORTED_MODULE_1__[\"Window\"]('canvas');\n        window.setScene(new _SphereTracingScene__WEBPACK_IMPORTED_MODULE_0__[\"SphereTracingScene\"](__webpack_require__(/*! ./shader/vertex-shader.vs */ \"./src/demos/reflections/shader/vertex-shader.vs\"), __webpack_require__(/*! ./shader/fragment-shader.fs */ \"./src/demos/reflections/shader/fragment-shader.fs\")));\n        window.start();\n    }\n}\nnew Application().main();\n\n\n//# sourceURL=webpack:///./src/demos/reflections/Application.ts?");

/***/ }),

/***/ "./src/demos/reflections/main.ts":
/*!***************************************!*\
  !*** ./src/demos/reflections/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application */ \"./src/demos/reflections/Application.ts\");\n\nnew _Application__WEBPACK_IMPORTED_MODULE_0__[\"Application\"]().main();\n\n\n//# sourceURL=webpack:///./src/demos/reflections/main.ts?");

/***/ }),

/***/ "./src/demos/reflections/shader/fragment-shader.fs":
/*!*********************************************************!*\
  !*** ./src/demos/reflections/shader/fragment-shader.fs ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nprecision mediump float;\\n\\nuniform float time;\\n\\nconst float width  = 640.0;\\nconst float height = 360.0;\\nconst float delta  = 0.001;\\nconst float PI =  3.14159265;\\n\\nfloat sphere(vec3 position, float r)\\n{\\n        return length(position) - r ;//+ 0.53*sin(position.y*1.1 + mod(time*0.2, 2.0*PI)-PI)\\n        //+ 0.17*sin(position.z*2.2 + mod(time*0.02, 2.0*PI)-PI);\\n}\\n\\n\\nvec3 rotateX(vec3 pos, float alpha) {\\n\\tmat4 trans= mat4(1.0, 0.0, 0.0, 0.0,\\n\\t\\t\\t\\t0.0, cos(alpha), -sin(alpha), 0.0,\\n\\t\\t\\t\\t0.0, sin(alpha), cos(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 0.0, 0.0, 1.0);\\n\\n\\n\\treturn vec3(trans * vec4(pos, 1.0));\\n}\\n\\nvec3 rotateY(vec3 pos, float alpha) {\\n\\n\\n\\tmat4 trans2= mat4(cos(alpha), 0.0, sin(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 1.0, 0.0, 0.0,\\n\\t\\t\\t\\t-sin(alpha), 0.0, cos(alpha), 0.0,\\n\\t\\t\\t\\t0.0, 0.0, 0.0, 1.0);\\n\\n\\treturn vec3(trans2 * vec4(pos, 1.0));\\n}\\n\\nvec3 translate(vec3 position, vec3 translation) {\\n\\treturn position - translation;\\n}\\n\\n\\nfloat cube(vec3 pos,float size){\\n    return max(max(abs(pos.x)-size,abs(pos.y)-size),abs(pos.z)-size) ;//+ 0.17*sin(pos.z*2.2 + mod(time*0.02, 2.0*PI)-PI);\\n}\\n\\nfloat sdTorus( vec3 p, vec2 t )\\n{\\n  vec2 q = vec2(length(p.xz)-t.x,p.y);\\n  return length(q)-t.y;\\n}\\n\\nfloat udRoundBox( vec3 p, vec3 b, float r )\\n{\\n  return length(max(abs(p)-b,0.0))-r;\\n}\\n\\nfloat sdSphere( vec3 p, float s )\\n{\\n  return length(p)-s;\\n}\\n/*\\nfloat function(vec3 position) {\\n\\n\\n\\treturn  sdTorus(\\n\\n\\t\\t\\trotateX(\\n\\t\\t\\trotateY(\\n\\n\\t\\t\\ttranslate(position.xyz,vec3(0.0,0.0,20.0))\\n\\t\\t\\t,\\n\\t\\t\\ttime* 2.3),position.x*0.8 + time* 0.1)\\n\\n\\t\\t\\t, vec2(4.0,2.0));\\n}*/\\n\\n\\n\\n\\nfloat opS( float d1, float d2 )\\n{\\n    return max(-d1,d2);\\n}\\n\\n\\n\\tvec3 opRep2( vec3 p, vec3 c )\\n{\\n   return mod(p,c)-0.5*c;\\n\\n}\\n\\n\\n\\n\\n\\nfloat opU( float d1, float d2 )\\n{\\n    return min(d1,d2);\\n}\\n\\n\\n\\nfloat opDisplace( vec3 p )\\n{\\n    float d1 = sdTorus(p, vec2(4.0,2.0));\\n    float d2 = (sin(p.x*3.0) + sin(p.y*5.0)) *0.2;\\n    return d1+d2;\\n}\\n\\n\\n\\n\\nfloat length2(vec2 vector, float n) {\\n\\n return pow(pow(vector.x,n)+pow(vector.y,n),(1.0/n));\\n}\\n\\nfloat sdTorus82( vec3 p, vec2 t )\\n{\\n  vec2 q = vec2(length2(p.xz,2.0)-t.x,p.y);\\n  return length2(q,8.0)-t.y;\\n}\\n\\nfloat sdBox( vec3 p, vec3 b )\\n{\\n  vec3  di = abs(p) - b;\\n  float mc = max(di.x, max(di.y,di.z));\\n  return min(mc,length(max(di,0.0)));\\n}\\n\\nfloat sdCross( in vec3 p )\\n{\\n  float da = udRoundBox(p.xyz,vec3(3.0,0.5,0.5), 0.2);\\n  float db = udRoundBox(p.yzx,vec3(0.5,3.0,0.5), 0.2);\\n  float dc = udRoundBox(p.zxy,vec3(0.5,0.5,3.0), 0.2);\\n  return min(da,min(db,dc));\\n}\\nint material = 0;\\n\\nfloat opRep( vec3 p, vec3 c )\\n{\\n    vec3 q = mod(p,c)-0.5*c;\\n    return sdSphere( q ,0.1);\\n}\\nvec3 lightPosition = vec3(0.0,0.0,-1.5);\\nfloat function(vec3 position) {\\n\\n\\tvec3 pos = rotateY(rotateX(position,time*0.7),time*0.8)+vec3(-0.6,0.6,-0.6)+vec3(60.0*sin(time*0.1),0.0,0.0);\\n\\n\\tfloat cc = 6.;\\n\\tvec3 q = mod(pos,cc)-0.5*cc;\\n\\tfloat b =// udRoundBox(q, vec3(1.0,1.0,1.0), 0.2)\\nsdCross(q);\\n\\nvec3 pos2 =rotateY(rotateX(position+vec3(0.0,0.0,0.2),time*1.7),time*1.8);\\n\\n\\n\\nfloat a = opS( opRep(pos2, vec3(0.21)),udRoundBox(pos2, vec3(0.4,0.4,0.4), 0.05));\\n\\n//sphere(position-vec3(0.0,0.0,0.5), 0.7));\\n\\nfloat c = udRoundBox(q, vec3(1.0,1.0,1.0), 0.2);\\n\\nmaterial = 0;\\nif( c < b)\\nmaterial = 1;\\nb= min(b,c);\\n\\nif(a < b)\\nmaterial = 2;\\n\\nb =min(b, a);\\n\\n;//+0.07*perlin(q*3.0) ;\\n\\n\\n\\t//if((mod(pos,cc)-0.5*cc).x> 0.3)\\n\\n\\n\\treturn b;\\n\\n}\\n\\n\\n\\n\\n\\nvec3 ray(vec3 start, vec3 direction, float t) {\\n\\treturn start + t * direction;\\n}\\n\\nvec3 gradient(vec3 position) {\\n\\n\\treturn vec3(function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),\\n\\tfunction(position + vec3(0.0,delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),\\n\\tfunction(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta)));\\n\\n\\n}\\n\\nvec4 plasma(vec2 pos) {\\n vec2 p = -1.0 +2.0 * pos / vec2(640, 360);\\nfloat cossin1 = ((cos(p.x * 2.50 +time*2.5) +sin(p.y*3.70-time*4.5) +sin(time*2.5))+3.0)/6.0;\\nfloat cossin2 = (cos(p.y * 2.30 +time*3.5) +sin(p.x*2.90-time*1.5) +cos(time)+3.0)/6.0;\\nfloat cossin3 = (cos(p.x * 3.10 +time*5.5) +0.5*sin(p.y*2.30-time) +cos(time*3.5)+3.0)/6.0;\\nreturn vec4(vec3(cossin1, cossin2, cossin3)*0.6, 1.0);\\n\\n}\\n\\n\\n\\nfloat aoScale = 0.3; // smaller aoScale = more AO\\nfloat computeAO(vec3 position, vec3 normal) {\\n\\nfloat sum = 0.0;\\nfloat stepSize = 0.015;\\nfloat t = stepSize;\\n\\n\\tfor(int i=0; i < 8; i++) {\\n\\t\\tposition = ray(position, normal, t);\\n\\t\\tsum += max(function(position),0.0);\\n\\t\\tt+=stepSize;\\n\\t}\\n\\treturn 1.0-clamp(1.0 -(sum * aoScale),0.0, 1.0);\\n}\\n\\nfloat computeShadow(vec3 pos) {\\n\\n\\tfloat t = 0.0;\\n\\tfloat distance;\\nvec3 position;\\nfloat res = 1.0;\\nfloat k = 10.0;\\n\\tfor(int i=0; i < 64; i++) {\\n\\t\\tposition = ray(pos,normalize(lightPosition-pos) , t);\\n\\t\\tdistance = function(position);\\n\\n\\t\\tif(distance < 0.007) {\\n\\t\\t\\tbreak;\\n\\n\\t\\t}\\n\\t\\tres = min(res, k*distance/t);\\n\\t\\tt = t + distance ;\\n\\t}\\n\\tif(length(pos - lightPosition)+0.0 < t) return res;\\n\\treturn 0.0;\\n}\\n\\nvec4 computeReflection(vec3 pos, vec3 viewDirection) {\\n\\tfloat t = 0.0;\\n\\tfloat distance;\\n\\tvec3 position;\\n       vec3 cameraPosition = pos;\\n\\tvec4 color = vec4(0.0,0.0,0.0,1.0);//vec4(0.0,0.2,0.0,1);\\n\\tvec3 normal;\\n\\tvec3 up = normalize(vec3(-0.0, 1.0,0.0));\\n\\n\\tfor(int i=0; i < 35; i++) {\\n\\t\\tposition = ray(cameraPosition,\\tviewDirection, t);\\n\\t\\tdistance = function(position);\\n\\n\\n\\n\\t\\tif(distance < 0.04) {\\n\\n\\n\\t\\tnormal = normalize(gradient(position));\\n\\n\\n\\n\\t\\t\\tfloat ambient = max(dot(normal, normalize(lightPosition-position)),0.0) ;\\n\\n\\t\\t\\t//specular\\n\\t\\t\\tvec3 E = normalize(cameraPosition - position);\\n\\t\\t\\tvec3 R = reflect(-normalize(lightPosition-position), normal);\\n\\n\\n\\t\\t\\tfloat specular = pow( max(dot(R, E), 0.0),\\n\\t\\t                 8.0);\\n\\n\\t\\t\\t\\t\\t\\tfloat alpha = 1.0-clamp( pow(length(position-vec3(0.0,0.0,1.0)),2.0)*0.0016,0.0, 1.0);\\n\\n\\n\\n\\t\\t\\tvec3 mycolor = vec3(0.9, 0.4, 0.4);\\n\\n\\t\\t\\tif(material == 1)\\n\\t\\t\\t\\tmycolor = vec3(0.4, 0.9, 0.4);\\n\\n\\t\\t\\tcolor = vec4((  0.6* mycolor)*(0.3+ambient*0.7),1.0);\\n\\t\\t\\tcolor += vec4(vec3(1.0)*1.0*specular, 1.0);\\n\\n\\t\\t\\tcolor = color * alpha + vec4(0.0,0.0,0.0,1.0) *(1.0 -alpha);\\n\\n\\n\\t\\t\\tbreak;\\n\\t\\t}\\n\\t\\t//color += 0.6*vec4(vec3(0.4, 0.9,0.1)*pow(float(i)/64.0*2.6, 2.0) *1.0,1.0);\\n\\t\\t\\tt = t + distance * 1.0;\\n\\t}\\n\\n\\n\\treturn color;\\n}\\n#define pi 3.14159265\\nfloat perlin(vec3 p) {\\n\\tvec3 i = floor(p);\\n\\tvec4 a = dot(i, vec3(1., 57., 21.)) + vec4(0., 57., 21., 78.);\\n\\tvec3 f = cos((p-i)*pi)*(-.5)+.5;\\n\\ta = mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)), f.x);\\n\\ta.xy = mix(a.xz, a.yw, f.y);\\n\\treturn mix(a.x, a.y, f.z);\\n}\\n\\nvoid main()\\n{\\n\\tvec3 cameraPosition = vec3(0.0, 0.0, -1.2);\\n\\n\\tfloat aspect = 360.0/640.0;\\n\\tvec3 nearPlanePosition = vec3(((gl_FragCoord.x/width)-0.5),\\n\\t\\t\\t\\t\\t\\t\\t      ((gl_FragCoord.y/height)-0.5)*aspect,\\n\\t\\t\\t\\t\\t\\t\\t       -1.0);\\n\\n\\tvec3 viewDirection = normalize(nearPlanePosition - cameraPosition);\\n\\tfloat t = 0.0;\\nfloat l=length(nearPlanePosition - cameraPosition);\\n\\n\\t t =l;\\n\\tfloat distance;\\n\\tvec3 position;\\n\\tvec4 color =vec4(0.0,0.0,0.0,1.0);\\n\\tvec3 normal;\\n\\tvec3 up = normalize(vec3(-0.0, 1.0,0.0));\\n\\n\\tfor(int i=0; i < 64; i++) {\\n\\t\\tposition = ray(cameraPosition,\\tviewDirection, t);\\n\\t\\tdistance = function(position);\\n\\n\\n\\n\\t\\tif(distance < 0.009) {\\n\\n\\n\\t\\t\\tnormal = normalize(gradient(position));\\n\\n\\n\\n\\t\\t\\tfloat ambient = max(dot(normal, normalize(lightPosition-position)),0.0) ;\\n\\n\\t\\t\\t//specular\\n\\t\\t\\tvec3 E = normalize(cameraPosition - position);\\n\\t\\t\\tvec3 R = reflect(-normalize(lightPosition-position), normal);\\n\\n\\n\\t\\t\\tfloat specular = pow( max(dot(R, E), 0.0),\\n\\t\\t                 6.0);\\n\\n\\t\\t\\tfloat alpha = 1.0-clamp( pow(length(position-vec3(0.0,0.0,1.0)),2.0)*0.0016,0.0, 1.0);\\n\\n\\n\\t\\t\\tvec3 mycolor = vec3(255.0/255.0,127.0/255.0,36.0/255.0);\\n\\n\\t\\t\\tif(material == 1) mycolor = vec3(0.45, 0.9, 0.45);\\n\\t\\t\\tif(material == 2) mycolor = vec3(0.8, 0.8, 1.0) ;\\n\\t\\t\\tvec4 refl = computeReflection(position+normal *0.04, reflect(viewDirection, normal));\\n\\t\\t\\t\\t\\t\\tfloat shad = 1.0;//computeShadow(position+normalize(lightPosition-position)*0.008);\\n\\t\\t\\tcolor = vec4(( refl.xyz*0.5 + 0.6* mycolor)*(0.4+ambient*0.7)*shad,1.0);\\n\\n\\t\\t\\tcolor += vec4(vec3(0.7)*1.0*specular, 1.0);\\n\\n\\t\\t\\tcolor = color * alpha + vec4(0.0,0.0,0.0,1.0) *(1.0 -alpha);\\n\\n\\n\\t\\t\\tbreak;\\n\\n\\n\\t\\t}\\n\\n\\n\\t\\t\\tt = t + distance * 1.0;\\n\\t}\\n\\n\\n\\tgl_FragColor = vec4(vec3(((color-0.5)*1.7+0.5)+0.2),1.0);\\n\\t//discard;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/demos/reflections/shader/fragment-shader.fs?");

/***/ }),

/***/ "./src/demos/reflections/shader/vertex-shader.vs":
/*!*******************************************************!*\
  !*** ./src/demos/reflections/shader/vertex-shader.vs ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec3 position;\\n\\nvoid main(void) {\\n    gl_Position = vec4(position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/demos/reflections/shader/vertex-shader.vs?");

/***/ }),

/***/ "./src/shader/AbstractShader.ts":
/*!**************************************!*\
  !*** ./src/shader/AbstractShader.ts ***!
  \**************************************/
/*! exports provided: AbstractShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AbstractShader\", function() { return AbstractShader; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\n\nclass AbstractShader {\n    constructor(source) {\n        this.create();\n        this.addSource(source);\n        this.compile();\n        console.warn(this.getInfoLog());\n    }\n    getInfoLog() {\n        return _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].getShaderInfoLog(this.shader);\n    }\n    getShader() {\n        return this.shader;\n    }\n    create() {\n        this.shader = _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].createShader(this.getShaderType());\n    }\n    addSource(source) {\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].shaderSource(this.shader, source);\n    }\n    compile() {\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].compileShader(this.shader);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shader/AbstractShader.ts?");

/***/ }),

/***/ "./src/shader/FragmentShader.ts":
/*!**************************************!*\
  !*** ./src/shader/FragmentShader.ts ***!
  \**************************************/
/*! exports provided: FragmentxShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FragmentxShader\", function() { return FragmentxShader; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\n/* harmony import */ var _AbstractShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractShader */ \"./src/shader/AbstractShader.ts\");\n\n\nclass FragmentxShader extends _AbstractShader__WEBPACK_IMPORTED_MODULE_1__[\"AbstractShader\"] {\n    getShaderType() {\n        return _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].FRAGMENT_SHADER;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shader/FragmentShader.ts?");

/***/ }),

/***/ "./src/shader/ShaderProgram.ts":
/*!*************************************!*\
  !*** ./src/shader/ShaderProgram.ts ***!
  \*************************************/
/*! exports provided: ShaderProgramm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShaderProgramm\", function() { return ShaderProgramm; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\n\nclass ShaderProgramm {\n    constructor(vertexShader, fragmentShader) {\n        const program = _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].createProgram();\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].attachShader(program, vertexShader.getShader());\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].attachShader(program, fragmentShader.getShader());\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].linkProgram(program);\n        console.log(_RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].getProgramInfoLog(program));\n        const result = _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].getProgramParameter(program, _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].LINK_STATUS);\n        if (!result) {\n            console.warn('link eror');\n        }\n        this.shaderProgram = program;\n    }\n    use() {\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].useProgram(this.shaderProgram);\n    }\n    getProgram() {\n        return this.shaderProgram;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shader/ShaderProgram.ts?");

/***/ }),

/***/ "./src/shader/SphereTracingShaderProgram.ts":
/*!**************************************************!*\
  !*** ./src/shader/SphereTracingShaderProgram.ts ***!
  \**************************************************/
/*! exports provided: SphereTracingShaderProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SphereTracingShaderProgram\", function() { return SphereTracingShaderProgram; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\n/* harmony import */ var _FragmentShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FragmentShader */ \"./src/shader/FragmentShader.ts\");\n/* harmony import */ var _ShaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShaderProgram */ \"./src/shader/ShaderProgram.ts\");\n/* harmony import */ var _VertexShader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VertexShader */ \"./src/shader/VertexShader.ts\");\n\n\n\n\nclass SphereTracingShaderProgram extends _ShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"ShaderProgramm\"] {\n    constructor(vertexShaderSource, fragmentShaderSource) {\n        super(new _VertexShader__WEBPACK_IMPORTED_MODULE_3__[\"VertexShader\"](vertexShaderSource), new _FragmentShader__WEBPACK_IMPORTED_MODULE_1__[\"FragmentxShader\"](fragmentShaderSource));\n        this.timerUniformLocation = _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].getUniformLocation(this.getProgram(), 'time');\n    }\n    setTime(time) {\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].uniform1f(this.timerUniformLocation, time);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shader/SphereTracingShaderProgram.ts?");

/***/ }),

/***/ "./src/shader/VertexShader.ts":
/*!************************************!*\
  !*** ./src/shader/VertexShader.ts ***!
  \************************************/
/*! exports provided: VertexShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VertexShader\", function() { return VertexShader; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\n/* harmony import */ var _AbstractShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractShader */ \"./src/shader/AbstractShader.ts\");\n\n\nclass VertexShader extends _AbstractShader__WEBPACK_IMPORTED_MODULE_1__[\"AbstractShader\"] {\n    getShaderType() {\n        return _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].VERTEX_SHADER;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shader/VertexShader.ts?");

/***/ }),

/***/ "./src/vbo/VertexBufferObject.ts":
/*!***************************************!*\
  !*** ./src/vbo/VertexBufferObject.ts ***!
  \***************************************/
/*! exports provided: VertexBufferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VertexBufferObject\", function() { return VertexBufferObject; });\n/* harmony import */ var _RenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RenderingContext */ \"./src/RenderingContext.ts\");\n\nclass VertexBufferObject {\n    constructor(vertices) {\n        const buffer = _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].createBuffer();\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].bindBuffer(_RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].ARRAY_BUFFER, buffer);\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].bufferData(_RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].ARRAY_BUFFER, vertices, _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].STATIC_DRAW);\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].vertexAttribPointer(0, 3, _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].FLOAT, false, 0, 0);\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].enableVertexAttribArray(0);\n        this.vbo = buffer;\n    }\n    draw() {\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].bindBuffer(_RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].ARRAY_BUFFER, this.vbo);\n        _RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].drawArrays(_RenderingContext__WEBPACK_IMPORTED_MODULE_0__[\"context\"].TRIANGLES, 0, 6);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/vbo/VertexBufferObject.ts?");

/***/ })

/******/ });