import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Layout({ mode, setMode,role, setRole }) {
  return (
    <>
      <Box className="flex min-h-screen">      
        <Sidebar role={role} setRole={setRole}/>
        {/* Main Content */}
        <Box className="flex-1 flex flex-col">
          <Box className="p-6 flex-1">
            <Topbar mode={mode} setMode={setMode} role={role} setRole={setRole} />
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}