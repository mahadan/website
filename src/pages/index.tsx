import { Box } from "@mui/material";
import StatsBreif from "static-sections/StatsBreif";
import QuickLinks from "static-sections/QuickLinks";
import ProgramsIntro from "static-sections/ProgramsIntro";
import Hero from "static-sections/Hero";

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
        <StatsBreif />
        <QuickLinks />
        <ProgramsIntro />
      </Box>
    </>
  );
}
