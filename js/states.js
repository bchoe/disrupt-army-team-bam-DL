
(function (window) {

  window.App = window.App ||{};

// each states will prepare thed data to be prepared
// than

class People {
  constructor(){
    this.people = [];
    this.ready = null;
    //console.log('1');
    App.utils.Get('../data/CG.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      console.log('state line 16 People Constructor parsedPeopleData', parsedPeopleData);
      let numberOfMale = parsedPeopleData.results.filter(person => {
        //console.log(person);
        return person.gender === 'male';
      }).length;
      //console.log('numberOfMale', numberOfMale);
      let maleArr = ['male', numberOfMale];

      this.people.push(maleArr);
      // let femaleArr = ['female'];
      let numberOfFemale = parsedPeopleData.results.filter(person => {
        return person.gender === 'female';
      }).length;
      let femaleArr = ['female', numberOfFemale];
      this.people.push(femaleArr);
      // let robotArr = ['robot'];
      let numberOfRobots = parsedPeopleData.results.filter(person => {
        return person.gender === 'n/a';
      }).length;
      let robotsArr = ['robots', numberOfRobots];
      this.people.push(robotsArr);
      //console.log('parsedPeopleData', parsedPeopleData.results.forEach(person => console.log(person)) );

      this.render(this.ready); //uncomment
    });
  }
  // console.log('3');

  rendered(callback) {
    this.ready = callback;
  }
// returns a single dom element
//// returns a single dom element
//render our data when data is ready send the final render dom element to callback
//callback is a functio we have to paass
//render(){
  render(readyFunc){
    // const view = document.createElement('div');
    // const list = document.createElement('ul');
    // console.log('this.people', this.people);
    // const items = this.people.map(person => {
    //   let item = document.createElement('li');
    //   item.innerHTML = person.name;
    //   return item;
    // });
    // items.forEach(list.appendChild.bind(list));
    // view.appendChild(list);

    let barChartData = this.people;
    console.log('this.people', this.people);
    var chart = c3.generate({
        data: {
            columns: barChartData,
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

    // setTimeout(function () {
    //     chart.load({
    //         columns: [
    //             ['data3', 130, -150, 200, 300, -200, 100]
    //         ]
    //     });
    // }, 1000);


    readyFunc(chart.element); //return view; changed call on chart
  }
} //eof class People

class Places {
  constructor(){
    this.places = [];
    this.ready = null;
    App.utils.Get('http://swapi.co/api/planets/', (data) => {
      const parsedPlacesData = JSON.parse(data);
      this.places = parsedPlacesData.results;
      this.render(this.ready);
    });
  }

  rendered(callback) {
    this.ready = callback;
  }

// returns a single dom element
  render(readyFunc){
    const view = document.createElement('div');
    //view.innerHTML = 'it is working';
    const list = document.createElement('ul');
    const items = this.places.map(place => {
      let item = document.createElement('li');
      item.innerHTML = place.name;
      return item;
    });
    items.forEach(list.appendChild.bind(list));
    view.appendChild(list);
    readyFunc(view); //return view;
  }
} //eof class Places


class Spaceships {
  constructor(){
    this.spaceships = [];//['Sereniy', 'Enterprise', 'Millenium Falcon'];
    this.ready = null;
    App.utils.Get('http://swapi.co/api/starships/', (data) => {
      const parsedStarshipsData = JSON.parse(data);
      this.spaceships = parsedStarshipsData.results;
      this.render(this.ready);
    });

  }
  rendered(callback) {
    this.ready = callback;
  }
// returns a single dom element
  render(readyFunc){
    const view = document.createElement('div');
    //view.innerHTML = 'it is working';
    const list = document.createElement('ul');
    const items = this.spaceships.map(spaceship => {
      let item = document.createElement('li');
      item.innerHTML = spaceship.name;
      return item;
    });
    items.forEach(list.appendChild.bind(list));
    view.appendChild(list);
    readyFunc(view);  //return view;
  }
} //eof class SpaceShips




window.App.states = {
  People,
  Places,
  Spaceships
};
}(window));


