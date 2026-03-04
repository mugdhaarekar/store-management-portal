// components/dashboard/SmallLineCard.jsx

import { Paper, Typography, Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function SmallLineCard({ title, color }) {

  const current = [30, 25, 28, 35, 32, 29, 31, 27, 34, 40];
  const previous = [20, 30, 22, 25, 18, 26, 24, 29, 27, 38];

  return (
    <Paper
      sx={{ bgcolor: "background.paper" }}
      className="p-6 rounded-2xl shadow-sm"
    >
      <Typography className="font-semibold mb-1">
        {title}
      </Typography>

      <Typography variant="h6" fontWeight={700}>
        +112,893
      </Typography>

      <Typography className="text-sm text-green-500 mb-4">
        ▲ 70.5%
      </Typography>

      <Box className="min-h-[10rem]">
        <LineChart
          xAxis={[{ data: current.map((_, i) => i), scaleType: "point" }]}
          yAxis={[{ display: false }]}
          series={[
            {
              data: previous,
              color: "#9ca3af",
              showMark: false,
            },
            {
              data: current,
              color: color,
              showMark: false,
              curve: "natural",
            },
          ]}
          grid={{ horizontal: false, vertical: false }}
        />
      </Box>
    </Paper>
  );
}