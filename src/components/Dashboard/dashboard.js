

import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import SummaryCards from "./summaryCard";
import EmployeeTable from "./employeeTable";
// import { getEmployees } from "../service/mockdata";
import Layout from "./layout";
import {   
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
 } from "../service/employeeAPI.js";
import EmployeeFormDrawer from "./employeeform.js";
import EmployeeSearchFilter from "./employeeFilter.js";
import bgImage from '../../assets/images/imageBG.png';


export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");
const [gender, setGender] = useState("");
const [status, setStatus] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const filteredEmployees = employees.filter((emp) => {
  const matchesSearch = emp.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesGender = gender ? emp.gender === gender : true;

  const matchesStatus =
    status === ""
      ? true
      : status === "active"
      ? emp.active
      : !emp.active;

  return matchesSearch && matchesGender && matchesStatus;
});

const handleReset = () => {
  setSearch("");
  setGender("");
  setStatus("");
};
  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleAddClick = () => {
    setEditingEmployee(null);
    setDrawerOpen(true);
  };

  const handleEditClick = (emp) => {
    setEditingEmployee(emp);
    setDrawerOpen(true);
  };

  const handleSubmit = async (formData) => {
    if (editingEmployee) {
      const updated = await updateEmployee(editingEmployee.id, {
        ...editingEmployee,
        ...formData,
      });

      setEmployees((prev) =>
        prev.map((e) => (e.id === updated.id ? updated : e))
      );
    } else {
      const saved = await addEmployee({
        ...formData,
        empId: `EMP00${employees.length + 1}`,
      });
      setEmployees((prev) => [...prev, saved]);
    }

    setDrawerOpen(false);
  };

  const handleToggleStatus = async (emp) => {
    const updated = await updateEmployee(emp.id, {
      ...emp,
      active: !emp.active,
    });

    setEmployees((prev) =>
      prev.map((e) => (e.id === emp.id ? updated : e))
    );
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };



  return (
    <>
    <div
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",      // cover entire screen
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundAttachment: "fixed", // <-- this makes it fixed while scrolling
  }}
>
   
    <Layout>
      {/* <Typography variant="h4" gutterBottom>
        Welcome to Company, Inc.
      </Typography>

      <Button variant="contained" sx={{ mb: 3 }} onClick={handleAddClick}>
        Add Employee
      </Button> */}

 <SummaryCards employees={employees} onAddClick={handleAddClick} />
  

<Paper
  elevation={0}
  sx={{
    p: 3,
    mb: 4,
    borderRadius: 2,
    border: "1px solid #eef2f7",
  }}
>
  <Typography fontWeight={600} mb={0.5}>
    Employee Search
  </Typography>
  <Typography fontSize={13} color="text.secondary" mb={2}>
    Search employees by name and filter by status
  </Typography>

  <EmployeeSearchFilter
    search={search}
    setSearch={setSearch}
    gender={gender}
    setGender={setGender}
    status={status}
    setStatus={setStatus}
    onReset={handleReset}
  />
</Paper>


<Paper
  elevation={0}
  sx={{
    borderRadius: 2,
    border: "1px solid #eef2f7",
    overflow: "hidden",
  }}
>
  <EmployeeTable
    employees={filteredEmployees}
    onEdit={handleEditClick}
    onToggleStatus={handleToggleStatus}
    onDelete={handleDelete}
    addEmployee={handleAddClick}
  />
</Paper>



      <EmployeeFormDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        editingEmployee={editingEmployee}
        onSubmit={handleSubmit}
      />
    </Layout>
    </div>
    </>
  );
}



