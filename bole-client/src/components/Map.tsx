import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './Map.css';

const ContainerStyle = {
  width: 'auto',
  height: '500px',
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
    googleMapsApiKey: process.env.REACT_APP_BOLE_GOOGLE_API_KEY as string,
    libraries: ['places'],
  });

  function showMarker() {
    // TODO get zoom of map and hide marker when zoom below 15
  }

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Map is still loading...</div>;

  return (
    <div className="map-wrapper">
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
