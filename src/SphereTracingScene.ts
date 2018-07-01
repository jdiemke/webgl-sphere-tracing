import { FullscreenQuad } from './FullscreenQuad';
import { AbstractScene } from './Scene';
import { SphereTracingShaderProgram } from './shader/SphereTracingShaderProgram';

export class SphereTracingScene extends AbstractScene {

    private shaderProgram: SphereTracingShaderProgram;
    private fullscreenQuad: FullscreenQuad;
    private startTime = Date.now();

    constructor(vertexShaderSource: string, fragmentShaderSource: string) {
        super();
        this.shaderProgram = new SphereTracingShaderProgram(vertexShaderSource, fragmentShaderSource);
    }

    public init(): void {
        this.shaderProgram.use();
        this.fullscreenQuad = new FullscreenQuad();
    }

    public draw(): void {
        this.shaderProgram.setTime((Date.now() - this.startTime) * 0.0002);
        this.fullscreenQuad.draw();
    }

}
