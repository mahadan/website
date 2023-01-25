import { Box, Typography } from "@mui/material";
//@ts-ignore
import Typewriter from "typewriter-effect";

const TEXTS = ["Rotary in Action", "Rotaract"];

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        height: (t) => t.spacing(60),
        bgcolor: "gray",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "url(/bg3.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h1"
        fontWeight={900}
        sx={{
          textShadow: "5px 5px white",
          color: "#D51067",
        }}
      >
        <Typewriter
          options={{
            strings: ["Rotaract", "Rotary in Action"],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
    </Box>
  );
}

export default Hero;
