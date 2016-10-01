
(function (window) {

  window.App = window.App ||{};

class People {
  constructor(){
    this.peopleDonut = [];
    this.peopleBar = {};
    this.ready = null;
    //console.log('1');
    App.utils.Get('../data/CG.json', (data) => {
      //console.log('2');
      const parsedPeopleData = JSON.parse(data);
                    //this.people = parsedPeopleData.results;
      //console.log('state line 16 People Constructor parsedPeopleData items', parsedPeopleData.items);
      let eventsCG = parsedPeopleData.items;

      let sumEvents = {};
      let sumEventsDonut = {};

      let eventTypeArr = [
          ['supporters',0],
          ['officials',0],
          ['allies',0],
          ['nato',0],
          ['army',0],
          ['staff',0],
          ['joint',0],
          ['free',0]
          ];
      sumEventsDonut.CGDonutData = eventTypeArr;

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
            sumEventsDonut.CGDonutData[0][1]++;
            sumEvents[dateKey].CGBarData[0][1]++;
            break;
          case "officials":
            sumEventsDonut.CGDonutData[1][1]++;
            sumEvents[dateKey].CGBarData[1][1]++;
            break;
          case "allies":
            sumEventsDonut.CGDonutData[2][1]++;
            sumEvents[dateKey].CGBarData[2][1]++;
            break;
          case "nato":
            sumEventsDonut.CGDonutData[3][1]++;
            sumEvents[dateKey].CGBarData[3][1]++;
            break;
          case "army":
            sumEventsDonut.CGDonutData[4][1]++;
            sumEvents[dateKey].CGBarData[4][1]++;
            break;
          case "staff":
            sumEventsDonut.CGDonutData[5][1]++;
            sumEvents[dateKey].CGBarData[5][1]++;
            break;
          case "joint":
            sumEventsDonut.CGDonutData[6][1]++;
            sumEvents[dateKey].CGBarData[6][1]++;
            break;
        } //eof switch
      } // eof for
      // calculating free days
      //console.log('line 95 dateKey in sumEvents', sumEvents);
      //console.log(' line 118 donut data', sumEventsDonut.CGDonutData);
      this.peopleBar = sumEvents;
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




window.App.states = {
  People
};
}(window));


