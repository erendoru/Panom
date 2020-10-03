import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HowTo from "./../components/HowTo";
import ReactMapGL, { Marker } from "react-map-gl";
import * as panoData from "../data/map-billboards.json";

function map() {
  const [how, setHow] = useState(true);

  const [viewport, setViewport] = useState({
    latitude: 41.0096215,
    longitude: 28.9651867,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  const Close = () => {
    setHow(false);
  };

  const maptoken =
    "pk.eyJ1IjoiZXJlbmRvcnUiLCJhIjoiY2tmcXE3d3IwMHR5YTJ4cGZrenc0Y2s4eSJ9.Z60NPF9JpqKudA7H5VbHgg";

  return (
    <div className="map">
      <Head>
        <title> Pano Kirala </title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {how ? <HowTo click={Close} /> : ""}
      <div className="mapContainer">
        <ReactMapGL
          mapboxApiAccessToken={maptoken}
          {...viewport}
          mapStyle="mapbox://styles/erendoru/ckfn0uc4g17zn19n09wthhhi7"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {panoData.maps.map((pano, index) => {
            return (
              <Marker
                key={index}
                longitude={pano.longitude}
                latitude={pano.latitude}
              >
                <button className="marker-btn">
                  <img src="/pin.png" alt="markers" />
                </button>
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default map;
