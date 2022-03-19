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
import Script from "next/script";

export default function Index() {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
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
