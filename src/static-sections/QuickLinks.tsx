import React from "react";
import { Button, Typography, Theme, Box, Grid } from "@mui/material";
import Link from "next/link";

type QuickLinkProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  bgcolor: string;
  external?: boolean;
};

const QuickLink: React.FC<QuickLinkProps> = ({ title, description, linkText, linkHref, bgcolor, external }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          p: [6, 12],
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: bgcolor,
          color: (t: Theme) => t.palette.getContrastText(bgcolor),
          height: "100%",
        }}
      >
        <Typography variant="h5" fontWeight={900}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <div>
          <Button
            variant="outlined"
            LinkComponent={external ? "a" : Link}
            href={linkHref}
            target="_blank"
            sx={{
              color: (t: Theme) => t.palette.getContrastText(bgcolor),
              borderColor: (t: Theme) => t.palette.getContrastText(bgcolor),
              "&:hover": {
                borderColor: (t: Theme) => t.palette.getContrastText(bgcolor),
              },
            }}
          >
            {linkText}
          </Button>
        </div>
      </Box>
    </Grid>
  );
};

const Links: QuickLinkProps[] = [
  {
    title: "Report Your Camps",
    description: "Report your blood donation camps being organized under mahadan here.",
    linkHref:
      "https://docs.google.com/forms/d/e/1FAIpQLSd9DKre1P28U15_WP6CvEHoMr7dGI99Pz_lIMlfjMVixeGXMw/viewform?usp=sf_link",
    linkText: "Report Camp",
    bgcolor: "#037ffc",
    external: true,
  },
  {
    title: "About Mahadan 8.0",
    description:
      "Rotaractors and Rotarians, since 7 years has been organizing a mega blood donation and awareness drive internationally during the World Rotaract Week (13th to 19th March) in March known as 'Mahadan'. ",
    linkHref: "/about",
    linkText: "Learn More",
    bgcolor: "#00246c",
  },
  {
    title: "Our Team",
    description:
      "RID 3120 with Rtr. Sachin Upadhyay (DRR 22-23) & Rtr. Kushagara Bansal (PDRR), leads the mahadan team this year as we move towards a better, healthy and aware society.",
    linkHref: "/team",
    linkText: "Meet Our Team",
    bgcolor: "#005daa",
  },
  {
    title: "Important Documents",
    description: "List of important documets and content for Clubs organizing blood donation camps under Mahadan 8.0",
    linkHref: "/documents",
    linkText: "Know More",
    bgcolor: "#8a0096",
  },
];

function QuickLinks() {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 0, md: 4 }} p={4} maxWidth="100vw">
      {Links.map((l) => (
        <QuickLink key={l.title} {...l} />
      ))}
    </Grid>
  );
}

export default QuickLinks;
