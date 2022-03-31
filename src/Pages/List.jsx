import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { context } from "../Context/MyContextProvider";

const List = () => {
  const { getPersonData, data, del } = useContext(context);

  useEffect(() => {
    getPersonData();
  }, []);
  return (
    <div>
      <h1>List pages</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => del(item)}>
                    Del
                  </button>
                  <Link to={`/edit/${item.id}`}>
                    <button className="btn btn-info">Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <h2>Loading</h2>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
