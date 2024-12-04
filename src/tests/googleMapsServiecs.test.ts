import { describe, it, expect, vi } from "vitest";
import { fetchLocationData, fetchRouteData, fetchWaypoints } from "../utils/googleMapsService";

globalThis.fetch = vi.fn();

describe("fetchLocationData", () => {
  it("should fetch and return location data", async () => {
    const mockResponse = {
      places: [{ location: { lat: 40.7128, lng: -74.0060 } }],
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const locationString = "New York";
    const result = await fetchLocationData(locationString);

    expect(fetch).toHaveBeenCalledWith("https://places.googleapis.com/v1/places:searchText", expect.any(Object));
    expect(result).toEqual({ lat: 40.7128, lng: -74.0060 });
  });

  it("should return an empty array if no location is found", async () => {
    const mockResponse = { places: [] };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const locationString = "Unknown Place";
    const result = await fetchLocationData(locationString);

    expect(result).toEqual([]);
  });

  it("should throw an error on a failed fetch", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
    });

    await expect(fetchLocationData("New York")).rejects.toThrowError("Failed to fetch data from https://places.googleapis.com/v1/places:searchText");
  });
});

describe("fetchRouteData", () => {
  it("should fetch and return route data", async () => {
    const mockResponse = {
      routes: [{ polyline: { encodedPolyline: "abcdefg" } }],
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const origin = { latitude: 40.7128, longitude: -74.0060 };
    const destination = { latitude: 34.0522, longitude: -118.2437 };
    const result = await fetchRouteData(origin, destination);

    expect(fetch).toHaveBeenCalledWith("https://routes.googleapis.com/directions/v2:computeRoutes", expect.any(Object));
    expect(result).toBe("abcdefg");
  });

  it("should return undefined if no route is found", async () => {
    const mockResponse = { routes: [] };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const origin = { latitude: 40.7128, longitude: -74.0060 };
    const destination = { latitude: 34.0522, longitude: -118.2437 };
    const result = await fetchRouteData(origin, destination);

    expect(result).toBeUndefined();
  });

  it("should throw an error on a failed fetch", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
    });

    const origin = { latitude: 40.7128, longitude: -74.0060 };
    const destination = { latitude: 34.0522, longitude: -118.2437 };

    await expect(fetchRouteData(origin, destination)).rejects.toThrowError("Failed to fetch data from https://routes.googleapis.com/directions/v2:computeRoutes");
  });
});

describe("fetchWaypoints", () => {
  it("should fetch and return waypoints", async () => {
    const mockResponse = {
      places: [{ displayName: "Place 1" }, { displayName: "Place 2" }],
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const polyline = "abcdefg";
    const result = await fetchWaypoints(polyline);

    expect(fetch).toHaveBeenCalledWith("https://places.googleapis.com/v1/places:searchText", expect.any(Object));
    expect(result).toEqual(mockResponse.places);
  });

  it("should return an empty array if no waypoints are found", async () => {
    const mockResponse = { places: [] };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const polyline = "abcdefg";
    const result = await fetchWaypoints(polyline);

    expect(result).toEqual([]);
  });

  it("should throw an error on a failed fetch", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
    });

    const polyline = "abcdefg";

    await expect(fetchWaypoints(polyline)).rejects.toThrowError("Failed to fetch data from https://places.googleapis.com/v1/places:searchText");
  });
});
