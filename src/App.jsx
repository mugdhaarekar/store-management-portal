import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { getTheme } from "./components/themes/theme";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Layout from "./layout/Layout";
import AddProduct from "./pages/AddProduct";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

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