import { Box, Container, Typography } from "@mui/material";

type Document = {
  name: string;
  url: string;
};

const docs: Document[] = [
  {
    name: "Acknowledgement Receipt Mahadan 8.0",
    url: "/downloads/Acknowledgement Receipt Mahadan 8.0.pdf",
  },
  { name: "Awards List Mahadan 8.0", url: "/downloads/Awards List Mahadan 8.0.pdf" },
  { name: "Checklist - Mahadan 8.0", url: "/downloads/Checklist - Mahadan 8.0.pdf" },
  { name: "Guidelines for Voluntary Blood Donors", url: "/downloads/Guidelines for Voluntary Blood Donors.pdf" },
  { name: "Joint International Camp - Mahadan 8.0", url: "/downloads/Joint International Camp - Mahadan 8.0.pdf" },
  { name: "Mahadan Emergency Camp - Mahadan 8.0", url: "/downloads/Mahadan Emergency Camp - Mahadan 8.0.pdf" },
  { name: "Mahadan Logo borderless", url: "/downloads/Mahadan Logo borderless.png" },
  { name: "Mahadan Logo with border", url: "/downloads/Mahadan Logo with border.png" },
  { name: "Mahadan SOP for Clubs After Camp Phase", url: "/downloads/Mahadan SOP for Clubs After Camp Phase.pdf" },
  { name: "Mahadan SOP for Clubs During Camp", url: "/downloads/Mahadan SOP for Clubs During Camp.pdf" },
  { name: "Mahadan SOP for Clubs Pre-Camp Phase", url: "/downloads/Mahadan SOP for Clubs Pre-Camp Phase.pdf" },
  { name: "Novel Initiatives - Mahadan 8.0", url: "/downloads/Novel Initiatives - Mahadan 8.0.pdf" },
  { name: "Objectives Mahadan 8.0", url: "/downloads/Objectives Mahadan 8.0.pdf" },
  { name: "Overview Mahadan 8.0", url: "/downloads/Overview Mahadan 8.0.pdf" },
  { name: "Sample Banner Design Mahadan 8.0", url: "/downloads/Sample Banner Design Mahadan 8.0.pdf" },
  { name: "I Support Mahadan 8.0 frame", url: "/downloads/I Support Mahadan 8.0 frame.png" },
  { name: "Invitation Letter Format - Mahadan 8.0", url: "/downloads/Invitation Letter Format - Mahadan 8.0.pdf" },
  { name: "Blood Donor Certificate - Mahadan 8.0", url: "/downloads/Blood Donor Certificate - Mahadan 8.0.pdf" },
];

export default function Team() {
  return (
    <Box my={8}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2">Important Documents</Typography>
      </Container>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 2, textAlign: "center", my: 4 }}>
        {docs.map((doc) => {
          return (
            <Typography variant="h6" key={doc.name}>
              {doc.name} (
              <a href={doc.url} download>
                Download
              </a>
              )
            </Typography>
          );
        })}
      </Container>
    </Box>
  );
}
