import { appState } from '../AppState.js';
import { setHTML } from '../Utils/Writer.js';
import { Pop } from '../Utils/Pop.js';
import { sandboxGiphyService } from '../Services/SandboxGiphysService.js';

function _drawSandboxGiphys() {
  let template = '';

  appState.sandboxGiphys.forEach((s) => (template += s.CardTemplate));
  setHTML('sandboxGifts', template);
}

export class SandboxGiphyController {
  constructor() {
    // console.log('We did it');
    this.getGiphys();
    appState.on('sandboxGiphys', _drawSandboxGiphys);
  }

  async getGiphys() {
    try {
      await sandboxGiphyService.getGiphys();
    } catch (error) {
      console.error('[getGiphys]', error);
      Pop.error(error);
    }
  }


  async flipBool(id){
    try {
      await sandboxGiphyService.flipBool(id)
    } catch (error) {
      console.error('[FlipBool]',error)
      Pop.error(error)
    }
  }

  async addGiphy() {
    try {
      sandboxGiphyService.addGiphy()
    } catch (error) {
      console.error('[FlipBool]',error)
      Pop.error(error)
    }
  }
}
