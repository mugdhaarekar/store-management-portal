import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, CircularProgress } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { getTheme } from "./components/themes/theme";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Layout from "./layout/Layout";
import AddProduct from "./pages/AddProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );
  const [role, setRole] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const savedRole = localStorage.getItem("role") || "manager";
        setRole(savedRole);
      } else {
        setRole("");
      }

      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);
  if (authLoading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.default"
        }}
      >
        <CircularProgress size={50} />
      </Box>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp setRole={setRole}/>} />
            <Route  element={<Layout mode={mode} setMode={setMode} role={role} setRole={setRole}/>}>
              <Route path="/dashboard" element={<ProtectedRoute path={"/dashboard"}><Dashboard/></ProtectedRoute>} />
              <Route path="/products" element={<ProtectedRoute path={"/products"}><Product/></ProtectedRoute>} />
              <Route path="/add-product" element={<ProtectedRoute path={"/add-product"}><AddProduct/></ProtectedRoute>} />              
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;