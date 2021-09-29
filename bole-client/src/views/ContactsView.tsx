import React from 'react';
import './ContactsView.css';
import { Map } from '../components/Map';

const location = {
  address: 'Via Sottomonte, 25, 34135 Trieste TS',
  lat: 45.67296,
  lng: 13.77905,
};

export function ContactsView() {
  return (
    <div className="contacts-wrapper">
      <div className="map-container">
        <Map location={location} zoom={15} isMarkerShown />
      </div>
    </div>
  );
}
