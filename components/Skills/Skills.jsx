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
      <ListItemText sx={{ ml: 1 }} primary={name} />
    </ListItem>
  );
};

function Skills() {
  return (
    <Section>
      <SectionTitle>All Skills</SectionTitle>
      <Stack>
        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Frontend
          </Typography>
          <List>
            <Stack spacing={"10px"}>
              {frontendSkills.map((item) => (
                <SkillsListItem {...item} />
              ))}
            </Stack>
          </List>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Backend
          </Typography>
          <List>
            <Stack spacing={"10px"}>
              {backendSkills.map((item) => (
                <SkillsListItem {...item} />
              ))}
            </Stack>
          </List>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Tools {"&"} Testing
          </Typography>
          <List>
            <Stack spacing={"10px"}>
              {/*   {backendSkills.map((item) => (
                <SkillsListItem {...item} />
              ))} */}
            </Stack>
          </List>
        </Box>
      </Stack>
    </Section>
  );
}

export default Skills;
