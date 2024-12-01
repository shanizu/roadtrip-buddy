// import { useEffect, useRef } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Waypoint } from "../types";
import { Polyline } from "./Polyline";

interface MapComponentProps {
  waypoints: Waypoint[];
  route: string;
}

const MapComponent = ({ waypoints, route }: MapComponentProps) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <Map
        // style={{ width: "50vh", height: "50vh" }}
        defaultZoom={10}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        mapId={"DEMO_MAP_ID"}
      >
        {waypoints.map((waypoint, index) => (
          <AdvancedMarker
            position={{
              lat: waypoint.location.latitude,
              lng: waypoint.location.longitude,
            }}
          />
        ))}
        <Polyline
          strokeWeight={3}
          strokeColor={"#0d6efd"}
          encodedPath={route}
        />
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
