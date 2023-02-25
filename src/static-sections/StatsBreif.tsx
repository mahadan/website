import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Stat: React.FC<{
  value: string;
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
        <Typography variant="h2" sx={{ fontWeight: 900 }}>
          {value}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Grid>
  );
};

function StatsBreif() {
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
        <Typography variant="h5">
          Since 7 years from inception, Mahadan Team makes effort to take a small step towards better tommorow
        </Typography>
        <Grid container spacing={4} width={"100%"}>
          <Stat value="1.6k+" title="camps organized" />
          <Stat value="103k+" title="blood units collected" />
          <Stat value="58" title="Rotary Districts involved" />
        </Grid>
      </Container>
    </Box>
  );
}

export default StatsBreif;
