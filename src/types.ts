export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Route {
  polyline: string;
}

export interface Waypoint {
  location: Coordinates;
  displayName: {
    languageCode: string;
    text: string;
  }
  formattedAddress: string;
  editorialSummary?: {
    languageCode: string;
    text: string;
  }
}

export interface FetchOptions {
  endpoint: string;
  requestBody: object;
  fieldMask: string;
}