import { useState } from "react";
import {
  Avatar,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PrintIcon from "@mui/icons-material/Print";
import { AddAPhoto, GroupAdd, People } from "@mui/icons-material";
import { printEmployee } from "../../utils/printEmployee";

export default function EmployeeTable({ employees, setEmployees ,onToggleStatus, onDelete,  onEdit,addEmployee}) {

  const toggleStatus = (id) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, active: !emp.active } : emp
      )
    );
  };

  const [open, setOpen] = useState(false);
const [selectedEmployee, setSelectedEmployee] = useState(null);

const handleDeleteClick = (emp) => {
  setSelectedEmployee(emp);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setSelectedEmployee(null);
};

const handleConfirmDelete = () => {
  onDelete(selectedEmployee?.id);
  handleClose();
};



  return (
<>
    <Dialog open={open} onClose={handleClose}>
  <DialogTitle>Confirm Delete</DialogTitle>

  <DialogContent>
    <DialogContentText>
      Are you sure you want to delete{" "}
      <strong>{selectedEmployee?.name}</strong>?
      <br />
      This action cannot be undone.
    </DialogContentText>
  </DialogContent>

  <DialogActions sx={{width:"400px"}}>
    <Button onClick={handleClose} color="inherit">
      Cancel
    </Button>
    <Button
      onClick={handleConfirmDelete}
      color="error"
      variant="contained"
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Status</TableCell>
          <TableCell align="center">
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 4
    }}
  >
    <Typography variant="body2" fontWeight={500}>
      Actions
    </Typography>
    <GroupAdd fontSize="small" onClick={()=>{addEmployee()}

    } />
  </Box>
</TableCell>

           
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.map(emp => (
            <TableRow key={emp.id}>
              <TableCell>{emp.id}</TableCell>
              <TableCell>
                <Avatar src={emp.image} />
              </TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.gender}</TableCell>
              <TableCell>{emp.dob}</TableCell>
              <TableCell>{emp.state}</TableCell>
              <TableCell>
                <Switch
                  checked={emp.active}
                  onChange={() => onToggleStatus(emp)}
                  color="success"
                />
              </TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => onEdit(emp)}>
  <EditIcon />
</IconButton>
             <IconButton color="error" onClick={() => handleDeleteClick(emp)}>
  <DeleteIcon />
</IconButton>
               <IconButton onClick={() => printEmployee(emp)}>
  <PrintIcon />
</IconButton>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>

    </>
  );
}
