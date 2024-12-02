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
        defaultZoom={3}
        defaultCenter={{ lat: 40.418412, lng: -99.52436 }}
        mapId={"DEMO_MAP_ID"}
      >
        <Polyline
          strokeWeight={4}
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
