width = 400
height = 400

svg = d3.select("body")
.append("svg")
.attr("height",height)
.attr("width",width);

svg.append("rect")
.attr("fill","steelblue")
.attr("x",10)
.attr("y",10)
.attr("width",100)
.attr("height",30)
.transition()
.attr("width",300)