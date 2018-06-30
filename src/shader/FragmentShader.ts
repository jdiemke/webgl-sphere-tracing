import { gl } from '../index';
import { AbstractShader } from './AbstractShader';

export class FragmentxShader extends AbstractShader {

    protected getShaderType(): number {
        return gl.FRAGMENT_SHADER;
    }

}
