import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          px: 4,
          py: { xs: 5, md: "32px" },
        }}
      >
        <Container>
          <Typography variant='body2'>© 2021 Bilkan Konus</Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
