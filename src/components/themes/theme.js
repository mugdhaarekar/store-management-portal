import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#f97316" : "#4f46e5", // orange : purple
      },
      background: {
        default: mode === "dark" ? "#0f172a" : "#f8fafc",
        paper: mode === "dark" ? "#1e293b" : "#ffffff",
      },
      earnings: {
        main: "#22c55e",   
        light: "#f7fef9",
        trend: "#16a34a",
      },
      brand: {
        main: "#4f46e5",
        contrastText: "#ffffff",
      },
      blue: {
        main: "#3b82f6",
        contrastText: "#ffffff",
      },    
    },
  });