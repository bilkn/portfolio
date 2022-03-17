import * as React from "react";
import Container from "@mui/material/Container";
import {
  Contact,
  Footer,
  Header,
  Introduction,
  Projects,
  Skills,
  SocialLinks,
} from "../components";
import { Box } from "@mui/material";

export default function Index() {
  return (
    <>
      <Header />
      <SocialLinks />
      <Box sx={{ pb: 5 }}>
        <main>
          <Container
            sx={{
              padding: "0",
            }}
          >
            <Introduction />
            <Skills />
            <Projects />
            <Contact />
          </Container>
        </main>
      </Box>
      <Footer />
    </>
  );
}
