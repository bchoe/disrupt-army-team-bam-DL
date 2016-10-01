console.log('works');
let graphs = document.querySelectorAll(".dataViz");

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

graphs.forEach(applyGraph);