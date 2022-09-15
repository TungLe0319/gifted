import { appState } from '../AppState.js';
import { SandBoxGiphy } from '../Models/SandboxGiphy.js';
import { sandBoxServer } from './AxiosService.js';

// api.giphy.com/v1/gifs/search

class SandboxGiphyService {
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
 