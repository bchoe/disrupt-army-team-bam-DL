
(function (window) {

  window.App = window.App ||{};

class People {
  constructor(){
    this.peopleDonut = [];
    this.peopleNames = [
      'CG',
      'COS',
      'DCGAR',
      'DCGN',
      'DCGNG',
      'DCGS',
      'G3',
      'Total'
    ];
    const longMonths = ['1','3','5','7','8','10','12'];
    const shortMonths = ['4','6','9','11'];
    const eventTypeArr = function() {
          return [['Supporters',0],
            ['Officials',0],
            ['Allies',0],
            ['NATO',0],
            ['Army',0],
            ['Staff',0],
            ['Joint',0],
            ['FreeTime',0]
          ];
        };
    this.ready = null;
    //console.log('1');
    App.utils.Get('../data/CG.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsCG = parsedPeopleData.items;

      let cGDonutData = eventTypeArr();

      // CGDonutData push
      for (var i = 0; i < eventsCG.length; i++) {
        let eventType = eventsCG[i].summary;
        switch (eventType) {
          case "supporters":
            cGDonutData[0][1]++;
            break;
          case "officials":
            cGDonutData[1][1]++;
            break;
          case "allies":
            cGDonutData[2][1]++;
            break;
          case "nato":
            cGDonutData[3][1]++;
            break;
          case "army":
            cGDonutData[4][1]++;
            break;
          case "staff":
            cGDonutData[5][1]++;
            break;
          case "joint":
            cGDonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(cGDonutData);
      //this.render(this.ready); //uncomment
    });
    App.utils.Get('../data/COS.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsCOS = parsedPeopleData.items;

      let cOSDonutData = eventTypeArr();

      // COSDonutData push
      for (var i = 0; i < eventsCOS.length; i++) {
        let eventType = eventsCOS[i].summary;
        switch (eventType) {
          case "supporters":
            cOSDonutData[0][1]++;
            break;
          case "officials":
            cOSDonutData[1][1]++;
            break;
          case "allies":
            cOSDonutData[2][1]++;
            break;
          case "nato":
            cOSDonutData[3][1]++;
            break;
          case "army":
            cOSDonutData[4][1]++;
            break;
          case "staff":
            cOSDonutData[5][1]++;
            break;
          case "joint":
            cOSDonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(cOSDonutData);
      //this.render(this.ready); //uncomment
    });
    App.utils.Get('../data/DCGAR.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsDCGAR = parsedPeopleData.items;

      let dCGARDonutData = eventTypeArr();

      // dCGARDonutData push
      for (var i = 0; i < eventsDCGAR.length; i++) {
        let eventType = eventsDCGAR[i].summary;
        switch (eventType) {
          case "supporters":
            dCGARDonutData[0][1]++;
            break;
          case "officials":
            dCGARDonutData[1][1]++;
            break;
          case "allies":
            dCGARDonutData[2][1]++;
            break;
          case "nato":
            dCGARDonutData[3][1]++;
            break;
          case "army":
            dCGARDonutData[4][1]++;
            break;
          case "staff":
            dCGARDonutData[5][1]++;
            break;
          case "joint":
            dCGARDonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(dCGARDonutData);
      //this.render(this.ready); //uncomment
    });
    App.utils.Get('../data/DCGN.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsDCGN = parsedPeopleData.items;

      let dCGNDonutData = eventTypeArr();

      // DCGNDonutData push
      for (var i = 0; i < eventsDCGN.length; i++) {
        let eventType = eventsDCGN[i].summary;
        switch (eventType) {
          case "supporters":
            dCGNDonutData[0][1]++;
            break;
          case "officials":
            dCGNDonutData[1][1]++;
            break;
          case "allies":
            dCGNDonutData[2][1]++;
            break;
          case "nato":
            dCGNDonutData[3][1]++;
            break;
          case "army":
            dCGNDonutData[4][1]++;
            break;
          case "staff":
            dCGNDonutData[5][1]++;
            break;
          case "joint":
            dCGNDonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(dCGNDonutData);
      //this.render(this.ready); //uncomment
    });
    App.utils.Get('../data/DCGNG.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsDCGNG = parsedPeopleData.items;

      let dCGNGDonutData = eventTypeArr();

      // dCGNGDonutData push
      for (var i = 0; i < eventsDCGNG.length; i++) {
        let eventType = eventsDCGNG[i].summary;
        switch (eventType) {
          case "supporters":
            dCGNGDonutData[0][1]++;
            break;
          case "officials":
            dCGNGDonutData[1][1]++;
            break;
          case "allies":
            dCGNGDonutData[2][1]++;
            break;
          case "nato":
            dCGNGDonutData[3][1]++;
            break;
          case "army":
            dCGNGDonutData[4][1]++;
            break;
          case "staff":
            dCGNGDonutData[5][1]++;
            break;
          case "joint":
            dCGNGDonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(dCGNGDonutData);
      //this.render(this.ready); //uncomment
    });
    App.utils.Get('../data/DCGS.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsDCGS = parsedPeopleData.items;

      let dCGSDonutData = eventTypeArr();

      // dCGSDonutData push
      for (var i = 0; i < eventsDCGS.length; i++) {
        let eventType = eventsDCGS[i].summary;
        switch (eventType) {
          case "supporters":
            dCGSDonutData[0][1]++;
            break;
          case "officials":
            dCGSDonutData[1][1]++;
            break;
          case "allies":
            dCGSDonutData[2][1]++;
            break;
          case "nato":
            dCGSDonutData[3][1]++;
            break;
          case "army":
            dCGSDonutData[4][1]++;
            break;
          case "staff":
            dCGSDonutData[5][1]++;
            break;
          case "joint":
            dCGSDonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(dCGSDonutData);
      //setTimeout(this.render(this.ready), 1000); //uncomment
    });
    App.utils.Get('../data/G3.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsG3 = parsedPeopleData.items;

      let g3DonutData = eventTypeArr();

      // g3DonutData push
      for (var i = 0; i < eventsG3.length; i++) {
        let eventType = eventsG3[i].summary;
        switch (eventType) {
          case "supporters":
            g3DonutData[0][1]++;
            break;
          case "officials":
            g3DonutData[1][1]++;
            break;
          case "allies":
            g3DonutData[2][1]++;
            break;
          case "nato":
            g3DonutData[3][1]++;
            break;
          case "army":
            g3DonutData[4][1]++;
            break;
          case "staff":
            g3DonutData[5][1]++;
            break;
          case "joint":
            g3DonutData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      this.peopleDonut.push(g3DonutData);
      setTimeout(this.render(this.ready), 1500); //uncomment
    });

  }

  rendered(callback) {
    this.ready = callback;
  }
  render(readyFunc){
    //console.log('this.peopleDonut', this.peopleDonut);
    let vizDiv = document.createElement('div');
    vizDiv.className = 'visualizer';
    for(var person in this.peopleDonut){
      let personDiv = document.createElement('div');
      personDiv.className = "dataViz";
      var chart = c3.generate({
        data: {
          columns: this.peopleDonut[person],
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
          title: this.peopleNames[person]
        }
      });
      personDiv.appendChild(chart.element);
      vizDiv.appendChild(personDiv);
    }
    readyFunc(vizDiv);
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
      this.peopleBar.groups = [
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
  People,
  Goals
};
}(window));


