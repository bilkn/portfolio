import * as React from "react";
import Container from "@mui/material/Container";
import { Header, Introduction } from "../components";

export default function Index() {
  return (
    <>
      <Header />
      <Container
        sx={{
          padding: "0",
        }}
      >
        <Introduction />
      </Container>
    </>
  );
}
