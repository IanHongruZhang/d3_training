/*scaling*/
/*
var linear = d3.scaleLinear()
.domain([0,500])
.range([0,100]);

console.log(linear(10));
console.log(linear(30));
*/
/*nice*/
//linear.domain([0.12233,0,44888]).nice();

//formation//
/*
var linear = d3.scaleLinear()
.domain([-20,20])
.range([0,100])

var ticks = linear.ticks(5);
console.log(ticks);

var tickFormat = linear.tickFormat(5,"+")
for(var i = 0; i < ticks.length; i++){
	ticks[i] = tickFormat(ticks[i]);
}
console.log(ticks);
*/