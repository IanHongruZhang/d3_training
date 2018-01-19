width = 400;
height = 400;

svg = d3.select("body")
.append("svg")
.attr("width",width)
.attr("height",height)

var dataset = 
[{
	country:"China",
	gdp:[[2000,11920],[2001,13170],
	[2002,14550],[2003,16500],
	[2004,19440],[2005,22870],
	[2006,27930],[2007,35040],
	[2008,45470],[2009,51050],
	[2010,59540],[2011,73130],
	[2012,83860],[2013,103550]]
},
{
	country:"Japan",
	gdp:[[2000,47310],[2001,41590],
	[2002,39800],[2003,43020],
	[2004,46550],[2005,45710],
	[2006,43560],[2007,43560],
	[2008,48490],[2009,60350],
	[2010,54950],[2011,59050],
	[2012,59370],[2013,48980]]
}
];

var padding = {top:50,right:50,bottom:50,left:50};
var gdpMax = 0;

for(var i = 0;i < dataset.length;i++)
{
	var currGdp = d3.max(dataset[i].gdp,function(d){return d[1];});
	if(currGdp > gdpMax)
	{
     gdpMax = currGdp;
	}
}

var xScale = d3.scaleLinear()
.domain([2000,2013])
.range([0,width - padding.left - padding.right]);

var yScale = d3.scaleLinear()
.domain([0,gdpMax * 1.1])
.range([height - padding.top - padding.bottom,0]);

var linePath = d3.line()
.x(function(d){
	return xScale(d[0]);
})
.y(function(d){
	return yScale(d[1]);
});


var colors = [d3.rgb(0,0,255),d3.rgb(0,255,0)];

svg.selectAll("path")
.data(dataset)
.enter()
.append("path")
.attr("transform","translate(" + padding.left + "," + padding.top + ")")
.attr('d',function(d){
	return linePath(d.gdp);
})
.attr("fill","none")
.attr("stroke-width",3)
.attr("stroke",function(d,i){
	return colors[i];
});

var xAxis = d3.axisBottom(xScale)
.ticks(5)
.tickFormat(d3.format("d"));

var yAxis = d3.axisLeft(yScale);

svg.append("g")
.attr("class","axis")
.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
.call(xAxis);

svg.append("g")
.attr("class","axis")
.attr("transform","translate(" + padding.left + "," + padding.top + ")")
.call(yAxis);
//
//
//.attr("d",function(d))