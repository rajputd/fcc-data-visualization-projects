
document.addEventListener("DOMContentLoaded", function(event) {
	const height = 200;
	const width = 1500;
	const dataSource = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

	//get GDP data and render a barchart with it
	fetch(dataSource).then(function(response) {
		return response.json();
	})
	.then(function(json) {
		let data = json.data;
		createBarChart(data, height, width);
	})
	.catch(function(err) {
		console.log(err);
	});

});


/**
 * create a barchart with the given data and append it to the body tag.
 *
 * @param data, an array of data where each element is an array whose first element contains the x value and the second element the y value.
 * @param height, height of the barchart
 * @param width, width of the barchart
 * @return nothing
 */
function createBarChart(data, h, w) {
	const svg = createSvg(h, w);

	const yScale = d3.scaleLinear()
									 .domain([0,
														d3.max(data, function(d) { return d[1] })])
									 .range([0, h]);

	const barWidth = Math.floor(w / data.length);

	//add rectangles
	svg.selectAll("rect")
	   .data(data)
	   .enter()
	   .append("rect")
		 .attr("x", function(d,i) { return i * barWidth })
		 .attr("y", function(d, i) { return h - yScale(d[1])})
		 .attr("width", barWidth)
		 .attr("height", function(d, i) { return yScale(d[1]) });

}

/**
 * append SVG container for graph
 *
 * @param int h, height of svg
 * @param int w, width of svg
 * @return nothing
 */
function createSvg(h, w) {
	return d3.select("body")
			  .append("svg")
			  .attr("width", w)
			  .attr("height", h);
}
