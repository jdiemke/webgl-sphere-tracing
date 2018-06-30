import { FullscreenQuad } from './FullscreenQuad';
import { AbstractScene } from './Scene';
import { CubeShaderProgram } from './shader/CubeShaderProgram';

export class CubeScene extends AbstractScene {

    private shaderProgram: CubeShaderProgram;
    private fullscreenQuad: FullscreenQuad;
    private startTime = Date.now();

    public init(): void {
        this.shaderProgram = new CubeShaderProgram();
        this.shaderProgram.use();
        this.fullscreenQuad = new FullscreenQuad();
    }

    public draw(): void {
        this.shaderProgram.setTime((Date.now() - this.startTime) * 0.0002);
        this.fullscreenQuad.draw();
    }

}
