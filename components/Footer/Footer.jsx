import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          px: 3,
          py: { xs: 4, md: "32px" },
        }}
      >
        <Container>
          <Typography>© 2021 Bilkan Konus</Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
