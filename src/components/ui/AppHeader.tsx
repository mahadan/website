import React, { PropsWithChildren, useState } from "react";
import Logo from "components/ui/Logo";
import {
  AppBar,
  Toolbar,
  Theme,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIsAdminPath } from "components/admin/utils";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Close, Menu } from "@mui/icons-material";

const LoginButton = dynamic(() => import("components/auth/LoginButton"));

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton edge="start" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: "80vw", maxWidth: "280px" }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
            <Toolbar sx={{ display: "flex" }}>
              <div style={{ flexGrow: 1 }}></div>
              <IconButton edge="end" onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>
          <List>
            <Link href="/about" legacyBehavior>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={"About us"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/team" legacyBehavior>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Team"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/documents" legacyBehavior>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Documents"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const AppHeader: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const isAdminPath = useIsAdminPath();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down("md"));
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
      <Toolbar sx={{ display: "flex", gap: 2 }}>
        {isMobile ? <MobileDrawer /> : null}
        <Link href="/">
          <Logo name="landscape" wrapperSx={{ height: (t: Theme) => t.spacing(8) }} />
        </Link>
        <Box display={["none", "none", "flex"]} flexGrow={1} gap={1}>
          <div style={{ flexGrow: 1 }}></div>
          {isAdminPath ? null : (
            <>
              <Button variant="contained" color="secondary" LinkComponent={Link} href="/about">
                About us
              </Button>
              <Button variant="contained" color="secondary" LinkComponent={Link} href="/team">
                Team
              </Button>
              <Button variant="contained" color="secondary" LinkComponent={Link} href="/documents">
                Documents
              </Button>
            </>
          )}
          {/* <NoSsr>
            <Suspense fallback={<CircularProgress />}>
              <LoginButton />
            </Suspense>
          </NoSsr> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
