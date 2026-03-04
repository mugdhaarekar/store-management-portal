// components/dashboard/TopSalesTable.jsx

import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Box,
  } from "@mui/material";
  
  export default function TopSalesTable() {
    return (
      <Paper className="p-6 rounded-2xl shadow-sm">
        <Typography variant="h6" fontWeight={600} mb={2}>
          Top Sales Product
        </Typography>
  
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {[1, 2, 3, 4, 5].map((row) => (
              <TableRow key={row}>
                <TableCell>Youremail@email.com</TableCell>
                <TableCell align="right">$100</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        <Box className="flex justify-end gap-3 mt-4">
          <Button variant="outlined">Previous</Button>
          <Button variant="contained" sx={{ bgcolor: "#16a34a" }}>
            Next
          </Button>
        </Box>
      </Paper>
    );
  }