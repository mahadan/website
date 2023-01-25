import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function ProgramsIntro() {
  return (
    <Grid container sx={{ position: "relative" }}>
      <Box
        sx={{
          display: ["none", "none", "block"],
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "url(/bg1.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        sx={{
          display: ["none", "none", "block"],
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "url(/bg2.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Grid
        md={4}
        sx={{
          display: ["none", "none", "block"],
        }}
      ></Grid>
      <Grid
        md={8}
        sx={{ zIndex: 1, p: 6, gap: 2, display: "flex", flexDirection: "column", bgcolor: "#fff9c4", color: "#e65100" }}
      >
        <Typography variant="h4" fontWeight={800}>
          OUR PROGRAMS
        </Typography>
        <Typography variant="body1">
          We disseminate critical information, share stories and best practices of districts and clubs in the region,
          organize regional conference, offer learning and development sessions, provide platform for inter-country
          connection, and advocate for regional causes that align with the Rotary&apos;s areas of focus.
        </Typography>
      </Grid>
      <Grid
        md={2}
        sx={{
          display: ["none", "none", "block"],
        }}
      ></Grid>
      <Grid
        md={2}
        sx={{ zIndex: 1, p: 6, gap: 2, display: "flex", flexDirection: "column", bgcolor: "#009999", color: "#e0f2f1" }}
      >
        <Typography variant="h4" fontWeight={800}>
          Resource Library
        </Typography>
        <Typography variant="body1">
          If you are an Asia Pacific Rotaract leader, we are here to help you in your leadership journey through our
          resources.
        </Typography>
        <div>
          <Button color="inherit" variant="outlined">
            Know More
          </Button>
        </div>
      </Grid>
      <Grid
        md={2}
        sx={{ zIndex: 1, p: 6, gap: 2, display: "flex", flexDirection: "column", bgcolor: "#f8bbd0", color: "#d91b5c" }}
      >
        <Typography variant="h4" fontWeight={800}>
          Convention
        </Typography>
        <Typography variant="body1">
          Asia Pacific Regional Rotaract Conference (APRRC) is where all the cultural showcase and ideas convergence
          happen.
        </Typography>
        <div>
          <Button color="inherit" variant="outlined">
            Know More
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProgramsIntro;
