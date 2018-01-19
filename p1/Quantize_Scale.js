/*
var quantize = d3.scaleQuantize()
.domain([50,0])
.range(["#A1C4FD","#C2E9FB"]);

var r = [45,35,25,15,5]

var svg = d3.select("body").append("svg")
.attr("width",800)
.attr("height",400)

svg.selectAll("circle")
.data(r)
.enter()
.append("circle")
.attr("cx",function(d,i){return 100 + i * 120 + d/2})
.attr("cy",100)
.attr("r",function(d){return d;})
.attr("fill",function(d){return quantize(d);})
*/

