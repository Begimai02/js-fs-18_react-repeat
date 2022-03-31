import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../Toastify";

export const context = createContext();

const API = "http://localhost:8000/data";
const INIT_STATE = {
  data: [],
  edited: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PERSON":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_ID":
      return {
        ...state,
        edited: action.payload,
      };
    default:
      return state;
  }
}

const MyContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getPersonData = async () => {
    try {
      let { data } = await axios(API);
      let action = {
        type: "GET_PERSON",
        payload: data,
      };
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  const addPerson = async (newPerson) => {
    try {
      let res = await axios.post(API, newPerson);
      navigate("/list");
      notify("info", `Успешно добавлен! ${newPerson.name}`);
    } catch (err) {
      console.log(err);
    }
  };
  async function savePerson(obj) {
    try {
      let res = await axios.patch(`${API}/${obj.id}`, obj);
      getPersonData();
      navigate("/list");
    } catch (err) {
      console.log(err);
    }
  }
  async function getId(id) {
    try {
      let { data } = await axios(`${API}/${id}`);
      let action = {
        type: "GET_ID",
        payload: data,
      };
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
  async function del(person) {
    try {
      let res = await axios.delete(`${API}/${person.id}`);
      getPersonData();
      notify("success", `Успешно удален ${person.name}!`);
    } catch (err) {
      alert("error");
    }
  }

  return (
    <context.Provider
      value={{
        data: state.data,
        edited: state.edited,
        addPerson,
        getPersonData,
        savePerson,
        getId,
        del,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default MyContextProvider;
