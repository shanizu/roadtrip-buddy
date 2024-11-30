export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Route {
  polyline: string;
}

export interface Waypoint {
  location: Coordinates;
  displayName: string;
}

export interface FetchOptions {
  endpoint: string;
  requestBody: object;
  fieldMask: string;
}