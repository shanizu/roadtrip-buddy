import { Coordinates } from "../types";

/**
 * Parses a string containing latitude and longitude into a Coordinates object.
 * @param input - A comma-separated string (e.g., "37.7749,-122.4194").
 * @returns A Coordinates object or null if parsing fails.
 */
export const parseCoordinates = (input: String): Coordinates => {
  const [latitude, longitude] = input.split(",").map(Number);
  if (isNaN(latitude) || isNaN(longitude)) {
    throw console.error();
  }
  return { latitude, longitude };
};