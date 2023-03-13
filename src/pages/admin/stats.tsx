import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UpdateStatsForm = dynamic(() => import("components/UpdateStats"));

export default function stats() {
  return (
    <Suspense fallback={<>page loader...</>}>
      <Typography variant="h5">Update Stats Data</Typography>
      <br />
      <UpdateStatsForm />
    </Suspense>
  );
}
