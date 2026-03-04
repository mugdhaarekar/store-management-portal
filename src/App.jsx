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
  const [role, setRole] = useState("manager");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route  element={<Layout mode={mode} setMode={setMode} role={role} setRole={setRole}/>}>
              <Route path="/dashboard" element={<ProtectedRoute path="/dashboard" role={role}><Dashboard/></ProtectedRoute>} />
              <Route path="/products" element={<Product/>} />
              <Route path="/add-product" element={<AddProduct/>} />              
              <Route path="/traffic" element={<div>Traffic</div>} />
              <Route path="/payment" element={<div>Payment</div>} />
              <Route path="/account-setting" element={<div>Account Setting</div>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;