import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Stat: React.FC<{
  value: string;
  title: string;
}> = ({ title, value }) => {
  return (
    <Grid xs={6} md={3} sx={{ textAlign: "center", display: "flex", gap: 1, flexDirection: "column" }}>
      <Typography variant="h2" sx={{ fontWeight: 900 }}>
        {value}
      </Typography>
      <Typography variant="h6">{title}</Typography>
    </Grid>
  );
};

function StatsBreif() {
  return (
    <Box
      sx={{
        bgcolor: "#D51067",
        color: "#fff",
        py: 6,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Grid container spacing={4}>
          <Stat value="31k+" title="members" />
          <Stat value="1402" title="clubs" />
          <Stat value="19" title="districts" />
          <Stat value="&infin;" title="possibilites" />
        </Grid>
        <Typography textAlign="center" fontStyle="italic">
          Data as of 27-11-2022
        </Typography>
      </Container>
    </Box>
  );
}

export default StatsBreif;
