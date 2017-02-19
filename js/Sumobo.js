export default class Sumobo {
  constructor(container) {
    this.container = container;
    console.log("Sumobo initialized.");
  }

  run() {
    const h1 = document.createElement("h1");
    const h1Text = document.createTextNode("Sumobo");
    h1.appendChild(h1Test);
    this.container.appendChild(h1);
  }
}
