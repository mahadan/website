import { Typography, Container, NoSsr } from "@mui/material";
import ReactPlayer from "react-player";

export default function Youtube() {
  return (
    <Container
      sx={{
        mb: 12,
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          position: "relative",
          textTransform: "uppercase",
          "&:after": {
            position: "absolute",
            content: "''",
            bottom: "-12px",
            left: "4px",
            width: "25%",
            maxWidth: "100px",
            height: "2px",
            background: "black",
            display: "block",
          },
        }}
        variant="h3"
      >
        Official Mahadan 8.0 Anthem
      </Typography>
      <NoSsr>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=mzXMMOxkk1s&ab_channel=Rotaract3120"
          controls={true}
          width="80vw"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
              embedOptions: {},
            },
          }}
        />
      </NoSsr>
    </Container>
  );
}
