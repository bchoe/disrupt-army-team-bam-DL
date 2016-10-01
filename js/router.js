// initiate states whwe user requested

(function (window) {

  window.App = window.App ||{};

  class Router {
    constructor(containerId) {
      this.container = document.querySelector(containerId);
    }

    navigate(route){
      let state = null; // new App.states.People ();
      switch(route) {
        case 'people':
          state = new App.states.People();
          //console.log('in router random');
          break;
        case 'goals':
          state = new App.states.Goals();
          break;
      }

      state.rendered((element) => {
        this.container.innerHTML = '';
        this.container.appendChild(element);
      });

    }
  }

window.App.Router = new Router('.container');
}(window));