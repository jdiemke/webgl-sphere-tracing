import { gl } from "../index";
import { AbstractShader } from "./AbstractShader";

export class VertexShader extends AbstractShader {

    protected getShaderType(): number {
        return gl.VERTEX_SHADER;
    }

}
