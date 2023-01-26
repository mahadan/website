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
            background: "red",
            color: "white",
          }}
        >
          <Typography variant="h3" fontWeight={900}>
            BECOME A VOLUNTEER
          </Typography>
          <Typography variant="h5">Increase the awarenss of blood donation through us!</Typography>
          <Box
            sx={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(5px)",
              borderRadius: 4,
              p: 4,
              maxWidth: ["100%", "50%"],
              width: "100%",
              display: "flex",
              mt: 2,
            }}
          >
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
          Team Mahadan &copy; 2022-23
        </Typography>
      </Box>
    </>
  );
};

export default AppFooter;
