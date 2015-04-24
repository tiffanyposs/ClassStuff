// $(function(){

// });

//this picks a random color
function sample(array){
	var index = Math.floor(array.length * Math.random());
	var el = array[index];
	return el
}

//this is a second option
// Array.prototype.sample = function(){
// 	var index = Math.floor(this.length * Math.random());
// 	return this[index]
// }


//data is just the content you are passing in, you could have more than one
//data set
function projectData(data){

	var svg = d3.select('svg');
	var circles = svg.selectAll("circle")
						.data(data)
						.enter()
						.append('circle');
	//circles are on our dom, but we can't see them  yet

	// update visualization with new data
	var circlesAgain = svg.selectAll('circle')
							.data(data)
							//this creates a transition
							//only the things after it will transition.
							//if you 
							.transition()
							.duration(1000)
							.ease("bounce")
							//need to pass in d (for data to make it have access to )
							//you need to return it so it actually sets 'r' to
							.attr('r', function(d){return d * 10 + 'px'})
							//cx stands for center x cooordinate
							// .attr('cx', function(d, i){return i*25 + '%'})
							.attr('cx', function(){return Math.random()*100 + '%'})
							.attr('cy', function(){return Math.random()*100 + '%'})
							.style('opacity', '.8')
							// .style('opacity', function(){return Math.random()})
							// .style('fill', "#C80000")

							.style('fill', function(){return sample(crayola).hex})
							// .style('fill', function(){return crayolda.sample().hex})

	//this code will remove the old data and append new data						
	svg.selectAll('circle')
		.data(data)
		.exit()
		.remove();
};

// var svg = document.querySelector('svg');


window.onload = function(){

	//this sets the svg canvas to the size you want, and border
	d3.select('svg')
		.attr('width', '100%')
		.attr('height', '500px')
		.style('border', '1px solid black')

	//randomly generates
	setInterval(function(){
		var arr = [
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1
		]
		projectData(arr);
	}, 1000)
	// projectData([2, 4, 10])

};