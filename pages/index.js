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
import Head from "next/head";
import { init } from "@emailjs/browser";
init("I7nUN2rGVw7pZE55f");

export default function Index() {
  return (
    <>
      <Head>
        <title>Bilkan: Fullstack Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
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
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
    </>
  );
}
