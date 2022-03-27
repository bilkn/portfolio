import React from "react";
import personalProjects from "../../fixtures/personal-projects";
import works from "../../fixtures/works";
import { Section, SectionTitle, ProjectCard, MobileProjectCard } from "..";
import { Box, Grid, Stack, Typography } from "@mui/material";

const ProjectTitle = ({ title }) => (
  <Stack sx={{ alignItems: "center", mb: 3 }} direction="row">
    <Box
      sx={{
        bgcolor: "primary.main",
        height: { xs: "30px", md: "40px" },
        mr: { xs: 1, md: 2 },
        width: "5px",
      }}
    />
    <Typography variant="h3">{title}</Typography>
  </Stack>
);

function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Stack spacing={7}>
        <Box>
          <ProjectTitle title="Personal Projects" />
          <Grid
            component={"ul"}
            sx={{ display: { xs: "none", md: "flex" } }}
            container
            spacing={6}
          >
            {personalProjects.map((item) => (
              <Grid key={item.title} component={"li"} sm={6} lg={4} item>
                <ProjectCard {...item} />{" "}
              </Grid>
            ))}
          </Grid>
          <Stack
            direction="row"
            sx={{
              display: { xs: "flex", md: "none" },
              overflowX: "auto",
              pb: 2,
            }}
            spacing={6}
          >
            {personalProjects.map((item) => (
              <MobileProjectCard key={item.title} {...item} />
            ))}
          </Stack>
        </Box>
        <Box>
          <ProjectTitle title="Works" />
          <Grid
            component={"ul"}
            sx={{ display: { xs: "none", md: "flex" } }}
            container
            spacing={6}
          >
            {works.map((item) => (
              <Grid component={"li"} sm={6} lg={4} item>
                <ProjectCard key={item.title} {...item} />{" "}
              </Grid>
            ))}
          </Grid>
          <Stack
            direction="row"
            sx={{
              display: { xs: "flex", md: "none" },
              overflowX: "auto",
              pb: 2,
            }}
            spacing={6}
          >
            {works.map((item) => (
              <MobileProjectCard key={item.title} {...item} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Section>
  );
}

export default Projects;
