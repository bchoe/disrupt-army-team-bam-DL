/*let graphs = document.querySelectorAll(".dataViz");

graphs = Array.from(graphs);

function applyGraph(element, index, array) {

  console.log(element);

  var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Iris Petal Width"
    }
  });

  element.appendChild(chart.element);

}

graphs.forEach(applyGraph);*/

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
        ['free time', 75]
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Commanding General"
    }
  });

 comGenDiv.appendChild(chart.element);

/*let comGenDiv = document.getElementById('#cheifOfStaff');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Chief of Staff"
    }
  });

let comGenDiv = document.getElementById('#deputyCg-Ar');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G.A.R."
    }
  });

let comGenDiv = document.getElementById('#deputyCg-Ng');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G.N.G."
    }
  });

let comGenDiv = document.getElementById('#deputyCG-Nat');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G. Nat."
    }
  });

let comGenDiv = document.getElementById('#deputyCG-S');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Deputy C.G. South"
    }
  });

let comGenDiv = document.getElementById('#g-3');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "G-3"
    }
  });

let comGenDiv = document.getElementById('#total');

 var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Total"
    }
  });


*/