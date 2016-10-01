
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
        return [
          ['Supporters',0],
          ['Officials',0],
          ['Allies',0],
          ['NATO',0],
          ['Army',0],
          ['Staff',0],
          ['Joint',0],
          ['Unscheduled',0]
        ];
      };

      this.ready = null;
      //console.log('1');

      App.utils.Get('./data/CG.json', (data) => {
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

      App.utils.Get('./data/COS.json', (data) => {
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

      App.utils.Get('./data/DCGAR.json', (data) => {
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
      App.utils.Get('./data/DCGN.json', (data) => {
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
      App.utils.Get('./data/DCGNG.json', (data) => {
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

      App.utils.Get('./data/DCGS.json', (data) => {
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
      App.utils.Get('./data/G3.json', (data) => {
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
        setTimeout(this.render(this.ready), 2000); //uncomment
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
              Unscheduled: '#734F1A'
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
        './data/CG.json',
        './data/COS.json',
        './data/DCGAR.json',
        './data/DCGN.json',
        './data/DCGNG.json',
        './data/DCGS.json',
        './data/G3.json'];

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
      let counterId = setInterval(() => {
        if(countDown === 0){
          clearInterval(counterId);
          this.peopleBar = sumEvents;
          //console.log('this.peopleBar', this.peopleBar);
          this.render(this.ready); //uncomment
        }

      },1000);
    }  // eof constructor


  rendered(callback) {
    this.ready = callback;
  }
  render(readyFunc){

    let objectives = ['Objectives', 120, 0, 185, 145, 190];

    let vizDiv = document.createElement('div');
    vizDiv.className = 'visualizer';

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
            ['Unscheduled', -39, 0, -12, -10, -21],
        ],
        colors: {
          NATO: '#263F77',
          Allies: '#6B855E',
          Army: '#4B6A18',
          Officials: '#73641A',
          Supporters: '#6B1929',
          Joint: '#37294F',
          Staff: '#686969',
          Unscheduled: '#734F1A'
        },
        type: 'bar',
        groups: [
        ['Supporters','Officials','Allies','NATO','Army','Staff','Joint', 'Unscheduled']
        ]
      },
      axis: {
        x: {
          type: 'category',
          categories :['2016-08',
                  '2016-09',
                  '2016-10',
                  '2016-11',
                  '2016-12']
        }
      },
      grid: {
        y: {
          lines: [{value:160, text: 'Event Goals'}, {value: 0}]
        }
      },
    });
    var titleLabel = document.createElement('h3');
    titleLabel.innerHTML = "Monthly Event Goals";
    vizDiv.appendChild(chart.element);
    vizDiv.appendChild(titleLabel);
    readyFunc(vizDiv);
  }
} //eof class Goals

window.App.states = {
  People,
  Goals
};
}(window));


