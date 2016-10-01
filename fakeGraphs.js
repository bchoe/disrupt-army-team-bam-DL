console.log('works');

//single bar graph
/*
let container = document.querySelector(".visualizer");

container.innerHTML = "";
var barChart = c3.generate({
    data: {
        columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2', 'data3']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});
container.appendChild(barChart.element);

*/
//individual graphs

/*let graphs = document.querySelectorAll(".dataViz");

graphs = Array.from(graphs);

function applyGraph(element, index, array) {
  console.log(element);
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
        title: "CG"
    }
  });

  element.appendChild(chart.element);
}

graphs.forEach(applyGraph);
*/