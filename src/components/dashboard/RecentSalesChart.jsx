import { Avatar, Box, Typography } from "@mui/material";

const sales = [
  { name: "Anna", email: "anna@mail.com", amount: "$199" },
  { name: "John", email: "john@mail.com", amount: "$250" },
  { name: "Mike", email: "mike@mail.com", amount: "$120" },
  { name: "Sara", email: "sara@mail.com", amount: "$320" },
];

export default function RecentSales() {
  return (
    <Box className="flex flex-col h-full">
      <div className="font-bold mb-4">Recent Sales</div>

      {sales.map((item, i) => (
        <Box key={i} className="flex items-center justify-between py-2">
          <Box className="flex flex-1 items-center gap-2">
            <Avatar>{item.name[0]}</Avatar>
            <Box>
              <Typography className="text-sm font-medium">
                {item.name}
              </Typography>
              <Typography className="text-xs text-gray-500">
                {item.email}
              </Typography>
            </Box>
          </Box>
          <Typography className="font-semibold">{item.amount}</Typography>
        </Box>
      ))}
    </Box>
  );
}