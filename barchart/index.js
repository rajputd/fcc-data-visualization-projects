
document.addEventListener("DOMContentLoaded", function(event) {
	const height = 100;
	const width = 500;
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
	createSvg(h, w);
}

/**
 * append SVG container for graph
 *
 * @param int h, height of svg
 * @param int w, width of svg
 * @return nothing
 */
function createSvg(h, w) {
	d3.select("body")
	  .append("svg")
	  .attr("width", w)
	  .attr("height", h);
}

