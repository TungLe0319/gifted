export class Giphy {
  constructor(data) {
    this.url = data.images.original.url
    this.tag = data.title
    this.id = data.id
  }

  get GiphyTemplate() {
    return /*html */ `


      <img src="${this.url}" alt="" onclick="app.giphysController.fillForm('${this.id}')" class="rounded img-fluid p-1 my-2 selectable">
            
            
  
  
  `;
  }
}

//template for an Opened Gift and an Unopened Gift.
//Toggle a Boolean on the Gift
//Opening a gift use a PUT request to that gift (edit)
