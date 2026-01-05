import {
  Box,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function EmployeeSearchFilter({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus,
  onReset,
}) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        {/* <Typography fontWeight={600} mb={0.5}>
          Employee Search
        </Typography>
        <Typography fontSize={13} color="text.secondary" mb={2}>
          Search employees by name
        </Typography> */}

        <Box display="flex" gap={2} flexWrap="wrap">
          {/* Search */}
          <TextField
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, minWidth: 240 ,
                "& .MuiOutlinedInput-input": {
      padding: "14px 14px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",   // ✅ correct place
    },
            }}
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          {/* Gender Filter */}
          <TextField
            select
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            sx={{ flex: 0.5,width: 160,
                         "& .MuiOutlinedInput-input": {
      padding: "14px 14px",
    },
     "& .MuiOutlinedInput-root": {
      borderRadius: "15px",   // ✅ correct place
    },
             }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>

          {/* Status Filter */}
          <TextField
            select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ width: 160,
                         "& .MuiOutlinedInput-input": {
      padding: "14px 14px",
    },
     "& .MuiOutlinedInput-root": {
      borderRadius: "15px",   // ✅ correct place
    },
             }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>

          {/* Reset */}
          <IconButton onClick={onReset}>
            <RefreshIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
