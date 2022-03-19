import { Typography } from "@mui/material";
import React from "react";

function SectionTitle({ children }) {
  return (
    <Typography
      variant="h2"
      textAlign={"center"}
      sx={{ mb: { xs: 6, sm: 7 } }}
    >
      <Typography
        component="span"
        variant="h2"
        sx={{ color: "primary.main", fontSize: "inherit" }}
      >
        {"<"}
      </Typography>{" "}
      {children}{" "}
      <Typography component="span" variant="h2" sx={{ color: "primary.main" }}>
        {"/>"}
      </Typography>
    </Typography>
  );
}

export default SectionTitle;
