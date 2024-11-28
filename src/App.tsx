import InputForm from "./components/InputForm";

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
      <InputForm onFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;