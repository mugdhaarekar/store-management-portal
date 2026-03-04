import { Box, Typography, TextField, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
      className="py-10 px-10"
    >
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section */}
        <Box>
          <Typography variant="h6" fontWeight={700} mb={2}>
            <span style={{ color: "#f97316" }}>◈</span> Opion
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Ease of shopping is our main focus. With powerful search
            features and customizable filters, you can easily find
            the products you are looking for.
          </Typography>

          <Box className="flex gap-3 mb-6">
            <IconButton sx={{ bgcolor: "action.hover" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ bgcolor: "action.hover" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ bgcolor: "action.hover" }}>
              <LinkedInIcon />
            </IconButton>
          </Box>

          <Typography fontWeight={500} mb={1}>
            Subscribe to Newsletter
          </Typography>

          <TextField
            size="small"
            fullWidth
            placeholder="Enter Your Email Here"
          />
        </Box>

        {/* Columns */}
        <Box>
          <Typography fontWeight={600} mb={2}>
            Get Started
          </Typography>
          <Box className="flex flex-col gap-2">
            <Typography color="text.secondary">Service</Typography>
            <Typography color="text.secondary">Contact Us</Typography>
            <Typography color="text.secondary">Affiliate Program</Typography>
            <Typography color="text.secondary">About Us</Typography>
          </Box>
        </Box>

        <Box>
          <Typography fontWeight={600} mb={2}>
            Get Started
          </Typography>
          <Box className="flex flex-col gap-2">
            <Typography color="text.secondary">Dashboard</Typography>
            <Typography color="text.secondary">Platform</Typography>
            <Typography color="text.secondary">Workout Library</Typography>
            <Typography color="text.secondary">App Design</Typography>
          </Box>
        </Box>

        <Box>
          <Typography fontWeight={600} mb={2}>
            Get Started
          </Typography>
          <Typography color="text.secondary">About Us</Typography>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box
        sx={{ borderTop: 1, borderColor: "divider" }}
        className="mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm"
      >
        <Typography color="text.secondary">
          2024 MaxFit
        </Typography>

        <Typography color="text.secondary">
          Twitter — Instagram — Facebook
        </Typography>
      </Box>
    </Box>
  );
}