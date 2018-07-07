import { SphereTracingScene } from './../../SphereTracingScene';
import * as PULSAR from './../../Window';

import spikeDonutFragmentShader from './shader/spike-donut.fs';
import spikeDonutVertexShader from './shader/spike-donut.vs';

export class Application {

    public main(): void {
        const window: PULSAR.Window = new PULSAR.Window('canvas');
        window.setScene(new SphereTracingScene(spikeDonutVertexShader, spikeDonutFragmentShader));
        window.start();
    }

}

new Application().main();
