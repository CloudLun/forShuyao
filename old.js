// let transform = d3.geoTransform({ point: projectPoint });
// let path = d3.geoPath().projection(transform);
// let container = map.getCanvasContainer();

// function projectPoint(lon, lat) {
//   var point = map.project(new mapboxgl.LngLat(lon, lat));
//   this.stream.point(point.x, point.y);
// }

// const width = document.querySelector(".container").clientWidth;
// const height = document.querySelector(".container").clientHeight;

// const r = 4;

// let svg = d3
//   .select(container)
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height)
//   .style("position", "absolute")
//   .style("z-index", 2);

// let restaurants = svg.append("g").attr("id", "restaurants");

// d3.json("./authentic_res_dot.geojson").then((data) => {
//   console.log(data.features);

//   restaurants
//     .selectAll("restaurants")
//     .data(data.features)
//     .enter()
//     .append("path")
//     .attr('class', 'restaurants')
//     .attr("d", path.pointRadius(r))
//     .attr("stroke", "none")
//     .attr("fill", "blue")
//     .style("position", "absolute")
//     .style("z-index", 3)
//     .on("click", () => {
//        d3.selectAll('.restaurants').attr
//       map.flyTo({
//         // center: [-73.9385, 40.7943],
//         zoom: 11,
//         essential: true, // this animation is considered essential with respect to prefers-reduced-motion
//       });
//     });
// });