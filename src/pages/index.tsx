import { Box } from "@mui/material";
import StatsBreif from "static-sections/StatsBreif";
import QuickLinks from "static-sections/QuickLinks";
import Hero from "static-sections/Hero";
import WhatWeDo from "static-sections/WhatWeDo";
import Youtube from "static-sections/Youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <WhatWeDo />
        <Youtube />
        <StatsBreif />
        <QuickLinks />
      </Box>
    </>
  );
}
