import {
  Box,
  Divider,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import frontendSkills from "../../fixtures/frontend-skills";
import backendSkills from "../../fixtures/backend-skills";
import testingAndTools from "../../fixtures/testing-and-tools";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/css";
import useShowItemOnIntersect from "../../hooks/useShowItemOnIntersect";

const SkillsListItem = ({ name, logo, dropShadow }) => {
  const { palette, shape } = useTheme();
  const { ref, showItem } = useShowItemOnIntersect();

  return (
    <Grow in={showItem} timeout={1000}>
      <ListItem
        sx={{
          background: palette.grey["600"],
          borderRadius: shape.borderRadius,
        }}
      >
        <ListItemAvatar sx={{ display: "flex", minWidth: "auto" }}>
          <img
            className={css`
              filter: ${`drop-shadow(${dropShadow})`};
              max-width: 20px;
            `}
            src={showItem ? logo : ""}
            alt=""
            loading="lazy"
            ref={ref}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ ml: 1 }}
          primary={<Typography variant="body2">{name}</Typography>}
        />
      </ListItem>
    </Grow>
  );
};

const SkillTitle = ({ children }) => (
  <Typography
    variant="h3"
    sx={{ mb: 2 }}
    textAlign={{ xs: "start", md: "center" }}
  >
    {children}
  </Typography>
);

function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>All Skills</SectionTitle>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ flexBasis: "100%" }}>
          <SkillTitle>Frontend</SkillTitle>
          <Stack component={List} spacing={1}>
            {frontendSkills.map((item) => (
              <SkillsListItem key={item.name} {...item} />
            ))}
          </Stack>
        </Box>
        <Divider sx={{ display: { xs: "block", md: "none" }, my: 3 }} />
        <Divider
          sx={{
            display: { xs: "none", md: "block" },
            mt: 8,
            mx: 3,
            height: "500px",
          }}
          orientation="vertical"
        />
        <Box sx={{ flexBasis: "100%" }}>
          <SkillTitle>Backend</SkillTitle>
          <Stack component={List} spacing={1}>
            {backendSkills.map((item) => (
              <SkillsListItem key={item.name} {...item} />
            ))}
          </Stack>
        </Box>
        <Divider sx={{ display: { xs: "block", md: "none" }, my: 3 }} />
        <Divider
          sx={{
            display: { xs: "none", md: "block" },
            flexShrink: "0",
            mx: 3,
            mt: 8,
            height: "500px",
          }}
          orientation="vertical"
        />
        <Box sx={{ flexBasis: "100%" }}>
          <SkillTitle> Tools {"&"} Testing</SkillTitle>
          <Stack component={List} spacing={1}>
            {testingAndTools.map((item) => (
              <SkillsListItem key={item.name} {...item} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Section>
  );
}

export default Skills;
