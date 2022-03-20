import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Section } from "..";

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
          <Typography variant="body1" sx={{ lineHeight: { xs: 1.4, md: 1.6 } }}>
            I have been building personal/professional projects for four years.
            I can build scalable web/mobile applications in a very short time.
          </Typography>
          <Button sx={{ mt: 5, display: { xs: "none", md: "block" } }}>
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent:'center',
            flexBasis: "45%",
            mt: { xs: 5, md: "0" },
            ml: { xs: "0", md: 2 },
          }}
        >
          <model-viewer
            id="reveal"
            loading="eager"
            camera-controls
            auto-rotate
            src="/images/3d-avatar.glb"
            post='/images/avatar.png'
            alt="Bilkan Konus"
            camera-orbit="45deg 55deg 100m"
            style={{ height: "400px" }}
          ></model-viewer>
        </Box>
        <Button sx={{ mt: 5, display: { xs: "block", md: "none" } }}>
          Contact
        </Button>
      </Box>
    </Section>
  );
}

export default Introduction;
