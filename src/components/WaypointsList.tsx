import { Waypoint } from "../types";

interface WaypointListProps {
  waypoints: Waypoint[];
}

const WaypointsList = ({ waypoints }: WaypointListProps) => {
  return (
    <div>
      {waypoints.length === 0 && (
        <div className="alert alert-secondary" role="alert">
          Please submit valid origin and destination to see recommended stops.
        </div>
      )}
      <div className="list-group">
        {waypoints.map((waypoint, index) => (
          <a
            className="list-group-item list-group-item-action"
            key={waypoint.displayName.text}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{waypoint.displayName.text}</h5>
              <small className="text-body-secondary">{index + 1}</small>
            </div>
            {waypoint.editorialSummary && (
              <p className="mb-1">{waypoint.editorialSummary.text}</p>
            )}
            <small className="text-body-secondary">
              <i>{waypoint.formattedAddress}</i>
            </small>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WaypointsList;
