// import { useEffect, useRef } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
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
        defaultZoom={10}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        mapId={"DEMO_MAP_ID"}
      >
        <Polyline
          strokeWeight={3}
          strokeColor={"#0d6efd"}
          encodedPath={route}
        />
        {waypoints.map((waypoint, index) => (
          <AdvancedMarker
            position={{
              lat: waypoint.location.latitude,
              lng: waypoint.location.longitude,
            }}
          >
            <Pin
              background={"#0d6efd"}
              borderColor={"#FFFFFF"}
              glyphColor={"#FFFFFF"}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
