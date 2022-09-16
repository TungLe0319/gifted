import { appState } from '../AppState.js';
import { Giphy } from '../Models/Giphy.js';
import { SandBoxGiphy } from '../Models/SandboxGiphy.js';
import { getFormData } from '../Utils/FormHandler.js';
import { sandBoxServer } from './AxiosService.js';

// api.giphy.com/v1/gifs/search

class SandboxGiphyService {
  async addGiphy() {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    const form = window.event.target
    let formData = getFormData(form)
    // @ts-ignore
    form.reset()
    console.log(formData)
    const res = await sandBoxServer.post('/api/gifts', formData)
    console.log(res.data)
    let newGiphy = new SandBoxGiphy(res.data)
    console.log(newGiphy)
    appState.sandboxGiphys = [newGiphy, ...appState.sandboxGiphys]
  }
  async getGiphys() {
    const res = await sandBoxServer.get('/api/gifts', {
    });
    // console.log(res.data);
    appState.sandboxGiphys = res.data
      .map((s) => new SandBoxGiphy(s))
      .slice(0, 100);
  }

  //Slice another way of grabbing an amount from an API.
  // filter(g => !g.opened)

  async flipBool(id) {
    const giphy = appState.sandboxGiphys.find((gif) => gif.id == id);
    if (!giphy) {
      throw new Error('BAD ID');
    }

    giphy.opened = true;
    const res = await sandBoxServer.put(`/api/gifts/${id}`, giphy);
    console.log(res.data, giphy);
    giphy.url = res.data.url;
    appState.emit('sandboxGiphys');
  }
}

export const sandboxGiphyService = new SandboxGiphyService();
 