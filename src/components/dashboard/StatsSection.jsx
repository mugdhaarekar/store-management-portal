import {
    Box,
    Paper,
    Typography,
  } from "@mui/material";
  import { LineChart } from "@mui/x-charts/LineChart";
  import { useTheme } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts";
import StatsFilters from "./StatsFilters";

  const totalEarningData = [20, 10, 40, 60, 35, 45, 30, 50];
  const subscriptionData = [20, 35, 25, 15, 30, 60];
  const totalEarningLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const earningBarValues = [40, 60, 30, 50, 35, 45, 55];
  const earningBarMaxValue = 100; 
  const currentWeek = [200, 160, 270, 350, 200, 280, 300];
  const previousWeek = [300, 290, 470, 510, 340, 380, 400];
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  
  
  export default function StatsSection() {
    const theme = useTheme();
    const remainingBarValue = earningBarValues.map((v) => earningBarMaxValue - v);

    return (
      <Box className="mt-10 space-y-6">
        <StatsFilters/>
        {/* ===== ROW 1 ===== */}
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Line Chart Card */}
          <Paper
            sx={{ bgcolor: "background.paper" }}
            className="md:col-span-2 p-6 rounded-2xl shadow-sm flex flex-col"
          >
            <Typography className="font-semibold mb-2">
              Total Earning
            </Typography>

            <Typography variant="h5" fontWeight={700}>
              $112,893.00
            </Typography>

            {/* MUI Line Chart */}
            <Box className="flex-1 min-h-[18rem]">
              <LineChart
                xAxis={[
                  {
                    scaleType: "point",
                    data: totalEarningLabels,
                  },
                ]}
                yAxis={[{ position: 'none' }]}
                series={[
                  {
                    data: totalEarningData,
                    color: theme.palette.success.main, // green theme-based
                  },
                ]}
                grid={{ horizontal: true }}
                margin={{ left: 40, right: 20, top: 20, bottom: 30 }}
              />
            </Box>
          </Paper>
          {/* Small Bar Card */}
          <Paper
            sx={{ bgcolor: "background.paper" }}
            className="p-6 rounded-2xl shadow-sm flex flex-col"
          >
            <Typography className="font-semibold mb-2">
              Total Earning
            </Typography>

            <Typography variant="h5" fontWeight={700} className="mb-4">
              $112,893.00
            </Typography>

            <Box className="flex-1 min-h-[16rem]">
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: earningBarValues.map((_, i) => i),
                    display: false,
                  },
                ]}
                yAxis={[{ display: false }]}
                series={[
                  {
                    data: earningBarValues,
                    stack: "total",
                    color: theme.palette.earnings.main,
                  },
                  {
                    data: remainingBarValue,
                    stack: "total",
                    color: theme.palette.earnings.light,
                  },        
                ]}
                grid={{ horizontal: false, vertical: false }}
                margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
                borderRadius={6}
              />
            </Box>
          </Paper>
        </Box>
        {/* ===== ROW 2 ===== */}
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          {/* Large Bar Card */}
          <Paper
            sx={{ bgcolor: "background.paper" }}
            className="md:col-span-2 p-6 rounded-2xl shadow-sm"
          >
            <Typography className="font-semibold mb-2">
              Total Earning
            </Typography>

            <Typography variant="h5" fontWeight={700} className="mb-4">
              $112,893.00
            </Typography>

            <Box className="mt-4">
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: days,
                  },
                ]}
                series={[
                  {
                    data: previousWeek,
                    color: theme.palette.success.light, // light green
                    borderRadius: 6,
                  },
                  {
                    data: currentWeek,
                    color: theme.palette.success.main, // strong green
                    borderRadius: 6,
                  },
                ]}
                grid={{ horizontal: true }}
                margin={{ top: 2, bottom: 1, left: 40, right: 20 }}
              />
            </Box>
          </Paper>
          {/* Small Line Card */}
          <Paper
            sx={{ bgcolor: "background.paper" }}
            className="p-6 rounded-2xl shadow-sm flex flex-col"
          >
            <Typography className="font-semibold mb-2">
              Subscriptions
            </Typography>

            <Typography variant="h5" fontWeight={700}>
              +112,893
            </Typography>

            {/* Line Chart */}
            <Box className="flex-1 min-h-[16rem]">
              <LineChart
                series={[
                  {
                    data: subscriptionData,
                    color:
                      theme.palette.mode === "dark"
                        ? "#f97316"
                        : "#fb923c",
                    curve: "linear",
                    showMark: true,
                  },
                ]}
                grid={{ horizontal: false }}
                margin={{ left: 30, right: 20, top: 20, bottom: 30 }}
                sx={{
                  ".MuiChartsAxis-root": { display: "none" }, // hide axes completely
                }}

              />
            </Box>
          </Paper>
        </Box>
      </Box>
    );
  }