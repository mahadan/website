import { ListItemText, ListItemIcon, List, ListItemButton, ListSubheader } from "@mui/material";
import { Add, AssignmentInd, Diversity3, People } from "@mui/icons-material";
import Link from "next/link";

export default function AdminAsideContent() {
  return (
    <>
      <List
        sx={{ bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Rotaract India MDIO
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <AssignmentInd />
          </ListItemIcon>
          <ListItemText primary="Board Members" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Diversity3 />
          </ListItemIcon>
          <ListItemText primary="Team Members" />
        </ListItemButton>
      </List>
      <List
        sx={{ bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Users
          </ListSubheader>
        }
      >
        <Link legacyBehavior href="/admin/add-user">
          <ListItemButton>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Add User" />
          </ListItemButton>
        </Link>
        <Link legacyBehavior href="/admin/display-users">
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Display Users" />
          </ListItemButton>
        </Link>
      </List>
    </>
  );
}
