mapboxgl.accessToken =
  "pk.eyJ1IjoiY2xvdWRsdW4iLCJhIjoiY2s3ZWl4b3V1MDlkejNkb2JpZmtmbHp4ZiJ9.MbJU7PCa2LWBk9mENFkgxw";

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/cloudlun/cl2eq8ceb000a15o06rah6zx5", // style URL
  center: [-73.9385, 40.7943], // starting position [lng, lat]
  zoom: 11.5, // starting zoom
  interactive: false,
});

// -73.9385, 40.7943
// 11.5

const areas = {
  bronx: {
    center: [-73.911, 40.822],
    zoom: 12.94,
  },
  upperManhattan: {
    center: [-73.957, 40.793],
    zoom: 13.5,
  },
  midTownManhattan: {
    center: [-73.979, 40.756],
    zoom: 13.76,
  },
  lowerManhattan: {
    center: [-73.985, 40.727],
    zoom: 13.4,
  },
  brooklyn: {
    center: [-73.895, 40.67],
    zoom: 11.51,
  },
  queens: {
    center: [-73.845, 40.729],
    zoom: 12.3,
  },
};

map.on("load", () => {
  map.addSource("restaurants", {
    type: "geojson",
    data: "./authentic_res_dot.geojson",
  });

  map.addLayer({
    id: "restaurants-layer",
    type: "circle",
    source: "restaurants",
    paint: {
      "circle-radius": 2.5,
      "circle-stroke-width": 1,
      "circle-color": "red",
      "circle-stroke-color": "red",
    },
  });

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on("mouseenter", "restaurants-layer", (e) => {
    map.getCanvas().style.cursor = "pointer";

    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;
    const type = e.features[0].properties.parent_category;


    let br = document.createElement("br").innerText;
    let tooltip = `Restaruant: ${name}<br/> Category: ${type}`

    popup.setLngLat(coordinates).setHTML(tooltip).addTo(map);
  });
  map.on("mouseleave", "restaurants-layer", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});

const areaBtns = document.querySelectorAll(".area");

for (let i = 0; i < areaBtns.length; i++) {
  areaBtns[i].addEventListener("click", () => {
    let areasId = areaBtns[i].id;
    map.flyTo(areas[areasId]);
  });
}
