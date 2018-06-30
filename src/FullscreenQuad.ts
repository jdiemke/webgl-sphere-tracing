import { VertexBufferObject } from './vbo/VertexBufferObject';

export class FullscreenQuad {

    private vbo: VertexBufferObject;

    public constructor() {
        const quadrilateralVertices = new Float32Array([
            -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
            1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,
        ]);

        this.vbo = new VertexBufferObject(quadrilateralVertices);
    }

    public draw(): void {
        this.vbo.draw();
    }

}
