import { Box } from "@mui/material";
import { Suspense } from "react";
import AdminAsideContent from "./AdminAsideContent";
// import dynamic from "next/dynamic";
// const GlobalStyles = dynamic(() => import("@mui/material/GlobalStyles/GlobalStyles"));
const AdminAside: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "25%",
        maxWidth: ["auto", "300px"],
        zIndex: 2,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          overflowY: "auto",
        }}
      >
        <AdminAsideContent />
      </Box>
    </Box>
  );
};

const AdminContent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        // left: [0, 0, "min(25%,300px)"],
        // width: ["100%", "100%", "max(75%,calc(100% - 300px))"],
        height: "100%",
        overflow: "auto",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          p: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
const AdminLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      {/* <GlobalStyles
        styles={{
          "#static-layout": {
            maxHeight: "100vh !important",
          },
        }}
      /> */}
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          flexGrow: 1,
          display: "flex",
          height: "100%",
        }}
      >
        {/* <AdminAside /> */}
        <AdminContent>
          <Suspense fallback={<div style={{ flexGrow: 1 }}>chota content loader</div>}>{children}</Suspense>
        </AdminContent>
      </Box>
    </>
  );
};
export default AdminLayout;
