import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../Context/MyContextProvider";

const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    getId(id);
  }, []);
  const [person, setPerson] = useState({
    name: "",
    lastName: "",
    userName: "",
  });
  const { savePerson, getId, edited } = useContext(context);
  function handleChange(e) {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(obj);
  }
  function handleSubmit() {
    savePerson(person);

    setPerson({ name: "", lastName: "", userName: "" });
  }
  useEffect(() => {
    if (edited) {
      setPerson(edited);
    }
  }, [edited]);
  return (
    <div>
      <h1>Edit page</h1>
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

export default Edit;
