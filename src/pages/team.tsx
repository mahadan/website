import { Box, Container, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
const DisplayData = lazy(() => import("components/TeamData"));

export default function Team() {
  return (
    <Box my={8}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2">Our Team</Typography>
        <Typography variant="h6">Alone we can do so little; together we can do so much</Typography>
      </Container>
      <Container maxWidth="lg">
        <Suspense fallback={<>loading...</>}>
          <DisplayData />
        </Suspense>
      </Container>
    </Box>
  );
}
