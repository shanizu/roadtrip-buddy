// import { useEffect, useRef } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

// interface MapComponentProps {
//   waypoints: { lat: number; lng: number }[];
//   route: { encodedPolyline: String };
// }

// const MapComponent = ({ waypoints, route }: MapComponentProps) => {
const MapComponent = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <Map defaultZoom={10} defaultCenter={{ lat: 37.7749, lng: -122.4194 }} />
    </APIProvider>
  );
};

export default MapComponent;
