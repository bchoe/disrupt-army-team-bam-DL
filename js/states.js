
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
    App.utils.Get('../data/CG.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsCG = parsedPeopleData.items;

      let sumEvents = {
          columns: [
            ['CG', 0,0,0,0,0],
            ['COS', 0,0,0,0,0],
            ['DCGAR', 0,0,0,0,0],
            ['DCGN', 0,0,0,0,0],
            ['DCGNG', 0,0,0,0,0],
            ['DCGS', 0,0,0,0,0],
            ['G3', 0,0,0,0,0]
          ],
          groups: []
      };

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

      const longMonths = ['1','3','5','7','8','10','12'];
      const shortMonths = ['4','6','9','11'];

      // creating keys and CGBarData
      for (var i = 0; i < eventsCG.length; i++) {
        let d = eventsCG[i].start.dateTime;
        let dateKey = d.split("-")[0]+'-'+d.split("-")[1];
        if (sumEvents.hasOwnProperty(dateKey) === false) {
          sumEvents[dateKey] = {};
          sumEvents[dateKey].CGBarData = eventTypeArr;
          if (d.split("-")[1] === '2') {
            sumEvents[dateKey].CGBarData[7][1] = 28;
          } else {
            if (longMonths.indexOf(d.split("-")[1]) >= 0) {
              sumEvents[dateKey].CGBarData[7][1] = 31;
            }
            if (shortMonths.indexOf(d.split("-")[1]) >= 0) {
              sumEvents[dateKey].CGBarData[7][1] = 30;
            }
          }
          //console.log('sumEvents[dateKey].CGBarData[7][1]', sumEvents[dateKey].CGBarData[7][1]);
        } //eof if
      } // eof for
      //console.log('line 55 dateKey in sumEvents', sumEvents); ITT rossz a freeday szamolas!!!!
      // CGBarData push
      for (var i = 0; i < eventsCG.length; i++) {
        let d = eventsCG[i].start.dateTime;
        let dateKey = d.split("-")[0]+'-'+d.split("-")[1];
        let eventType = eventsCG[i].summary;
        switch (eventType) {
          case "supporters":
            sumEvents[dateKey].CGBarData[0][1]++;
            break;
          case "officials":
            sumEvents[dateKey].CGBarData[1][1]++;
            break;
          case "allies":
            sumEvents[dateKey].CGBarData[2][1]++;
            break;
          case "nato":
            sumEvents[dateKey].CGBarData[3][1]++;
            break;
          case "army":
            sumEvents[dateKey].CGBarData[4][1]++;
            break;
          case "staff":
            sumEvents[dateKey].CGBarData[5][1]++;
            break;
          case "joint":
            sumEvents[dateKey].CGBarData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      //console.log('line 95 dateKey in sumEvents', sumEvents);
      this.peopleBar = sumEvents;
      this.render(this.ready); //uncomment
    });
  }

  rendered(callback) {
    this.ready = callback;
  }
  render(readyFunc){
    let linesBarChart = [
          { value:'2016-08'},
          { value:'2016-09'},
          { value:'2016-10'},
          { value:'2016-11'},
          { value:'2016-12'}
      ];
      sumEvents.groups = [
            ['CG','COS','DCGAR','DCGN','DCGNG','DCGS','G3'],
            ['CG','COS','DCGAR','DCGN','DCGNG','DCGS','G3'],
            ['CG','COS','DCGAR','DCGN','DCGNG','DCGS','G3'],
            ['CG','COS','DCGAR','DCGN','DCGNG','DCGS','G3'],
            ['CG','COS','DCGAR','DCGN','DCGNG','DCGS','G3']
          ];
    //console.log('this.peopleBar', this.peopleBar);
    var chart = c3.generate({
        data: {
            columns: [
                ['data1', -30, 200, 200, 400, -150, 250],
                ['data2', 130, 100, -100, 200, -150, 50],
                ['data3', -230, 200, 200, -300, 250, 250]
            ],
            type: 'bar',
            groups: [
                ['data1', 'data2']
            ]
        },
        grid: {
            y: {
                lines: [{value:0}]
            }
        }
    });


    readyFunc(chart.element);
  }
} //eof class Goals





window.App.states = {
  People
};
}(window));


