import { Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function WhoAreWe() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid xs={12}>
          <Typography
            sx={{
              position: "relative",
              textTransform: "uppercase",
              "&:after": {
                position: "absolute",
                content: "''",
                bottom: "-12px",
                left: "4px",
                width: "25%",
                maxWidth: "100px",
                height: "2px",
                background: "black",
                display: "block",
              },
            }}
            variant="h3"
          >
            Who Are We?
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">
            Big West Rotaract Foundation is a 501(c)(3) non-profit organization that provides leadership training and
            education to students & young professionals in the Western Region of North America.
          </Typography>
          <Typography variant="body1">
            Since 2010, Rotaract clubs & districts from across Western North America have collaborated through projects
            and conferences. In 2015, leaders from these districts came together to form Big West Rotaract as a
            registered Multi District Information Organization (MDIO) of Rotary International. In 2019, Big West
            Rotaract Foundation was incorporated in the state of California and was recognized as a 501(c)(3) nonprofit.
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5">NEW AND WONDERING WHAT ROTARACT IS?</Typography>
          <Typography variant="body1">
            Rotaract, an official program of Rotary International, brings together young leaders ages 18-30 in
            universities and communities worldwide to organize service activities, develop leadership and professional
            skills, and have fun. Local Rotary clubs sponsor them, but Rotaract members manage and fund their clubs
            independently. Rotaract members work closely with their local Rotary club(s), and may join Rotary after
            their Rotaract membership ends. Interested in joining Rotaract but need to find a club near you? Please
            contact us and we will help you find one!
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Button size="large" variant="contained">
            KNOW MORE
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
