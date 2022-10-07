import React from "react";

const Records = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Last name</th>
          <th scope="col">email</th>
          <th scope="col">gender</th>
          <th scope="col">IP</th>
          <th scope="col">address</th>
          <th scope="col">city</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
