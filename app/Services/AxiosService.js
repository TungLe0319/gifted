export const GiphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',

  timeout: 3500,
});

export const sandBoxServer = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 3500,
});
