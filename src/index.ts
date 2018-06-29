import { FragmentxShader } from "./shader/FragmentShader";
import { VertexShader } from "./shader/VertexShader";

declare function require(name: string): any;

export let gl: WebGLRenderingContext;
let timer;
let shaderProgram: WebGLProgram;
let vbo;

function start() {
    const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

    try {
        gl = canvas.getContext("webgl");
    } catch (e) {
        console.warn("Could not retrieve WebGL Context.");
    }

    const vertexShader2: VertexShader = new VertexShader(require("./vertex-shader.vs"));
    console.log(vertexShader2.getInfoLog());

    const fragmentShader2: FragmentxShader = new FragmentxShader(require("./fragment-shader.fs"));
    console.log(fragmentShader2.getInfoLog());

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader2.getShader());
    gl.attachShader(shaderProgram, fragmentShader2.getShader());
    gl.linkProgram(shaderProgram);
    console.log(gl.getProgramInfoLog(shaderProgram));

    const result = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);

    if (!result) {
        console.warn("link eror");
    }

    gl.useProgram(shaderProgram);

    timer = gl.getUniformLocation(shaderProgram, "time");

    gl.clearColor(0.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const vertices = new Float32Array([
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        -1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
    ]);

    vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    if (gl) {
        startStop();
    }
}

let runss = true;
let animator;
function startStop() {
    runss = !runss;
    if (runss) {
        clearInterval(animator);

    } else {
        animator = setInterval(() => animation(), 40);
    }
}

let time = 0;

function animation() {
    gl.clearColor(0.1, 0.4, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT |
        gl.DEPTH_BUFFER_BIT);
    time += 0.01;
    gl.uniform1f(timer, time);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

start();
