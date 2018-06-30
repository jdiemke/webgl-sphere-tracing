import { FullscreenQuad } from './FullscreenQuad';
import { CubeShaderProgram } from './shader/CubeShaderProgram';

export let gl: WebGLRenderingContext;
const startTime = Date.now();
let shaderProgram: CubeShaderProgram;
let fullscreenQuad: FullscreenQuad;

function start() {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;

    try {
        gl = canvas.getContext('webgl');
    } catch (e) {
        console.warn('Could not retrieve WebGL Context.');
    }

    shaderProgram = new CubeShaderProgram();
    shaderProgram.use();

    fullscreenQuad = new FullscreenQuad();

    setInterval(() => animation(), 40);
}

function animation() {
    shaderProgram.setTime((Date.now() - startTime) * 0.0002);
    fullscreenQuad.draw();
}

start();
