import {
  Box,
  TextField,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar({ mode, setMode,role,setRole }) {
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();
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

          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={() => setAnchor(null)}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

          <IconButton>
            <AppsIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <Avatar />
        </Box>
      </Box>
    </Box>
  );
}