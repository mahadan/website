import React, { PropsWithChildren, Suspense } from "react";
import Logo from "components/ui/Logo";
import { AppBar, Toolbar, NoSsr, Theme, CircularProgress, Box } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIsAdminPath } from "components/admin/utils";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const LoginButton = dynamic(() => import("components/auth/LoginButton"));

const AppHeader: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const isAdminPath = useIsAdminPath();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <AppBar
      position="sticky"
      sx={{
        background: trigger ? "rgba(255,255,255,0.75)" : "transparent",
        backdropFilter: "blur(10px)",
        boxShadow: trigger ? 2 : 0,
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: ["center", "center", "normal"] }}>
        <Link href="/">
          <Logo name="landscape" wrapperSx={{ height: (t: Theme) => t.spacing(8) }} />
        </Link>
        <Box display={["none", "none", "flex"]} flexGrow={1} gap={1}>
          <div style={{ flexGrow: 1 }}></div>
          {isAdminPath ? null : (
            <>
              {/* <Button LinkComponent={Link} href="/what-we-do">
                What We Do
              </Button> */}
            </>
          )}
          <NoSsr>
            <Suspense fallback={<CircularProgress />}>
              <LoginButton />
            </Suspense>
          </NoSsr>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
