import * as React from "react";
import Container from "@mui/material/Container";
import { Header, Introduction, Projects, Skills } from "../components";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Container
          sx={{
            padding: "0",
          }}
        >
          <Introduction />
          <Skills />
          <Projects />
        </Container>
      </main>
    </>
  );
}
