document.getElementById('donuts').addEventListener('click', function() {
  window.App.Router.navigate('people');
});
document.getElementById('bars').addEventListener('click', function() {
  window.App.Router.navigate('goals');
});

let comGenDiv = document.getElementById('comGen');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "CG"
    }
  });

 comGenDiv.appendChild(chart.element);

let cosDiv = document.getElementById('chiefOfStaff');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "COS"
    }
  });

 cosDiv.appendChild(chart.element);

let deputyComGenArDiv = document.getElementById('deputyCg-Ar');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G.A.R."
    }
  });

 deputyComGenArDiv.appendChild(chart.element);

let deputyComGenNgDiv = document.getElementById('deputyCg-Ng');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G.N.G."
    }
  });

deputyComGenNgDiv.appendChild(chart.element);

let deputyComGenNatDiv = document.getElementById('deputyCG-Nat');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G. Nat."
    }
  });

 deputyComGenNatDiv.appendChild(chart.element);

let deputyComGenSouthDiv = document.getElementById('deputyCG-S');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G. South"
    }
  });

 deputyComGenSouthDiv.appendChild(chart.element);

let g3Div = document.getElementById('g-3');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "G-3"
    }
  });

 g3Div.appendChild(chart.element);

let totalDiv = document.getElementById('total');

 var chart = c3.generate({
    data: {
      columns: [
        ['NATO', 30],
        ['Allies', 120],
        ['Army', 48],
        ['Officials', 65],
        ['Supporters', 90],
        ['Joint', 25],
        ['Staff', 35],
        ['Unscheduled', 75]
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
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Total"
    }
  });

total.appendChild(chart.element);

