import { context as gl} from './../RenderingContext';

export class VertexBufferObject {

    private vbo: WebGLBuffer;

    public constructor(vertices: Float32Array) {
        const buffer: WebGLBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);
        this.vbo = buffer;
    }

    public draw(): void {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

}
