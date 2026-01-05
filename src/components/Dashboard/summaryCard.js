import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const SummaryCard = ({ title, value ,onAddClick}) => (


<Box
  sx={{
    position: "relative",
    mb: 4,
    borderRadius: 3,
    overflow: "hidden",
    // minHeight: 260,
    backgroundImage: `url(/assets/imageBG.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
    //   background:
    //     "linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.2) 100%)",
    }}
  />

  {/* Content */}
  <Stack
    spacing={2}
    sx={{
      position: "relative",
      zIndex: 1,
      p: 4,
      maxWidth: 700,
    }}
  >
    <Typography variant="h3" fontWeight={700}>
      Welcome to Company, Inc.
    </Typography>

    <Typography color="text.secondary">
      Manage your employees efficiently with our intuitive
      corporate admin dashboard.
    </Typography>

    <Button
      variant="contained"
      size="large"
      sx={{ width: "fit-content", mt: 2 }}
      onClick={onAddClick}
    >
      + Add Employee
    </Button>
  </Stack>
</Box>

);

export default function SummaryCards({ employees,onAddClick}
 ) {
  const total = employees.length;
 

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} md={4}>
        <SummaryCard title="Total Employees" value={total} onAddClick={onAddClick} />
      </Grid>
    </Grid>
  );
}




