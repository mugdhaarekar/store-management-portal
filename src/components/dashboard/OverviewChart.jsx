import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material/styles";


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const revenue = [20000, 32000, 25000, 42000, 38000, 52000];

export default function OverviewChart() {
  const theme = useTheme();

  return (
    <Box className="flex flex-col h-full">
      <div className="font-bold mb-4">Overview</div>

      <Box className="flex-1 min-h-[18rem]">
      <BarChart
        xAxis={[{ scaleType: "band", data: months }]}
        series={[
            {
            data: revenue,
            color: theme.palette.primary.main, // dynamic color
            },
        ]}
        grid={{ horizontal: true }}
        margin={{ left: 40, right: 20, top: 20, bottom: 30 }}
        borderRadius={7}
       />
      </Box>
    </Box>
  );
}