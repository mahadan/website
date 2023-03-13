import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useGetStats } from "api/Stats";

const Stat: React.FC<{
  value: number;
  title: string;
}> = ({ title, value }) => {
  return (
    <Grid xs={12} md={4}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          gap: 1,
          flexDirection: "column",
        }}
      >
        <Typography variant={value === 0 ? "h4" : "h2"} sx={{ fontWeight: 900 }}>
          {value === 0 ? "Counting" : value}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Grid>
  );
};

function StatsThisMahadan() {
  const { camps, districts, units } = useGetStats();
  return (
    <Box
      sx={{
        background: "url(/images.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: [0, 8, 8],
        p: [4, 0],
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          textAlign: "center",
          background: "rgba(255,0,0,0.6)",
          color: "white",
          textShadow: "1px white",
          borderRadius: 5,
          backdropFilter: "blur(5px)",
          p: 5,
        }}
      >
        <Typography variant="h5">Blood Donation Camps / Unit in Mahadan 8.0</Typography>
        <Grid container spacing={4} width={"100%"}>
          <Stat value={camps} title="camps organized" />
          <Stat value={units} title="blood units collected" />
          <Stat value={districts} title="Rotary Districts involved" />
        </Grid>
      </Container>
    </Box>
  );
}

export default StatsThisMahadan;
