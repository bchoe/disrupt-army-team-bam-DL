// initiate states whwe user requested

(function (window) {

  window.App = window.App ||{};

  class Router {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }

    navigate(route){
      let state = null; // new App.states.People ();
      switch(route) {
        case 'random':
          state = new App.states.Newtech();
          //console.log('in router random');
          break;
        case 'places':
          state = new App.states.Places();
          break;
        case 'spaceships':
          state = new App.states.Spaceships();
          break;
      }

      state.rendered((element) => {
        this.container.innerHTML = '';
        this.container.appendChild(element);
      });

    }
  }

window.App.Router = new Router('container');
}(window));