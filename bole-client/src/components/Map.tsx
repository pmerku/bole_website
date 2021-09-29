import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './Map.css';

const ContainerStyle = {
  width: '800px',
  height: '600px',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const Map = React.memo(function Map(props: {
  location: any;
  zoom: number;
  isMarkerShown?: boolean;
}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      window._env_.BOLE_GOOGLE_API_KEY === undefined ||
      window._env_.BOLE_GOOGLE_API_KEY === null
        ? process.env.BOLE_GOOGLE_API_KEY
        : window._env_.BOLE_GOOGLE_API_KEY,
    libraries: ['places'],
  });

  function showMarker() {
    // TODO get zoom of map and hide marker when zoom below 15
  }

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Map is still loading...</div>;

  return (
    <div className="map-wrapper">
      <h2 className="map-title">Come visit us at here</h2>
      <div className="map">
        <GoogleMap
          mapContainerStyle={ContainerStyle}
          center={props.location}
          zoom={props.zoom}
          options={options}
          onZoomChanged={showMarker}
        >
          {props.isMarkerShown ? (
            <Marker
              position={{
                lat: props.location?.lat,
                lng: props.location?.lng,
              }}
            />
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
});
