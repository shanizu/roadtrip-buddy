import { FormEvent, useState } from "react";

interface InputFormProps {
  onFormSubmit: (origin: string, destination: string) => void;
}

const InputForm = ({ onFormSubmit }: InputFormProps) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onFormSubmit(origin, destination);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-form-label">Origin</label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter origin"
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4">
        <label className="col-form-label">Destination</label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter destination"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Let's go!
      </button>
    </form>
  );
};

export default InputForm;
