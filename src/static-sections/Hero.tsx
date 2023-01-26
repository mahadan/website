import { Box, Button } from "@mui/material";
import Logo from "components/ui/Logo";

const TEXTS = ["Together Let us", "donate blood", "and save lives."];

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: 10,
        pb: 15,
        flexGrow: 1,
        gap: 4,
      }}
    >
      <Logo name="full_landscape" wrapperSx={{ display: ["none", "block", "block"], width: ["75%", "50%", "45%"] }} />
      <Logo name="full_portrait" wrapperSx={{ display: ["block", "none"], width: "85%" }} />
      <div>
        <Button size="large" variant="contained" color="secondary">
          Become A Volunteer!
        </Button>
      </div>
    </Box>
  );
}

export default Hero;
