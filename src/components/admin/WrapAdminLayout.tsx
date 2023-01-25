import { NoSsr } from "@mui/material";
import dynamic from "next/dynamic";
import { useIsAdminPath } from "./utils";
const AdminLayout = dynamic(() => import("components/admin/AdminLayout"));
const AdminWrapper = dynamic(() => import("components/admin/AdminWrapper"));

const WrapAdminLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const isAdminPath = useIsAdminPath();
  return isAdminPath ? (
    <NoSsr>
      <AdminWrapper>
        <AdminLayout>{children}</AdminLayout>
      </AdminWrapper>
    </NoSsr>
  ) : (
    <>{children}</>
  );
};

export default WrapAdminLayout;
