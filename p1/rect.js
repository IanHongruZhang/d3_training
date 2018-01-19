var height = 300;
var width = 500;

var svg = d3.select("body")
.append("svg")
.attr("height",height)
.attr("width",width);

var rectHeight = 25;

var dataset = new Array();
var nameset = new Array();

d3.csv("movie.csv",

function(d){
	return{
		name:d.name,
		box_office:parseFloat(d.box_office) //tranformation
	};
},

function(error,data){
if(error){
console.log(error);
}
console.log(data);
for(i = 0; i < data.length; i++){
    var box_office = data[i].box_office;
    dataset.push(box_office);
}
for(i = 0;i < data.length; i++){
	var movie_name = data[i].name;
	nameset.push(movie_name);
}

console.log(nameset)

var max = d3.max(dataset);

var linear = d3.scaleLinear()
.domain([0,max])
.range([0,300]);

var axis = d3.axisBottom()
.scale(linear)
.ticks(7);

svg.append("g")
.attr("transform","translate(0,250)")
.call(axis);

var rect = svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x",20)
.attr("y",function(d,i){
	return i * rectHeight;
})
.attr("width",function(d){
	return linear(d);
})
.attr("height",rectHeight-5)
.attr("fill","steelblue")

console.log(nameset);
svg.selectAll(".MyText")
.data(nameset)
.enter()
.append("text")
.attr("x",60)
.attr("y",function(d,i){
    return i * rectHeight;
})
.attr("dx",0)
.attr("dy",14)
.attr("fill","black")
.attr("font-size","14px")
.attr("text-anchor","left")
.text(function(d){
	return d;
})
});