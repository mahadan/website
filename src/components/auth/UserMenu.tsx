import * as React from "react";
import { Avatar, MenuItem, Menu, ListItemIcon, Divider, IconButton } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import { useGetUserByEmail } from "api/User";
import Link from "next/link";

const UserMenu: React.FC<{ email: string }> = ({ email }) => {
  const auth = getAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { status, data } = useGetUserByEmail(email || "");
  if (status === "success" && data.length) {
    const user = data[0];
    return (
      <React.Fragment>
        <IconButton
          edge="end"
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar src={user.photoUrl} alt={user.fullName} sx={{ width: 32, height: 32 }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar alt={user.fullName} src={user.photoUrl} /> {user.fullName}
          </MenuItem>
          <Divider />
          {/* {user.email === "teammahadan@gmail.com" && (
            <Link href="/admin" legacyBehavior>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Admin Portal
              </MenuItem>
            </Link>
          )} */}
          {user.email === "teammahadan@gmail.com" && (
            <Link href="/admin/stats" legacyBehavior>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Stats
              </MenuItem>
            </Link>
          )}
          <MenuItem
            onClick={async () => {
              await signOut(auth);
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
  return null;
};

export default UserMenu;
