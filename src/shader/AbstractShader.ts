import { context as gl} from './../RenderingContext';

export abstract class AbstractShader {

    private shader: WebGLShader;

    public constructor(source: string) {
        this.create();
        this.addSource(source);
        this.compile();
    }

    public getInfoLog(): string {
        return gl.getShaderInfoLog(this.shader);
    }

    public getShader(): WebGLShader {
        return this.shader;
    }

    protected abstract getShaderType(): number;

    private create(): void {
        this.shader = gl.createShader(this.getShaderType());
    }

    private addSource(source: string): void {
        gl.shaderSource(this.shader, source);
    }

    private compile(): void {
        gl.compileShader(this.shader);
    }

}
