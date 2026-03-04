import {
  Box,
  TextField,
  Button,
  Avatar,
  IconButton,
  MenuItem,
  Select,
  Menu,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Topbar({ mode, setMode,role,setRole }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/",{ replace: true });
  };

  return (
    <Box className="flex justify-between items-center mb-6">
      
      {/* Search */}
      <Box className="flex gap-3 w-1/2">
        <TextField size="small" fullWidth placeholder="Search" />
        <Button variant="contained" color="blue">Search</Button>
      </Box>

      <Box className="flex flex-col-reverse gap-4">

        {/* Add product button */}
        <Button
          variant="contained"
          className="rounded-lg"
          color="brand"
          onClick={() => navigate("/add-product")}
        >
          + Add New Product
        </Button>

        <Box className="flex items-center gap-3">

          {/* ⭐ Theme Toggle */}
          <IconButton
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
          >
            {mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>

          <Select
            size="small"
            value={role?role:"manager"}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="store_keeper">Store Keeper</MenuItem>
            <MenuItem value="manager" selected>Manager</MenuItem>
          </Select>

          <IconButton>
            <AppsIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={handleAvatarClick}
          />

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                handleLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}