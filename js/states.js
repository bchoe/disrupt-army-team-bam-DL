
(function (window) {

  window.App = window.App ||{};

  class People {
    constructor(){
      this.peopleDonut = [];
      this.ready = null;
    //console.log('1');
    App.utils.Get('../data/CG.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsCG = parsedPeopleData.items;

      let sumEventsDonut = {};

      let eventTypeArr = [
      ['Supporters',0],
      ['Officials',0],
      ['Allies',0],
      ['NATO',0],
      ['Army',0],
      ['Staff',0],
      ['Joint',0],
      ['FreeTime',0]
      ];
      sumEventsDonut.CGDonutData = eventTypeArr;

      const longMonths = ['1','3','5','7','8','10','12'];
      const shortMonths = ['4','6','9','11'];

      // CGDonutData push
      for (var i = 0; i < eventsCG.length; i++) {
        let eventType = eventsCG[i].summary;
        switch (eventType) {
          case "supporters":
          sumEventsDonut.CGDonutData[0][1]++;
          break;
          case "officials":
          sumEventsDonut.CGDonutData[1][1]++;
          break;
          case "allies":
          sumEventsDonut.CGDonutData[2][1]++;
          break;
          case "nato":
          sumEventsDonut.CGDonutData[3][1]++;
          break;
          case "army":
          sumEventsDonut.CGDonutData[4][1]++;
          break;
          case "staff":
          sumEventsDonut.CGDonutData[5][1]++;
          break;
          case "joint":
          sumEventsDonut.CGDonutData[6][1]++;
          break;
        } //eof switch
      } // eof for
      // calculating free days
      console.log(' line 83 donut data', sumEventsDonut.CGDonutData);
      this.peopleDonut = sumEventsDonut.CGDonutData;
      this.render(this.ready); //uncomment
    });
  }

  rendered(callback) {
    this.ready = callback;
  }
  render(readyFunc){
    //console.log('this.peopleDonut', this.peopleDonut);
    var chart = c3.generate({
      data: {
        columns: this.peopleDonut,
        colors: {
          NATO: '#263F77',
          Allies: '#6B855E',
          Army: '#4B6A18',
          Officials: '#73641A',
          Supporters: '#6B1929',
          Joint: '#37294F',
          Staff: '#686969',
          FreeTime: '#734F1A'
        },
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: "CG"
      }
    });
    readyFunc(chart.element);
  }
} //eof class People



class Goals {
  constructor(){
    this.peopleBar = {};
    this.ready = null;
    //console.log('1');
    let sumEvents = {
      Supporters: {},
      Officials: {},
      Allies: {},
      NATO: {},
      Army: {},
      Staff: {},
      Joint: {},
    };
  const fileNames = [
    '../data/CG.json',
    '../data/COS.json',
    '../data/DCGAR.json',
    '../data/DCGN.json',
    '../data/DCGNG.json',
    '../data/DCGS.json',
    '../data/G3.json'];
  let countDown = 7;
  for (var i = 0; i < countDown ; i++) {
    App.utils.Get(fileNames[i], (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
      let events = parsedPeopleData.items;
      // CGBarData push
      for (var i = 0; i < events.length; i++) {
        let d = events[i].start.dateTime;
        let dateKey = d.split("-")[0]+'-'+d.split("-")[1];
        let eventType = events[i].summary;
        switch (eventType) {
          case "supporters":
          if (sumEvents.Supporters.hasOwnProperty(dateKey) === false) {
            sumEvents.Supporters[dateKey] = 1;
          } else {
            sumEvents.Supporters[dateKey]++;
          }
          break;
          case "officials":
          if (sumEvents.Officials.hasOwnProperty(dateKey) === false) {
            sumEvents.Officials[dateKey] = 1;
          } else {
            sumEvents.Officials[dateKey]++;
          }
          break;
          case "allies":
          if (sumEvents.Allies.hasOwnProperty(dateKey) === false) {
            sumEvents.Allies[dateKey] = 1;
          } else {
            sumEvents.Allies[dateKey]++;
          }
          break;
          case "nato":
          if (sumEvents.NATO.hasOwnProperty(dateKey) === false) {
            sumEvents.NATO[dateKey] = 1;
          } else {
            sumEvents.NATO[dateKey]++;
          }
          break;
          case "army":
          if (sumEvents.Army.hasOwnProperty(dateKey) === false) {
            sumEvents.Army[dateKey] = 1;
          } else {
            sumEvents.Army[dateKey]++;
          }
          break;
          case "staff":
          if (sumEvents.Staff.hasOwnProperty(dateKey) === false) {
            sumEvents.Staff[dateKey] = 1;
          } else {
            sumEvents.Staff[dateKey]++;
          }
          break;
          case "joint":
          if (sumEvents.Joint.hasOwnProperty(dateKey) === false) {
            sumEvents.Joint[dateKey] = 1;
          } else {
            sumEvents.Joint[dateKey]++;
          }
          break;
        } //eof switch
      } // eof for
      countDown--;
    });  // eof Get
  } // eof outer for
      this.peopleBar = sumEvents;
      //console.log('this.peopleBar', this.peopleBar);
      this.render(this.ready); //uncomment
  } // eof constructor

  rendered(callback) {
    this.ready = callback;
  }
  render(readyFunc){
    let objectives = ['Objectives', 120, 0, 185, 145, 190];
    var chart = c3.generate({
      data: {
        columns: [
            ['Supporters', 12, 0, 12, 9, 15],
            ['Officials', 8, 0, 19, 23, 28],
            ['Allies', 14, 0, 30, 28, 34],
            ['NATO', 5, 0, 18, 17, 5],
            ['Army', 16, 0, 16, 25, 26],
            ['Staff', 12, 0, 22, 27, 19],
            ['Joint', 15, 0, 30, 25, 27],
            ['FreeTime', -39, 0, -12, -10, -21],
        ],
        type: 'bar',
        groups: [
        ['Supporters','Officials','Allies','NATO','Army','Staff','Joint']
        ]
      },
      grid: {
        y: {
          lines: [
                  { value:'2016-08'},
                  { value:'2016-09'},
                  { value:'2016-10'},
                  { value:'2016-11'},
                  { value:'2016-12'}
                  ]
        }
      }
    });

    readyFunc(chart.element);
  }
} //eof class Goals

window.App.states = {
  People,
  Goals
};
}(window));


