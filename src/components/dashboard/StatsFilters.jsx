import { Box, Button, MenuItem, Select, Typography } from '@mui/material'

export default function StatsFilters() {
    return(<Box className="flex justify-between items-center">
        <Box className="flex items-center gap-4">
        <Typography variant="h5" className="font-semibold">
            Stats
        </Typography>

        <Select size="small" defaultValue="years">
            <MenuItem value="years">Years</MenuItem>
        </Select>

        <Select size="small" defaultValue="range">
            <MenuItem value="range">Aug 20th - Dec 4th</MenuItem>
        </Select>

        <Typography>compared to</Typography>

        <Select size="small" defaultValue="previous">
            <MenuItem value="previous">Previous</MenuItem>
        </Select>

        <Select size="small" defaultValue="2024">
            <MenuItem value="2024">2024</MenuItem>
        </Select>
        </Box>

        <Box className="flex gap-3">
        <Button variant="outlined">+ Add</Button>
        <Button variant="outlined">Edit</Button>
        </Box>
    </Box>)
}