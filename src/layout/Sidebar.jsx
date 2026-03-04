import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import AddIcon from "@mui/icons-material/Add";

const MenuItem = ({ icon, text, to, roles,role }) => {
  if (roles && !roles.includes(role)) return null;

  return (
    <NavLink
      to={to}
      style={{ textDecoration: "none" }}
      className={({ isActive }) =>
        `block rounded-lg mb-1 ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "hover:bg-slate-100"
        }`
      }
    >
      <ListItemButton>
        <ListItemIcon className="min-w-[36px] text-inherit">
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </NavLink>
  );
};

export default function Sidebar({role}) {

  return (
    <Box
      sx={{ bgcolor: "background.default" }}
      className="w-[260px] h-screen border-r border-slate-200 p-4"
    >
        <Typography className="text-xs text-slate-400 mt-4 mb-2 pl-2">
          MENU
        </Typography>
      <List className="p-0">
        {role === "manager" && <MenuItem
          icon={<DashboardIcon />}
          text="Dashboard"
          to="/dashboard"
          roles={["manager"]}
          role={role}
        /> }

        <MenuItem
          icon={<StoreIcon />}
          text="Product"
          to="/products"
          roles={["manager","store_keeper"]}
          role={role}
        />

        <MenuItem
          icon={<AddIcon />}
          text="Add Product"
          to="/add-product"
          roles={["manager","store_keeper"]}
          role={role}
        />

      </List>
    </Box>
  );
}