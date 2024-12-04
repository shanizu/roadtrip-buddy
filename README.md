# Roadtrip Buddy 🚗

**Roadtrip Buddy** is a simple web application built with Vite to plan road trips by finding waypoints between an origin and destination.

## Features

- Input origin and destination to generate a route.
- View the route and waypoints on an interactive map.
- Get a detailed list of waypoints for potential stops.

## Technologies Used

- **Frontend**: React with TypeScript
- **Map Services**: Google Maps API
- **Build Tool**: Vite

## Components

- **InputForm**: Captures the origin and destination.
- **MapComponent**: Displays the route and waypoints on a map.
- **WaypointsList**: Shows a list of waypoints for easy reference.

## How It Works

1. Enter the origin and destination in the form.
2. The app fetches location data and generates a route using the Google Maps API.
3. Waypoints along the route are fetched and displayed on a map and as a list.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment file:
   - Create a `.env` file in the root directory.
   - Add your Google Maps API key:
     ```
     VITE_MAPS_API_KEY=your_google_maps_api_key
     ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Notes

- Ensure you have a valid Google Maps API key and update the `googleMapsService` utility with your key.

## TODOs/Future Enhancements

- **Component Testing**: Implement comprehensive tests for all React components to ensure reliability and maintainability.
- **Interactive Google Map Pins**: Make map pins interactable with the waypoint list. Clicking a waypoint in the list should zoom the map to the corresponding pin.
- **Auto-Zoom**: Enable auto-zooming on the map to fit the generated route and selected pins for better navigation.
- **User Preferences**: Allow users to customize waypoint categories, such as food, gas stations, and attractions.
- **Sharing Routes**: Enable route sharing via a unique link or QR code.

Enjoy your road trip planning! 🌟
