import React, { PropsWithChildren, Suspense } from "react";
import Logo from "components/ui/Logo";
import { AppBar, Toolbar, Button, NoSsr, Theme, CircularProgress } from "@mui/material";
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
      <Toolbar sx={{ display: "flex" }}>
        <Link href="/">
          <Logo name="official" wrapperSx={{ height: (t: Theme) => t.spacing(8) }} />
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        {isAdminPath ? null : (
          <>
            <Button LinkComponent={Link} href="/what-we-do">
              What We Do
            </Button>
          </>
        )}
        <NoSsr>
          <Suspense fallback={<CircularProgress />}>
            <LoginButton />
          </Suspense>
        </NoSsr>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
