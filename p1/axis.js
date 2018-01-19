var width = 600;
var height = 600;

var svg = d3.select("body").append("svg")
.attr("height",height)
.attr("width",width);

var xScale = d3.scaleLinear()
.domain([0,10])
.range([0,300]);

var axis = d3.axisLeft()
.scale(xScale)
.ticks(10);

var gAxis = svg.append("g")
.attr("transform","translate(200,80)");

axis(gAxis);