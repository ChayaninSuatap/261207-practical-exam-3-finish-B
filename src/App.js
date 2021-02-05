import PersonTable from "./PersonTable";
import { useState, useEffect } from "react";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [persons, setPersons] = useState([]);

  //load locationStorage
  useEffect(() => {
    const persons = localStorage.getItem("persons");
    if (persons) setPersons(JSON.parse(persons));
  }, []);

  //add new person
  function add(name, gender, age) {
    const newPersons = [
      ...persons,
      {
        name,
        gender,
        age
      }
    ];
    setPersons(newPersons);
    localStorage.setItem("persons", JSON.stringify(newPersons));
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            onChange={(e) => setInputName(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) => setInputGender(e.target.value)}
          >
            <option value="" disabled selected hidden>
              {" "}
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 30"
            onChange={(e) => setInputAge(e.target.value)}
          ></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
          onClick={() => add(inputName, inputGender, inputAge)}
        >
          Submit
        </button>

        <div className="mb-4"></div>

        <p className="is-4 title has-text-centered">Person List</p>
        {persons.map((x, i) => (
          <PersonTable {...x} key={i} />
        ))}

        <p>Chayanin Suatap 610631100</p>
      </div>
    </div>
  );
}

export default App;
