import { css } from "@emotion/css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ProjectCardTitle,
  TechStackContainer,
} from "../../ProjectCard/ProjectCard";

function MobileProjectCard(props) {
  const { description, img, website, sourceCode, title, techStack } = props;

  return (
    <Card sx={{ flexShrink: 0, maxWidth: "225px", position: "relative" }}>
      <TechStackContainer
        techStack={techStack}
        visible
        sx={{ height: "30px" }}
        logoSize="15px"
      />
      <Box
        sx={{
          height: "calc(100% - 132px)",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          className={css`
            object-fit: cover;
            height: 100%;
            width: 100%;
          `}
          src={img}
        />
      </Box>
      <Box sx={{ position: "relative" }}>
        <ProjectCardTitle title={title} sx={{ height: "30px" }} />
      </Box>
      <CardContent sx={{ "&&": { py: "0" }, px: "0" }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {description}
          </Typography>
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center", py: 1 }}
        >
          <Button
            href={website}
            target="_blank"
            sx={{ minWidth: "100px", px: "0" }}
          >
            <Typography variant="small">Visit Website</Typography>
          </Button>
          <Button
            variant="secondary"
            href={sourceCode}
            target="_blank"
            sx={{ minWidth: "100px", px: "0" }}
          >
            <Typography variant="small">Source Code</Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MobileProjectCard;
