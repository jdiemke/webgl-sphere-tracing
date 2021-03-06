import { SphereTracingScene } from './../../SphereTracingScene';
import * as PULSAR from './../../Window';

import cubeFragmentShader from './shader/cube.fs';
import cubeVertexShader from './shader/cube.vs';

export class Application {

    public main(): void {
        const window: PULSAR.Window = new PULSAR.Window('canvas');
        window.setScene(new SphereTracingScene(cubeVertexShader, cubeFragmentShader));
        window.start();
    }

}
