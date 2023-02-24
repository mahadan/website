import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
const AddUserForm = lazy(() => import("components/AddUser"));

export default function AdminAddUser() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Suspense>
        <AddUserForm />
      </Suspense>
    </Box>
  );
}
