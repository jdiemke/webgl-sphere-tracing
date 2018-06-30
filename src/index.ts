import { CubeShaderProgram } from './shader/CubeShaderProgram';
import { VertexBufferObject } from './vbo/VertexBufferObject';

export let gl: WebGLRenderingContext;
const startTime = Date.now();
let shaderProgram: CubeShaderProgram;

function start() {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;

    try {
        gl = canvas.getContext('webgl');
    } catch (e) {
        console.warn('Could not retrieve WebGL Context.');
    }

    shaderProgram = new CubeShaderProgram();
    shaderProgram.use();

    gl.clearColor(0.1, 0.4, 0.1, 1.0);

    const vertices = new Float32Array([
        -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,
    ]);

    new VertexBufferObject(vertices).bind();

    setInterval(() => animation(), 40);
}

function animation() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    shaderProgram.setTime((Date.now() - startTime) * 0.0002);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

start();
