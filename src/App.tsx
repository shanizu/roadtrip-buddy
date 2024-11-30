import { APIProvider } from "@vis.gl/react-google-maps";
import InputForm from "./components/InputForm";
import MapComponent from "./components/MapComponent";

function App() {
  const handleFormSubmit = async (origin: String, destination: String) => {
    console.log(origin);
    console.log(destination);
  };

  return (
    <div className="container">
      <div className="text-center p-4">
        <h1>Roadtrip Buddy</h1>
        <h4>I'll find the stops, so you can go!</h4>
      </div>
      <div className="row">
        <div className="col">
          <InputForm onFormSubmit={handleFormSubmit} />
        </div>
        <div className="col-9">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
