import { Coordinates, FetchOptions, Waypoint } from "../types";

// Wrapper for fetching origin/destination data
export const fetchLocationData = async (locationString: String) => {
  const endpoint = "https://places.googleapis.com/v1/places:searchText";
  const requestBody = {
    textQuery: locationString,
    pageSize: 1,
  };

  const fieldMask = "places.displayName,places.formattedAddress,places.editorialSummary,places.location";
  const data = await fetchGoogleMapsData<{ places: Waypoint[] }>({
    endpoint,
    requestBody,
    fieldMask,
  });

  return data.places?.[0]?.location || []
};

// Wrapper for fetching route data
export const fetchRouteData = async (origin: Coordinates, destination: Coordinates) => {
  const endpoint = "https://routes.googleapis.com/directions/v2:computeRoutes";
  const requestBody = {
    origin: { location: { latLng: origin } },
    destination: { location: { latLng: destination } },
    travelMode: "DRIVE",
    computeAlternativeRoutes: false,
    languageCode: "en-US",
    units: "IMPERIAL",
  };

  const fieldMask = "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline";
  const data = await fetchGoogleMapsData<{ routes: { polyline: { encodedPolyline: string } }[] }>({
    endpoint,
    requestBody,
    fieldMask,
  });

  return data.routes?.[0]?.polyline?.encodedPolyline;
};

// Wrapper for fetching waypoints
export const fetchWaypoints = async (polyline: string) => {
  const endpoint = "https://places.googleapis.com/v1/places:searchText";
  const requestBody = {
    textQuery: "Things to see along route, Things to do along route",
    searchAlongRouteParameters: {
      polyline: { encodedPolyline: polyline },
    },
    pageSize: 10,
  };

  const fieldMask = "places.displayName,places.formattedAddress,places.editorialSummary,places.location";
  const data = await fetchGoogleMapsData<{ places: Waypoint[] }>({
    endpoint,
    requestBody,
    fieldMask,
  });

  return data.places || [];
};

// Fetch route data from Google Maps API
const fetchGoogleMapsData = async <T>({ endpoint, requestBody, fieldMask }: FetchOptions): Promise<T> => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": import.meta.env.VITE_MAPS_API_KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json() as Promise<T>;
};