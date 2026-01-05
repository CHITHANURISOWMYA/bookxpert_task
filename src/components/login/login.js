

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
  username: "",
  password: "",
});


const handleLogin = () => {
  let newErrors = {
    username: "",
    password: "",
  };

  if (!username.trim()) {
    newErrors.username = "User Name is required";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  if (newErrors.username || newErrors.password) return;

  // ✅ Save user info
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);

  navigate("/dashboard");
};



  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4b4748ff, #eb6b96ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 420,
          backgroundColor: "#fff",
          borderRadius: "12px",
          p: 4,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0B5C7B",
            mb: 3,
          }}
        >
          Login To BookXpert
        </Typography>

        {/* Username */}
        <Typography sx={{ fontSize: 14, mb: 0.5 }}>
          User Name
        </Typography>
        {/* <TextField
          fullWidth
          size="small"
          placeholder="Enter your User Name here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography sx={{ fontWeight: 600, color: "#555" }}>
                  @bookxpert
                </Typography>
              </InputAdornment>
            ),
          }}
        /> */}

         <TextField
          fullWidth
          size="small"
          placeholder="Enter your User Name here"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors({ ...errors, username: "" });
          }}
            sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  }}
          error={Boolean(errors.username)}
          helperText={errors.username}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography sx={{ fontWeight: 600 }}>@bookxpert</Typography>
              </InputAdornment>
            ),
          }}
        />

        <Typography
          sx={{
            fontSize: 13,
            color: "#2962FF",
            textAlign: "right",
            mt: 0.5,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Forgot your User Name?
        </Typography>

        {/* Password */}
        <Typography sx={{ fontSize: 14, mt: 2, mb: 0.5 }}>
          Password
        </Typography>
        {/* <TextField
          fullWidth
          size="small"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

          <TextField
          fullWidth
          size="small"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
             sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  }}
          error={Boolean(errors.password)}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography
          sx={{
            fontSize: 13,
            color: "#2962FF",
            textAlign: "right",
            mt: 0.5,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Forgot Password?
        </Typography>

        {/* Login Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              width: 140,
              height: 38,
              textTransform: "capitalize",
              backgroundColor: "#0B5C7B",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#094B64",
              },
            }}
          >
            Login
          </Button>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Register Section */}
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
          New to BookXpert ?
        </Typography>

        <Typography sx={{ fontSize: 13, mt: 0.5 }}>
          Is this the first time you are visiting our  Website ? If yes,
          Click Register Now to Signup
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mt: 2,
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: 600,
          }}
        >
          Register Now
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

