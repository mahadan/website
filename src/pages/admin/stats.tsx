import { Typography } from "@mui/material";
import { lazy, Suspense } from "react";

const UpdateStatsForm = lazy(() => import("components/UpdateStats"));

export default function stats() {
  return (
    <Suspense fallback={<>page loader...</>}>
      <Typography variant="h5">Update Stats Data</Typography>
      <br />
      <UpdateStatsForm />
    </Suspense>
  );
}
