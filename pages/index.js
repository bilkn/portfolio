import * as React from "react";
import Container from "@mui/material/Container";
import { Header } from "../components";

export default function Index() {
  return (
    <>
      <Container maxWidth="sm" sx={{ minHeight: "100%", padding: "0" }}>
        <Header />
      </Container>
    </>
  );
}
