import { useState } from "react";
import InputForm from "./components/InputForm";
import MapComponent from "./components/MapComponent";
import { fetchRouteData, fetchWaypoints } from "./utils/googleMapsService";
import { parseCoordinates } from "./utils/locationUtils";
import WaypointsList from "./components/WaypointsList";
import { Waypoint } from "./types";

function App() {
  const [route, setRoute] = useState("");
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);

  const handleFormSubmit = async (
    originString: String,
    destinationString: String
  ) => {
    const origin = parseCoordinates(originString);
    const destination = parseCoordinates(destinationString);
    console.log("Origin is:", origin, "Destination is:", destination);
    try {
      const polyline = await fetchRouteData(origin, destination);
      console.log(polyline);
      setRoute(polyline);

      const waypointList = await fetchWaypoints(polyline);
      console.log(waypointList);
      setWaypoints(waypointList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="text-center p-4">
        <h1>Roadtrip Buddy</h1>
        <h4>I'll find the stops, so you can go!</h4>
      </div>
      <div className="row mb-4">
        <div className="col">
          <InputForm onFormSubmit={handleFormSubmit} />
        </div>
        <div className="col-9">
          <MapComponent waypoints={waypoints} route={route} />
        </div>
      </div>
      <div>
        <WaypointsList waypoints={waypoints} />
      </div>
    </div>
  );
}

export default App;
