import React from "react";
import personalProjects from "../../fixtures/personal-projects";
import { Section, SectionTitle, ProjectCard } from "..";
import { Box, Grid, Stack, Typography } from "@mui/material";

const ProjectTitle = ({ title }) => (
  <Stack sx={{ alignItems: "center", mb: 2 }} direction="row">
    <Box
      sx={{
        bgcolor: "primary.main",
        height: "40px",
        mr: 1,
        width: "5px",
      }}
    />
    <Typography variant="h3">{title}</Typography>
  </Stack>
);

function Projects() {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <ProjectTitle title="Personal Projects" />
      <Grid container spacing={5}>
        {personalProjects.map((item) => (
          <Grid sm={6} lg={4} item>
            <ProjectCard {...item} />{" "}
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
