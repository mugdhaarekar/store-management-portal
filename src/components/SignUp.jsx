import React, { useState } from "react";
import loginBg from "../images/loginBackground.svg";
import googleIcon from '../images/google.svg';
import { loginWithGoogle } from "../auth/authService";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Typography,
  Box,
} from "@mui/material";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);
  const disableGetStarted = !firstName || !lastName || !email || !password || !checked || Object.values(errors).some((error) => error)

  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";
  
    if (name === "firstName") {
      if (!value.trim()) {
        error = "First name is required";
      } else if (!/^[A-Za-z]+$/.test(value)) {
        error = "First name must contain only alphabets";
      }    
    }
  
    if (name === "lastName") {
      if (!value.trim()) {
        error = "Last name is required";
      } else if (!/^[A-Za-z]+$/.test(value)) {
        error = "Last name must contain only alphabets";
      }
    }
  
    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is not valid";
    }
  
    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6) error = "Password must be at least 6 characters";
    }
  
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSignup = () => {
    navigate("/dashboard");
  };
  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      if(user) navigate("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };
  

  return (
    <div className="flex min-h-screen">
      {/* LEFT PANEL */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-12">
        <Box className="max-w-md w-full mx-auto">
          <Box className="mb-4 flex flex-col items-center">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>

            <Typography className="mb-6 text-gray-500">
              Sign Up For Free
            </Typography>
          </Box>

          <div className="space-y-4">
            <TextField
              fullWidth
              type="name"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={(e) => validateField("firstName", e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />  
            <TextField
              fullWidth
              type="name"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={(e) => validateField("lastName", e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />  
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateField("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />            
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => validateField("password", e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              }
              label="I agree to all Term, Privacy Policy and fees"
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              className="blue-button rounded-1"
              onClick={handleSignup}
              disabled={disableGetStarted}
            >
              Get Started
            </Button>

            <Divider>OR</Divider>

            <Button variant="outlined" fullWidth className="rounded-1" onClick={handleGoogleLogin}>
              <img src={googleIcon} alt="Google Icon" className="mr-2"/>
              Sign in with Google
            </Button>

            <Typography align="center" className="mt-2">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer">Login</span>
            </Typography>
          </div>
        </Box>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={loginBg}
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;