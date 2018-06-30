import { gl } from '../index';
import { FragmentxShader } from './FragmentShader';
import { VertexShader } from './VertexShader';

export class ShaderProgramm {

    private shaderProgram: WebGLProgram;

    public constructor(vertexShader: VertexShader, fragmentShader: FragmentxShader) {
        const program: WebGLProgram = gl.createProgram();

        gl.attachShader(program, vertexShader.getShader());
        gl.attachShader(program, fragmentShader.getShader());

        gl.linkProgram(program);

        console.log(gl.getProgramInfoLog(program));

        const result = gl.getProgramParameter(program, gl.LINK_STATUS);

        if (!result) {
            console.warn('link eror');
        }

        this.shaderProgram = program;
    }

    public use(): void {
        gl.useProgram(this.shaderProgram);
    }

    public getProgram(): WebGLProgram {
        return this.shaderProgram;
    }

}
