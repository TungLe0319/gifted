import { appState } from '../AppState.js';
import { giphysService } from '../Services/GiphysService.js';
import { setHTML } from '../Utils/Writer.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from '../Utils/Pop.js';

function _drawGiphys() {
  let template = '';
  appState.giphys.forEach((gif) => (template += gif.GiphyTemplate));
  setHTML('giphys', template);
}
export class GiphysController {
  constructor() {
    appState.on('giphys', _drawGiphys);
  }

  async getGiphys() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);
      console.log(formData.search);
      await giphysService.getGiphys(formData.search);
    } catch (error) {
      console.error('[getGiphys]', error);
      Pop.error(error);
    }
  }
}
