###D3

* We are going to write all the D3 code in one function then call it on page load

Selects the svg, then you delare circles and  and select all the 'circle', circle is a pre made shape in d3. '.data(data)' is you chaining that method onto the cirlces and passing in the data from the function it is in. '.enter()' this grabs all of the circles. 

```
	var svg = d3.select('svg');
	var circles = svg.selectAll("circle")
						.data(data)
						.enter()
						.append('circle')

```

r = (d x 10) + "px"



```
	var circlesAgain = svg selectAll('circle')
							.data(data)
							.attr('r', function(d){d * 10 + 'px'})

```