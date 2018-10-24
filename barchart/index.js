
document.addEventListener("DOMContentLoaded", function(event) {
	const height = 100;
	const width = 500;

	createSvg(height, width);
});


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
