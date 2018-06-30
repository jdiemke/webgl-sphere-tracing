import { gl } from '..';
import { FragmentxShader } from './FragmentShader';
import { ShaderProgramm } from './ShaderProgram';
import { VertexShader } from './VertexShader';

declare function require(name: string): any;

export class CubeShaderProgram extends ShaderProgramm {

    private timerUniformLocation: WebGLUniformLocation;

    public constructor() {
        super(
            new VertexShader(require('./../vertex-shader.vs')),
            new FragmentxShader(require('./../fragment-shader.fs'))
        );

        this.timerUniformLocation = gl.getUniformLocation(this.getProgram(), 'time');
    }

    public setTime(time: number): void {
        gl.uniform1f(this.timerUniformLocation, time);
    }

}
