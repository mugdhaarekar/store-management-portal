
import { Paper, Typography, Button } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function SubscriptionCard() {
  const data = [80, 60, 40, 65, 70, 45, 55, 68, 50, 75];

  return (
    <Paper className="p-6 rounded-2xl shadow-sm">
      <Typography variant="h6" fontWeight={600}>
        Subscriptions Performers
      </Typography>

      <Typography className="text-slate-400 mb-6">
        Follower This Years
      </Typography>

      <Typography variant="h3" fontWeight={700} className="mb-6">
        +500
      </Typography>

      <BarChart
        xAxis={[{ scaleType: "band", data: data.map((_, i) => i), display: false }]}
        yAxis={[{ display: false }]}
        series={[
          {
            data,
            color: "#f59e0b",
            borderRadius: 6,
          },
        ]}
        height={120}
      />

      <Button
        variant="contained"
        className="mt-6 rounded-xl"
        sx={{ bgcolor: "#16a34a" }}
        fullWidth
      >
        Get Started
      </Button>
    </Paper>
  );
}