export class Giphy {
  constructor(data) {
    this.url = data.images.original.url
    // this.tag = data.tag
  }

  get GiphyTemplate() {
    return /*html */ `


      <img src="${this.url}" alt=""  class="rounded img-fluid p-1 my-2">
            
            
  
  
  `;
  }
}

//template for an Opened Gift and an Unopened Gift.
//Toggle a Boolean on the Gift
//Opening a gift use a PUT request to that gift (edit)
