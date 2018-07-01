import { context as gl} from './../RenderingContext';
import { FragmentxShader } from './FragmentShader';
import { ShaderProgramm } from './ShaderProgram';
import { VertexShader } from './VertexShader';

export class SphereTracingShaderProgram extends ShaderProgramm {

    private timerUniformLocation: WebGLUniformLocation;

    public constructor(vertexShaderSource: string, fragmentShaderSource: string) {
        super(new VertexShader(vertexShaderSource), new FragmentxShader(fragmentShaderSource));
        this.timerUniformLocation = gl.getUniformLocation(this.getProgram(), 'time');
    }

    public setTime(time: number): void {
        gl.uniform1f(this.timerUniformLocation, time);
    }

}
