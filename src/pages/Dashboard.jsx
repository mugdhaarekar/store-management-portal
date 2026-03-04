import { Box, Grid, Paper, Typography } from "@mui/material";
// import Topbar from "../layout/Topbar";
// import Sidebar from "../layout/Sidebar";
import OverviewChart from "../components/dashboard/OverviewChart";
import RecentSalesChart from "../components/dashboard/RecentSalesChart";
import StatsSection from "../components/dashboard/StatsSection";
import SmallLineCard from "../components/dashboard/SmallLineCard";
import SubscriptionCard from "../components/dashboard/SubscriptionCard";
import TopSalesTable from "../components/dashboard/TopSalesTable";
import PaymentHistoryTable from "../components/dashboard/PaymentHistoryTable";
import StatsFilters from "../components/dashboard/StatsFilters";

const StatCard = ({ title, value }) => (
  <Paper className="p-4 shadow-sm w-64 h-24 rounded-1" >
    <Typography variant="h" color="text.secondary" fontWeight={700}>
      {title}
    </Typography>
    <Typography variant="h6" fontWeight={600}>
      {value}
    </Typography>
  </Paper>
);

export default function Dashboard() {
  return (
    <Box className="flex">
      {/* Main */}
      <Box className="flex-1 pb-1 min-h-screen px-10" sx={{ bgcolor: "background.default" }}>
        <Typography variant="h5" className="font-bold mb-8">
          Dashboard
        </Typography>

        <Grid container spacing={2} className="mb-4 flex justify-between">
          <Grid item xs={12} md={3}>
            <StatCard title="Total Earning" value="$112,893" />
          </Grid>

          <Grid item xs={12} md={3} >
            <StatCard title="Views" value="+112,893" />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard title="Total Sales" value="+112,893" />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard title="Subscriptions" value="+112,893" />
          </Grid>
        </Grid>
        {/* ⭐ Charts row */}
        <Box className="mt-7">
          <Grid container spacing={1} alignItems="stretch" justifyContent="space-between">
            {/* Large Overview */}
            <Grid item xs={12} md={8} className="w-[50rem]">
              <Paper className="p-5 shadow-sm flex flex-col rounded-1 h-[20rem]">
                <OverviewChart />
              </Paper>
            </Grid>

            {/* Sales Chart */}
            <Grid item xs={12} md={4} className="flex w-[30rem]">
              <Paper className="p-5 shadow-sm flex flex-col rounded-1 h-[20rem] w-[35rem]">
                <RecentSalesChart />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box>
            <StatsSection />
        </Box>
        <Box className="mt-7">
          <StatsFilters/>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <SmallLineCard title="Total Earning" color="#22c55e" />
          <SmallLineCard title="Total Sales" color="#8b5cf6" />
          <SmallLineCard title="Total Views" color="#f59e0b" />
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <SubscriptionCard />
          <TopSalesTable />
          <PaymentHistoryTable />
        </Box>

      </Box>
    </Box>
  );
}