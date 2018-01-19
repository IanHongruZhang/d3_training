var dataset = [50,43,120,87,99,167,142];
var width = 400;
var height = 400;

var svg = d3.select("body")
.append("svg")
.attr("width",width)
.attr("height",height);

var padding = {top:20,right:20,bottom:20,left:20};
var rectStep = 35;
var rectWidth = 30;

var xAxisWidth = 300;
var yAxisWidth = 300;

var xScale = d3.scaleBand()
.domain(d3.range(dataset.length))
.rangeRound([0,xAxisWidth])
.padding(0.2);

var yScale = d3.scaleLinear()
.domain([0,d3.max(dataset)])
.range([0,yAxisWidth]);

var rect = svg.selectAll(".Myrect")
.data(dataset)
.enter()
.append("rect")
.attr("fill","steelblue")
.attr("x",function(d,i){
	//return padding.left + i * rectStep;
	return padding.left + xScale(i);
})
.attr("y",function(d){
	//return height - padding.bottom - d;
	return height - padding.bottom - yScale(d);
})
.attr("width",xScale.bandwidth())
.attr("height",function(d){
	return yScale(d);
})

var text = svg.selectAll(".Mytext")
.data(dataset)
.enter()
.append("text")
.attr("fill","black")
.attr("font-size","14px")
.attr("text-anchor","middle")
.attr("x",function(d,i){
	//return padding.left + i * rectStep;
	return padding.left + xScale(i)
})
.attr("y",function(d){
	//return height - padding.bottom - d;
	return height - padding.bottom - yScale(d);
})
.attr("dx",rectWidth/2)
.attr("dy","-0.5em")
.text(function(d){
	return parseInt(yScale(d));
})

/*updating model*/
function draw(){
	// get rect updating part
	var updateRect = svg.selectAll("rect")
	.data(dataset);

	var enterRect = updateRect.enter();

	var exitRect = updateRect.exit();
    // get text updating part
	var updateText = svg.selectAll("text")
	.data(dataset);

	var enterText = updateText.enter();

	var exitText = updateText.exit();

	updateRect.attr("fill","steelblue")
	.attr("x",function(d,i){
		return padding.left + i * rectStep;
	})
	.attr("y",function(d){
		return height - padding.bottom - d;
	})
	.attr("width",rectWidth)
	.attr("height",function(d){
		return d;
	});

	enterRect.append("rect")
	.attr("fill","steelblue")
	.attr("x",function(d,i){
		return padding.left + i * rectStep;
	})
	.attr("y",function(d){
		return height - padding.bottom - d;
	})
	.attr("width",rectWidth)
	.attr("height",function(d){
		return d;
	});
	exitRect.remove();
}

function mysort(){
	dataset.sort(d3.ascending);
	draw()
}

function myadd(){
	dataset.push(Math.floor(Math.random() * 100));
	draw()
}

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

var colors = [d3.rgb(0,0,255),d3.rgb(0,255,0)];

svg.selectAll("path")
.data(dataset)
.enter()
.append("path")
.attr("transform","translate(" + padding.left + "," + 
	padding.top + ")")
.attr("d",function(d){
	return linePath(d.gdp);
})
.attr("fill","none")
.attr("stroke-width",3)
.attr("stroke",function(d,i){
	return colors[i];
});














