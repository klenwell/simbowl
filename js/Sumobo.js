export default class Sumobo {
  constructor(container) {
    this.container = container;
    console.log("Sumobo initialized.");
  }

  run() {
    const p = document.createElement("p");
    const pText = document.createTextNode("Sumobo will run here.");
    p.appendChild(pText);
    this.container.appendChild(p);
  }
}
