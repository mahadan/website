import { Button, Typography, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
type ItemProps = {
  title: string;
  description: string;
};

const Items: ItemProps[] = [
  {
    title: "Regional Conference",
    description:
      "Rotaractors can enjoy a wide-range of activities throughout the conference, offering a platform for Rotaract workshops for idea and cultural exchange and fellowship among Rotaractors. Rotaractors from around the world are welcome to participate in the conference.",
  },
  {
    title: "Information Dissemination",
    description:
      "Districts get the latest information from Rotary International and gain access to valuable regional data. With the help of the MDIO's communication platforms, Rotaractors get inspired from the projects and best practices of clubs and districts within the region.",
  },
  {
    title: "Facilitating Multi-District Communication",
    description:
      "Quarterly meetings of national and district Rotaract leaders provide a venue for discussion of common concerns, including Elevate Rotaract. The MDIO also helps connect districts for inter-district exchanges within and outside the Asia Pacific region. The MDIO also links Rotaract leaders to officers and support staff of Rotary International, its satellite offices, and the zones.",
  },
  {
    title: "Twin Club Opportunities",
    description:
      "Coming Soon: The MDIO will launch a platform that would make twin club connections and partnerships within the region easier. As Rotaract Clubs will soon be eligible to participate in The Rotary Foundation Global Grants, this platform could hopefully help you find potential international partners (required for Global Grants).",
  },
  {
    title: "Learning and Development",
    description:
      "Learning and development initiatives, such as trainings and eLearnings, help Rotaract leaders be updated with the latest policies and trends in club/district administration, membership engagement, and service project development and management.",
  },
  {
    title: "Regional Causes",
    description:
      "The MDIO supports the service goals of Rotary International, including the encouragement of Rotaractors to support The Rotary Foundation and End Polio. The MDIO also advocates for regional causes, especially those aligned with the Rotary's Areas of Focus",
  },
];
const Item: React.FC<ItemProps> = ({ title, description }) => {
  return (
    <>
      <Grid
        xs={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="subtitle2" fontWeight={400}>
          {description}
        </Typography>
      </Grid>
    </>
  );
};

export default function WhatWeDo() {
  return (
    <Container>
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
            What We Do?
          </Typography>
        </Grid>
        {Items.map((i) => (
          <Item key={i.title} {...i} />
        ))}
        <Grid xs={12}>
          <Button size="large" variant="contained">
            BECOME A MEMBER DISTRICT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
