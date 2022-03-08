import * as React from "react";
import Container from "@mui/material/Container";
import { Header, Introduction } from "../components";
import { useTheme } from "@emotion/react";

export default function Index() {
  return (
    <>
      <Container
        sx={{
          minHeight: "100%",
          padding: "0",
        }}
      >
        <Header />
        <Introduction />
      </Container>
    </>
  );
}
