import { Box, Button, Slide, Typography } from "@mui/material";
import React from "react";
import { Section } from "..";
import useShowItemOnIntersect from "../../hooks/useShowItemOnIntersect";

function Introduction() {
  const { showItem, ref } = useShowItemOnIntersect();

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
        <Slide direction="right" ref={ref} in={showItem} timeout={1000}>
          <Box sx={{ flexBasis: "55%" }}>
            <Typography variant="h1" sx={{ mb: { xs: 2, md: 3 } }}>
              Hello I am Bilkan, <br />a Fullstack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: { xs: 1.4, md: 1.6 } }}
            >
              I have been building personal/professional projects for four
              years. I can build scalable web/mobile applications in a very
              short time.
            </Typography>
            <Button sx={{ mt: 6, display: { xs: "none", md: "block" } }}>
              Contact
            </Button>
          </Box>
        </Slide>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexBasis: "45%",
            mt: { xs: 6, md: "0" },
            ml: { xs: "0", md: 3 },
          }}
        >
          <model-viewer
            id="reveal"
            loading="eager"
            camera-controls
            auto-rotate
            src="/images/3d-avatar.glb"
            post="/images/avatar.png"
            alt="Bilkan Konus"
            camera-orbit="25deg 85deg 100m"
            style={{ height: "400px" }}
          ></model-viewer>
        </Box>
        <Button sx={{ mt: 6, display: { xs: "block", md: "none" } }}>
          Contact
        </Button>
      </Box>
    </Section>
  );
}

export default Introduction;
