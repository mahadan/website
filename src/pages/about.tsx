import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <>
      <Box
        sx={{
          background: "url(/bg_cover_about.png)",
          backgroundPosition: ["center left", "center center"],
          backgroundSize: "cover",
          height: ["250px", "350px", "500px"],
        }}
      ></Box>
      <Box
        sx={{
          mx: [4, 6, 8],
          mt: ["-25px", "-50px"],
          background: "white",
          boxShadow: 6,
          borderRadius: 4,
          mb: 8,
          p: [4, 6, 8],
          display: "flex",
          gap: [1, 4],
          flexDirection: ["column", "row"],
          alignItems: ["center", "start"],
          justifyItems: ["center", "flex-start"],
          textAlign: ["center", "left"],
        }}
      >
        <Box
          sx={{
            aspectRatio: "1/1",
            width: ["180px", "250px"],
            flexShrink: 0,
          }}
        >
          <Avatar
            sx={{ boxShadow: 5, width: "100%", height: "100%" }}
            src={"/sahil_bhateja.png"}
            alt={"Sahil Bhateja"}
          />
        </Box>
        <Stack my={4}>
          <Typography variant="h4" fontWeight={900}>
            Late Rtr. Sahil Bhateja
          </Typography>
          <Typography fontWeight={700} variant="h6">
            Founder Chairman - Mahadan
          </Typography>
          <Typography fontWeight={700} variant="subtitle1">
            PDRR 2013-14 & 2014-15, R.I.D. 3090
          </Typography>
          <br />
          <Typography variant="body2" textAlign={"justify"}>
            He was an ethusiastic leader, who had vision for International level blood collection, as Blood as a
            resources is not easily available and he envisioned through Rotract that this problem has a solution amongst
            millions of rotaractors worldwide who believe in Serivce With Fellowship. Through his club Rotaract Club of
            Rajpura and District 3090, he kick-started the famous Mahadan event, eventually growing into yearly event
            for Blood donation and Blood Donation awareness.
          </Typography>
          <br />
          <Typography variant="h6">
            Today, he might be with god almighty but his vision for Blood Donation Camps & Awareness has come into full
            tide, affecting million of lives worldwide.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          mx: [4, 6, 8],
          background: "white",
          boxShadow: 6,
          borderRadius: 4,
          mb: 8,
          px: [4, 6, 8],
        }}
      >
        <Stack py={4} textAlign="justify" gap={4}>
          <Typography variant="h3">About Mahadan</Typography>
          <Typography variant="h6">
            &apos;Mahadan&apos; is an initiative of Rotaract (the youth wing of Rotary International) going on from the
            past 7 years where Rotary and Rotaract Clubs have been organizing a mega blood donation drive
            internationally during the World Rotaract Week. Started in the year 2016 by some young Rotarctors lead by
            PDRR Sahil Bhateja of RID 3090 the event has been able to collect more than 1 Lakh Blood Units globally by
            organising more than 1500 Blood Donation Camps during Mahadan week over the years. R.I. Districts of 30-40
            countries have participated in this drive. The event is also registered with India Book of Records for most
            no. of blood units collected during a week.{" "}
          </Typography>
          <br />
          <Typography variant="h5">The major Objectives of Mahadan are:</Typography>
          <Typography variant="h6">
            <ol>
              <li>Bringing the Entire Organization together</li>
              <li>Serve Humanity by donating Blood Units</li>
              <li>Breaking the Myths of Blood Donation thereby bringingabout awareness in the society</li>
              <li>Enhancing Leadership skills</li>
              <li>Creating a Blood Donor database for Emergencies</li>
              <li>Enhancing relations between the Rotary and Rotaract</li>
            </ol>
          </Typography>
          <Typography variant="h6">
            The event faced a setback during the covid time where many Mahadan Camps got cancelled due to rising cases
            of Covid-19 in the year 2020. The following years also faced revival problems due to Covid and other
            factors. Last year in the chairmanship of PDRR Abhishek Goyal who has been an active member of Mahadan from
            it&apos;s innaugral year made great efforts to bring back the glory of Mahadan.
          </Typography>
          <br />
          <Typography variant="h6">
            This year the concept of Mahadan has been changed a bit where previously a Mahadan Chair would be elected
            and given the responsibility to organise the Mahadan week by forming his own team. This year a district has
            been given the responsibility to organise Mahadan 8.0. R.I. Distt. 3120 is hosting the event with PDRR
            Rtr.lRtn. Kushagra Bansal (PHF) to lead the event as Mahadan Chairman along with host DRR Rtr.lRtn. Sachin
            Upadhyay and his team.
          </Typography>

          <Typography variant="h5">R.I. Distt. 3120 has set a target of:</Typography>
          <Typography variant="h6">
            <ul>
              <li>1000 Camps</li>
              <li>75000 units of Blood Collection</li>
              <li>75 R.I. Districts</li>
              <li>50 countries</li>
            </ul>
          </Typography>

          <Typography variant="h6">
            The targets are definitely high but the district believes it can achieve this through it&apos;s committed
            team members. The district has been engaged in aggressive promotion and marketing strategies on various
            social media platforms like instagram, Facebook, Whatsapp etc. reaching out to various DRRs nationally and
            internationally to participate in the event. The foremost focus has been to receive the names of the DRR,
            International Service Director and District Mahadan Ambassador of all the districts along with their target
            no. of camps and blood unit collection. A seperate whatsapp group has been created for them for easy
            information flow.
          </Typography>
          <Typography variant="h6">
            Various promotional strategies like celebrity bytes, instagram reels and memes etc. are being shared to
            aware the people and create a hype for the event. The Mahadan team from RID 3120 recently also attended the
            SEARIC Summit at Goa where they gave a presentation to the delegates and also promoted the event by
            distributing badges and clicking pictures with Mahadan Placard with DRRs and other guests and delegates.
          </Typography>

          <Typography variant="h6">
            To create an awareness on Blood Donation and also promote Mahadan 8.0 a multidistrict event
            &apos;Jaagrakt&apos; has been launched in association with SEARIC MDIO, RSA MDIO and Rotaract India MDIO
            which will be conducted on 1st October 2022 , National Voluntary Blood Donation Day.
          </Typography>
          <Typography variant="h6">
            The team has also several plans for upcomming months as well till the final event like launch of Mahadan
            Anthem, Mahadan Helpdesk, Mahadan Website, Long-term novel initiatives, awards and recognitions post Mahadan
            etc.
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
