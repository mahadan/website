import React from "react";
import { Button, Typography, Theme } from "@mui/material";
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
      xs={12}
      md={4}
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
    title: "About the MDIO",
    description:
      "Asia Pacific Rotaract MDIO was formed on June 16, 2020 and was officially recognized by Rotary International on September 17, 2020 as a regional Rotaract multi-district information organization (MDIO) for Asia Pacific.",
    linkHref: "#",
    linkText: "Learn More",
    bgcolor: "#00246c",
  },
  {
    title: "Our Officers",
    description: "Asia Pacific Rotaract MDIO is led by a pool of experienced Rotaract leaders in the region.",
    linkHref: "#",
    linkText: "Meet Our Leaders",
    bgcolor: "#005daa",
  },
  {
    title: "Our Member Districts",
    description:
      "Member districts help drive our programs and services to Rotaractors. They also serve as our inspiration in continuously looking for better ways to be of value in the region.",
    linkHref: "#",
    linkText: "Know Our Member Districts",
    bgcolor: "#872175",
  },
];

function QuickLinks() {
  return (
    <Grid container>
      {Links.map((l) => (
        <QuickLink key={l.title} {...l} />
      ))}
    </Grid>
  );
}

export default QuickLinks;
