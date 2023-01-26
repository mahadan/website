import React from "react";
import { Button, Container, Typography, Theme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Link from "next/link";

type QuickLinkProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  bgcolor: string;
};

const QuickLink: React.FC<QuickLinkProps> = ({ title, description, linkText, linkHref, bgcolor }) => {
  return (
    <Grid
      borderRadius={10}
      xs={12}
      md={12}
      sx={{
        p: [6, 12],
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: bgcolor,
        color: (t: Theme) => t.palette.getContrastText(bgcolor),
      }}
    >
      <Typography variant="h5" fontWeight={900}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{description}</Typography>
      <div>
        <Button
          variant="outlined"
          LinkComponent={Link}
          href={linkHref}
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
    </Grid>
  );
};

const Links: QuickLinkProps[] = [
  {
    title: "About Mahadan 8.0",
    description:
      "Rotaractors and Rotarians, since 7 years has been organizing a mega blood donation and awareness drive internationally during the World Rotaract Week (13th to 19th March) in March known as 'Mahadan'. ",
    linkHref: "#",
    linkText: "Learn More",
    bgcolor: "#00246c",
  },
  {
    title: "Our Volunteers",
    description:
      "RID 3120 with Rtr. Sachin Upadhyay (DRR 22-23) & Rtr. Kushagara Bansal (PDRR), leads the mahadan team this year as we move towards a better, healthy and aware society.",
    linkHref: "#",
    linkText: "Meet Our Volunteers",
    bgcolor: "#005daa",
  },
];

function QuickLinks() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container gap={8}>
        {Links.map((l) => (
          <QuickLink key={l.title} {...l} />
        ))}
      </Grid>
    </Container>
  );
}

export default QuickLinks;
