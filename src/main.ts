import { CubeScene } from './CubeScene';
import * as PULSAR from './Window';

class Application {

    public main(): void {
        const window: PULSAR.Window = new PULSAR.Window('canvas');
        window.addScene(new CubeScene());
        window.start();
    }

}

new Application().main();
