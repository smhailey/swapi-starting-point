

class App {
  constructor() {
    this.controllers = {
      characterController: new CharacterController()
    }
  }
}

window["app"] = new App()