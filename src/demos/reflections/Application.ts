import { SphereTracingScene } from './../../SphereTracingScene';
import * as PULSAR from './../../Window';

import reflectionFragmentShader from './shader/reflection.fs';
import reflectionVertexShader from './shader/reflection.vs';

export class Application {

    public main(): void {
        const window: PULSAR.Window = new PULSAR.Window('canvas');
        window.setScene(new SphereTracingScene(reflectionVertexShader, reflectionFragmentShader));
        window.start();
    }

}

new Application().main();
