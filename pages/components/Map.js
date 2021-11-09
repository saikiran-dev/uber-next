import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoicGhvbmV1cGRhdGVzMTk5NCIsImEiOiJja3ZveHRqaG8xbnZyMnhvdWY2a2YyZ3oxIn0.1FLvwOy2dHXTawZVNAp2CQ";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });
  });
  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1
`;

export default Map;
