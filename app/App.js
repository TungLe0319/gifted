import { GiphysController } from "./Controllers/GiphysController.js";
import { SandboxGiphyController } from "./Controllers/SandBoxGiphysController.js";


class App {

  giphysController = new GiphysController()
  sandboxGiphyController = new SandboxGiphyController()
}

window["app"] = new App();
