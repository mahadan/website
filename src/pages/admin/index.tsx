import { Box } from "@mui/material";
import dynamic from "next/dynamic";
const AdminLayout = dynamic(() => import("components/admin/AdminLayout"));
const AdminWrapper = dynamic(() => import("components/admin/AdminWrapper"));

export default function AdminPage() {
  return <Box sx={{ flexGrow: 1 }}>helllo</Box>;
}
