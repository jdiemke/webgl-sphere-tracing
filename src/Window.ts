import * as RenderingContext from './RenderingContext';
import { AbstractScene } from './Scene';

export class Window {

    private scene: AbstractScene;

    public constructor(elementId: string) {
        const canvas: HTMLCanvasElement = document.getElementById(elementId) as HTMLCanvasElement;
        const gl: WebGLRenderingContext = canvas.getContext('webgl');

        if (gl === null) {
            throw new Error('Could not initialize WebGL rendering context.');
        }

        RenderingContext.setCurrentContext(gl);
    }

    public addScene(scene: AbstractScene): void {
        this.scene = scene;
    }

    public start(): void {
        this.scene.init();
        this.draw();
    }

    private draw(): void {
        this.scene.draw();
        requestAnimationFrame(() => this.draw());
    }

}
