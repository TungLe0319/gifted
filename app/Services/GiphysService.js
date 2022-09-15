import { appState } from "../AppState.js";
import { Giphy } from "../Models/Giphy.js";
import { GiphyApi } from './AxiosService.js';

class GiphysService {
  
  async getGiphys(search) {
  
    const res = await GiphyApi.get(
      `/search?api_key=SHAhnnBWk8sW7Pyga6hif9bQ8LLrlDj3&q=${search}&limit=25&offset=0&rating=pg-13&lang=en`);

      console.log(res.data.data);
      appState.giphys = res.data.data.map(gif=> new Giphy(gif))
     
  }
}

export const giphysService = new GiphysService();
