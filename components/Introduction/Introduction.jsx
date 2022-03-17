import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Section } from "..";
import Image from "next/image";

function Introduction() {
  return (
    <Section>
      <Box
        sx={{
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "start" },
          display: "flex",
        }}
      >
        <Box sx={{ flexBasis: "100%" }}>
          <Typography variant="h1" sx={{ mb: { xs: 1, md: 2 } }}>
            Hello, I am Bilkan
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor,
            quisque at urna ornare penatibus hac etiam consectetur pretium.
            Suspendisse neque, enim pellentesque leo.
          </Typography>
          <Button sx={{ mt: 5, display: { xs: "none", md: "block" } }}>
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            flexBasis: "100%",
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
