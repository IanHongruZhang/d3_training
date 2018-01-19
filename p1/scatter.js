var width = 400;
var height = 400;

var xAxisWidth = 300;
var yAxisWidth = 300;

var rectWidth = 30;

var center = [[0.5,0.5],[0.7,0.8],[0.4,0.9],
[0.11,0.32],[0.88,0.25],[0.75,0.12],
[0.5,0.1],[0.2,0.3],[0.4,0.1],[0.6,0.7]];

var xScale = d3.scaleLinear()
.domain([0,1.2 * d3.max(center,function(d){
	return d[0];
})])
.range([0,xAxisWidth])

var yScale = d3.scaleLinear()
.domain([0,1.2 * d3.max(center,function(d){
	return d[1];
})])
.range([0,yAxisWidth]);

var padding = {top:30,right:30,bottom:30,left:30};

var svg = d3.select("body")
.append('svg')
.attr("height",height)
.attr("width",width);

var circle = svg.selectAll("circle")
.data(center)
.enter()
.append("circle")
.attr("fill","black")
.attr("cx",function(d,i){
	console.log(padding.left + xScale(d[0]));
	return padding.left + xScale(d[0]);
})
.attr("cy",function(d){
	return height - padding.bottom - yScale(d[1]);
})
.attr("r",5);

var text = svg.selectAll(".Mytext")
.data(center)
.enter()
.append("text")
.attr("fill","black")
.attr("font-size","14px")
.attr("text-anchor","middle")
.attr("x",function(d,i){
	return padding.left + xScale(d[0]);
})
.attr("y",function(d){
	return height - padding.bottom - yScale(d[1]);
})
.attr("dx",rectWidth/2)
.attr("dy","-0.5em")
.text(function(d){
	return d[0] + "," + d[1];
})

var xAxis = d3.axisBottom(xScale);

yScale.range([yAxisWidth,0]);

var yAxis = d3.axisLeft(yScale);

svg.append("g")
.attr("class","axis")
.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
.call(xAxis)

svg.append("g")
.attr("class","axis")
.attr("transform","translate(" + padding.left + "," + (height - padding.bottom - yAxisWidth) + ")")
.call(yAxis)

svg.append("line")
.attr("x1",172.04545454545453)
.attr("y1",231.11111111111111)
.attr("x2",228.86363636363635)
.attr("y2",147.7777777777778)
.attr("stroke","black")
.attr("stroke-width","3px")
.attr("fill","none");

var lines = [80,120,160,200,240,280]
var linePath = d3.line()
.x(function(d){return d;})
.y(function(d,i){return i%2 == 0?40:120});

console.log(linePath(lines))

svg.append("path")
.attr("d",linePath(lines))
.attr("stroke","black")
.attr("stroke-width","3px")
.attr("fill","none");

//svg.append()
//.attr("stroke","black")

/*
var xAxis = d3.axisBottom(xScale);

yScale.range([yAxisWidth,0]);

var yAxis = d3.axisLeft(yScale);

svg.append("g")
.attr("class","axis")
.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
.call(xAxis);

svg.append("g")
.attr("class","axis")
.attr("transform","translate(" + padding.left + "," + (height - padding.bottom -  xAxisWidth) + ")")
.call(yAxis);
*/