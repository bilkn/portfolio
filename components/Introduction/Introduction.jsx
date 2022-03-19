import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Section } from "..";
import Image from "next/image";

function Introduction() {
  return (
    <Section id="about">
      <Box
        sx={{
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "start" },
          display: "flex",
        }}
      >
        <Box sx={{ flexBasis: "55%" }}>
          <Typography variant="h1" sx={{ mb: { xs: 1, md: 2 } }}>
            Hello I am Bilkan, <br />a Fullstack Developer
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: { md: 1.6 } }}>
            I have been building personal/professional projects for four years.
            I can build scalable web/mobile applications in a very short
            time.
          </Typography>
          <Button sx={{ mt: 5, display: { xs: "none", md: "block" } }}>
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            flexBasis: "45%",
            mt: { xs: 5, md: "0" },
            ml: { xs: "0", md: 2 },
          }}
        >
          {/*           <Image
            src="/images/avatar.png"
            alt="Avatar"
            width="326px"
            height="288px"
          /> */}
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width="612px"
            height="612px"
          />
        </Box>
        <Button sx={{ mt: 5, display: { xs: "block", md: "none" } }}>
          Contact
        </Button>
      </Box>
    </Section>
  );
}

export default Introduction;
