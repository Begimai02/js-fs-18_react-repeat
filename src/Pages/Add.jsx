import React, { useContext, useState } from "react";
import { context } from "../Context/MyContextProvider";

const Add = () => {
  const [person, setPerson] = useState({
    name: "",
    lastName: "",
    userName: "",
  });
  const { addPerson } = useContext(context);
  function handleChange(e) {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(obj);
    console.log(obj);
  }
  function handleSubmit() {
    addPerson(person);
    setPerson({ name: "", lastName: "", userName: "" });
  }

  return (
    <div>
      <h1>Add page</h1>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="lastName"
        value={person.lastName}
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="userName"
        value={person.userName}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Add;
