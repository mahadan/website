import React, { PropsWithChildren } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useIsAdminPath } from "components/admin/utils";

const AppFooter: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const isAdminPath = useIsAdminPath();
  return (
    <>
      {isAdminPath ? null : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: [6, 8, 12],
            gap: 2,
            alignItems: "center",
            textAlign: "center",
            background: "#c9dee9",
            color: "#00246c",
          }}
        >
          <Typography variant="h3" fontWeight={900}>
            BE INSPIRED. GET INVOLVED.
          </Typography>
          <Typography variant="h5"> Know the Latest News & Updates</Typography>
          <Box sx={{ maxWidth: ["100%", "50%"], width: "100%", display: "flex", mt: 2 }}>
            <TextField sx={{ flexGrow: 1 }} type="email" placeholder="youareawesome@email.com" />
            <Button variant="contained" sx={{ boxShadow: 0, "&:hover": { boxShadow: 0 } }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      )}

      <Box
        component="footer"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle1" fontWeight={800}>
          Rotaract India MDIO &copy; 2022
        </Typography>
      </Box>
    </>
  );
};

export default AppFooter;
