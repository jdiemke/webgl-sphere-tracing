import { SphereTracingScene } from './../../SphereTracingScene';
import * as PULSAR from './../../Window';

declare function require(name: string): any;

class Application {

    public main(): void {
        const window: PULSAR.Window = new PULSAR.Window('canvas');
        window.setScene(new SphereTracingScene(
            require('./shader/vertex-shader.vs'),
            require('./shader/fragment-shader.fs'),
        ));
        window.start();
    }

}

new Application().main();
