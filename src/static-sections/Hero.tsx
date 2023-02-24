import { Box, Button } from "@mui/material";
import Logo from "components/ui/Logo";
import Link from "next/link";

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
        <Link href={"/about"} legacyBehavior>
          <Button size="large" variant="contained" color="secondary">
            Learn More
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default Hero;
