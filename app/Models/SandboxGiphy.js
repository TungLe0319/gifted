import { generateId } from '../Utils/generateId.js';

export class SandBoxGiphy {
  constructor(data) {
    this.id = data.id;
    this.tag = data.tag;
    this.url = data.url;
    this.opened = data.opened || false;
  }

  get CardTemplate() {
    if (this.opened) {
      return /*html */ `


<div
  class="card mt-3 d-flex justify-content-center align-items-center  elevation-5 border-dark border-4 border mx-4 my-2 present"
  style="width: 15rem;height: 20rem;">
  <div>
    <img src="${
      this.url
    }" alt="" style="width:8rem;" class="rounded elevation-4">
  </div>
  <div class="d-flex text-center text-shadow">
    <h3>${!this.tag ? '': `${this.tag}` }</h3>
  </div>
</div>

`;
    } else {
      return /*html */ `

<div
  class="card mt-3 d-flex justify-content-center align-items-center giftwrap elevation-5 border-dark border-4 border mx-4 my-2 present"
  style="width: 15rem;height: 20rem;">
  <span class="selectable p-5  rounded elevation-2  position-relative "
    onclick="app.sandboxGiphyController.flipBool('${this.id}')">
    <img
      src="https://media0.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif?cid=ecf05e47ucx7m37jmktmsc3lsccbdp3v1dnvggcniccpzncs&rid=giphy.gif&ct=g"
      alt="" class="img-fluid rounded on-hover">
  </span>
</div>



`;
    }
  }
}

// onclick="app.sandboxGiphyController.flipBool('${this.id}')"
