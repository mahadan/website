import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  { original: "/camps/1.jpg", thumbnail: "/camps/1.jpg" },
  { original: "/camps/2.jpg", thumbnail: "/camps/2.jpg" },
  { original: "/camps/3.jpg", thumbnail: "/camps/3.jpg" },
  { original: "/camps/4.jpg", thumbnail: "/camps/4.jpg" },
  { original: "/camps/5.jpg", thumbnail: "/camps/5.jpg" },
  { original: "/camps/6.jpg", thumbnail: "/camps/6.jpg" },
  { original: "/camps/7.jpg", thumbnail: "/camps/7.jpg" },
  { original: "/camps/8.jpg", thumbnail: "/camps/8.jpg" },
  { original: "/camps/9.jpg", thumbnail: "/camps/9.jpg" },
  { original: "/camps/10.jpg", thumbnail: "/camps/10.jpg" },
  { original: "/camps/11.jpg", thumbnail: "/camps/11.jpg" },
  { original: "/camps/12.jpg", thumbnail: "/camps/12.jpg" },
  { original: "/camps/13.jpg", thumbnail: "/camps/13.jpg" },
  { original: "/camps/14.jpg", thumbnail: "/camps/14.jpg" },
  { original: "/camps/15.jpg", thumbnail: "/camps/15.jpg" },
  { original: "/camps/16.jpg", thumbnail: "/camps/16.jpg" },
  { original: "/camps/17.jpg", thumbnail: "/camps/17.jpg" },

  { original: "/camps/18.jpg", thumbnail: "/camps/18.jpg" },
  { original: "/camps/19.jpg", thumbnail: "/camps/19.jpg" },
  { original: "/camps/20.jpg", thumbnail: "/camps/20.jpg" },
  { original: "/camps/21.jpg", thumbnail: "/camps/21.jpg" },
  { original: "/camps/22.jpg", thumbnail: "/camps/22.jpg" },
  { original: "/camps/23.jpg", thumbnail: "/camps/23.jpg" },
  { original: "/camps/24.jpg", thumbnail: "/camps/24.jpg" },
  { original: "/camps/25.jpg", thumbnail: "/camps/25.jpg" },
  { original: "/camps/26.jpg", thumbnail: "/camps/26.jpg" },
  { original: "/camps/27.jpg", thumbnail: "/camps/27.jpg" },
  { original: "/camps/28.jpg", thumbnail: "/camps/28.jpg" },
  { original: "/camps/29.jpg", thumbnail: "/camps/29.jpg" },
  { original: "/camps/30.jpg", thumbnail: "/camps/30.jpg" },
  { original: "/camps/31.jpg", thumbnail: "/camps/31.jpg" },
  { original: "/camps/32.jpg", thumbnail: "/camps/32.jpg" },
  { original: "/camps/33.jpg", thumbnail: "/camps/33.jpg" },
  { original: "/camps/34.jpg", thumbnail: "/camps/34.jpg" },
  { original: "/camps/35.jpg", thumbnail: "/camps/35.jpg" },
  { original: "/camps/36.jpg", thumbnail: "/camps/36.jpg" },
  { original: "/camps/37.jpg", thumbnail: "/camps/37.jpg" },
  { original: "/camps/38.jpg", thumbnail: "/camps/38.jpg" },
  { original: "/camps/39.jpg", thumbnail: "/camps/39.jpg" },
  { original: "/camps/40.jpg", thumbnail: "/camps/40.jpg" },
  { original: "/camps/41.jpg", thumbnail: "/camps/41.jpg" },
  { original: "/camps/42.jpg", thumbnail: "/camps/42.jpg" },
  { original: "/camps/43.jpg", thumbnail: "/camps/43.jpg" },
  { original: "/camps/44.jpg", thumbnail: "/camps/44.jpg" },
  { original: "/camps/45.jpg", thumbnail: "/camps/45.jpg" },
  { original: "/camps/46.jpg", thumbnail: "/camps/46.jpg" },
  { original: "/camps/47.jpg", thumbnail: "/camps/47.jpg" },
  { original: "/camps/48.jpg", thumbnail: "/camps/48.jpg" },
  { original: "/camps/49.jpg", thumbnail: "/camps/49.jpg" },
  { original: "/camps/50.jpg", thumbnail: "/camps/50.jpg" },
  { original: "/camps/51.jpg", thumbnail: "/camps/51.jpg" },
  { original: "/camps/52.jpg", thumbnail: "/camps/52.jpg" },
  { original: "/camps/53.jpg", thumbnail: "/camps/53.jpg" },
  { original: "/camps/554jpg", thumbnail: "/camps/54.jpg" },
  { original: "/camps/55.jpg", thumbnail: "/camps/55.jpg" },
  { original: "/camps/56.jpg", thumbnail: "/camps/56.jpg" },
  { original: "/camps/57.jpg", thumbnail: "/camps/57.jpg" },
  { original: "/camps/58.jpg", thumbnail: "/camps/58.jpg" },
  { original: "/camps/59.jpg", thumbnail: "/camps/59.jpg" },
  { original: "/camps/60.jpg", thumbnail: "/camps/60.jpg" },
  { original: "/camps/61.jpg", thumbnail: "/camps/61.jpg" },
  { original: "/camps/62.jpg", thumbnail: "/camps/62.jpg" },
];

export default function WhatWeDo() {
  return (
    <Container sx={{ mb: 16, mt: 8 }}>
      <Grid container spacing={8}>
        <Grid xs={12}>
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
            our activities at a glance
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} mx={"auto"}>
          <ImageGallery items={images} />
        </Grid>
      </Grid>
    </Container>
  );
}
