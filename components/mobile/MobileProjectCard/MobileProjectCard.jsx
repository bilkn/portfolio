import { css } from "@emotion/css";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useShowItemOnIntersect } from "../../../hooks";
import {
  ProjectCardTitle,
  TechStackContainer,
} from "../../ProjectCard/ProjectCard";
import Image from "next/image";

function MobileProjectCard(props) {
  const { description, img, website, sourceCode, title, techStack } = props;
  const { showItem, ref } = useShowItemOnIntersect();

  return (
    <Grow in={showItem} timeout={1000}>
      <Card
        ref={ref}
        sx={{ flexShrink: 0, maxWidth: "225px", position: "relative" }}
      >
        <TechStackContainer
          techStack={techStack}
          visible
          sx={{ height: "30px" }}
          logoSize="15px"
        />
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <Image width="1920" height="1080" layout="responsive" src={img} />
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
    </Grow>
  );
}

export default MobileProjectCard;
