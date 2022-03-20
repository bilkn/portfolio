import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import frontendSkills from "../../fixtures/frontend-skills";
import backendSkills from "../../fixtures/backend-skills";
import testingAndTools from "../../fixtures/testing-and-tools";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/css";

const SkillsListItem = ({ name, logo, dropShadow }) => {
  const { palette, shape } = useTheme();
  return (
    <ListItem
      sx={{ background: palette.grey["600"], borderRadius: shape.borderRadius }}
    >
      <ListItemAvatar sx={{ display: "flex", minWidth: "auto" }}>
        <img
          className={css`
            filter: ${`drop-shadow(${dropShadow})`};
            max-width: 20px;
          `}
          src={logo}
          alt=""
          loading="lazy"
        />
      </ListItemAvatar>
      <ListItemText
        sx={{ ml: 1 }}
        primary={<Typography variant="body2">{name}</Typography>}
      />
    </ListItem>
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
          <List>
            <Stack spacing={"10px"}>
              {frontendSkills.map((item) => (
                <SkillsListItem {...item} />
              ))}
            </Stack>
          </List>
        </Box>
        <Divider sx={{ display: { xs: "block", md: "none" }, my: 2 }} />
        <Divider
          sx={{
            display: { xs: "none", md: "block" },
            mt: 7,
            mx: 2,
            height: "500px",
          }}
          orientation="vertical"
        />
        <Box sx={{ flexBasis: "100%" }}>
          <SkillTitle>Backend</SkillTitle>
          <List>
            <Stack spacing={"10px"}>
              {backendSkills.map((item) => (
                <SkillsListItem {...item} />
              ))}
            </Stack>
          </List>
        </Box>
        <Divider sx={{ display: { xs: "block", md: "none" }, my: 2 }} />
        <Divider
          sx={{
            display: { xs: "none", md: "block" },
            flexShrink: "0",
            mx: 2,
            mt: 7,
            height: "500px",
          }}
          orientation="vertical"
        />
        <Box sx={{ flexBasis: "100%" }}>
          <SkillTitle> Tools {"&"} Testing</SkillTitle>
          <List>
            <Stack spacing={"10px"}>
              {testingAndTools.map((item) => (
                <SkillsListItem {...item} />
              ))}
            </Stack>
          </List>
        </Box>
      </Stack>
    </Section>
  );
}

export default Skills;
