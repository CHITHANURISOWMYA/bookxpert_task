import React, { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  const saveEmployees = (data) => {
    setEmployees(data);
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Delete employee?")) {
      saveEmployees(employees.filter((e) => e.id !== id));
    }
  };

  const filteredEmployees = employees.filter((e) => {
    return (
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterGender ? e.gender === filterGender : true) &&
      (filterStatus ? String(e.active) === filterStatus : true)
    );
  });

  return (
    <div className="dashboard">
      <h2>Employee Management Dashboard</h2>

      <div className="summary">
        <p>Total Employees: {employees.length}</p>
        <p>Active: {employees.filter(e => e.active).length}</p>
        <p>Inactive: {employees.filter(e => !e.active).length}</p>
      </div>

      {/* <EmployeeForm
        employees={employees}
        saveEmployees={saveEmployees}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
      /> */}

      <div className="filters">
        <input
          placeholder="Search Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilterGender(e.target.value)}>
          <option value="">All Genders</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td><img src={e.image} alt="" width="40" /></td>
              <td>{e.name}</td>
              <td>{e.gender}</td>
              <td>{e.dob}</td>
              <td>{e.state}</td>
              <td>
                <input
                  type="checkbox"
                  checked={e.active}
                  onChange={() => {
                    saveEmployees(
                      employees.map(emp =>
                        emp.id === e.id ? { ...emp, active: !emp.active } : emp
                      )
                    );
                  }}
                />
              </td>
              <td>
                <button onClick={() => setEditingEmployee(e)}>Edit</button>
                <button onClick={() => deleteEmployee(e.id)}>Delete</button>
                <button onClick={() => window.print()}>Print</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
