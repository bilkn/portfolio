import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Section } from "..";
import Image from "next/image";

function Introduction() {
  return (
    <Section>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" sx={{ mb: 1 }}>
          Hello, I am Bilkan
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor,
          quisque at urna ornare penatibus hac etiam consectetur pretium.
          Suspendisse neque, enim pellentesque leo.
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width="326px"
            height="288px"
          />
        </Box>
        <Button sx={{ mt: 5 }}>Contact</Button>
      </Box>
    </Section>
  );
}

export default Introduction;
