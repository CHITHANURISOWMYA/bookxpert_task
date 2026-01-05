import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Switch,
  FormControlLabel,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import { useEffect, useState } from "react";

const states = ["Telangana", "Karnataka", "Maharashtra", "Tamil Nadu"];

const emptyForm = {
  name: "",
  gender: "",
  dob: "",
  state: "",
  active: true,
  image: "",
};

export default function EmployeeFormDrawer({
  open,
  onClose,
  onSubmit,
  editingEmployee,
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    } else {
      setForm(emptyForm);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name required";
    if (!form.gender) newErrors.gender = "Gender required";
    if (!form.dob) newErrors.dob = "DOB required";
    if (!form.state) newErrors.state = "State required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(form);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 480, p: 3 }}>
       <Typography fontSize={30} fontWeight={500} mb={2}>
          {editingEmployee ? "Edit Employee" : "Add Employee"}
        </Typography>

        {/* Image Upload */}
        <Stack direction="row" spacing={0} alignItems="center" mb={2}>
          <Avatar src={form.image} sx={{ width: 64, height: 64 }} />
          <IconButton component="label">
            <AddAPhoto />
            <input hidden type="file" onChange={handleImageUpload} />
          </IconButton>
        </Stack>
<Box sx={{margin:"10px 10px 10px 0"}}>
    
<Typography sx={{fontSize:14, marginLeft:"12px", fontWeight:"700"}}>Employee Name</Typography>
        <TextField
          name="name"
          fullWidth
        //   margin="dense"
          value={form.name}
 sx={{
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },
  }}          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
</Box>

<Box sx={{margin:"10px 10px 10px 0"}}>
    <Typography sx={{fontSize:14, marginLeft:"12px", fontWeight:"700"}}>Gender</Typography>
        <TextField
          select
          name="gender"
          fullWidth
        //   margin="dense"
          value={form.gender}
          sx={{
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },

  }}  
          onChange={handleChange}
          error={!!errors.gender}
          helperText={errors.gender}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
</Box>

<Box sx={{margin:"10px 10px 10px 0"}}>
    <Typography sx={{fontSize:14, marginLeft:"12px", fontWeight:"700"}}>Date of Birth</Typography>

        <TextField
          type="date"
        //   label="Date of Birth"
          name="dob"
          fullWidth
        //   margin="dense"
          InputLabelProps={{ shrink: true }}
          value={form.dob}
          onChange={handleChange}
          error={!!errors.dob}
          helperText={errors.dob}
          sx={{
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },
  }}  
        />
</Box>

<Box sx={{margin:"10px 10px 10px 0"}}>
        <Typography sx={{fontSize:14, marginLeft:"12px", fontWeight:"700"}}>State</Typography>


        <TextField
          select
        //   label="State"
          name="state"
          fullWidth
        //   margin="dense"
          value={form.state}
          onChange={handleChange}
          error={!!errors.state}
          helperText={errors.state}
          sx={{
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },
  }}  
        >
          {states.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>
</Box>

        <FormControlLabel
          control={
            <Switch
              checked={form.active}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, active: e.target.checked }))
              }
            />
          }
          label="Active"
        />

        <Stack direction="row" spacing={2} mt={3}>
          <Button fullWidth variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            {editingEmployee ? "Update" : "Create"}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
