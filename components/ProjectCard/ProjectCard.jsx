import { css } from "@emotion/css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import techStackLogoMapping from "../../constants/techStackLogoMapping";

function ProjectCard(props) {
  const { title, description, img, techStack, website, sourceCode } = props;

  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        "&:hover .tech-stack-container": {
          backgroundColor: "#211D1D",
          transform: "translateY(0)",
        },
        "&:hover .MuiCardContent-root": {
          opacity: 1,
        },
        "&:hover .MuiCardHeader-root": {
          backgroundColor: "#211D1D",
        },
      }}
    >
      <Stack
        className="tech-stack-container"
        direction="row"
        spacing={4}
        sx={{
          alignItems: "center",
          bgcolor: "grey.800",
          height: "45px",
          justifyContent: "center",
          py: "10px",
          position: "absolute",
          left: "0",
          top: "0",
          transform: "translateY(-100%)",
          transition: "transform 150ms",
          width: "100%",
        }}
      >
        {techStack.map((name) => (
          <Box
            sx={{
              display: "flex",
              width: "20px",
            }}
          >
            <img
              src={techStackLogoMapping[name]}
              className={css`
                font-size: 1rem;
              `}
              alt={name}
            />
          </Box>
        ))}
      </Stack>
      <Box sx={{ height: "100%", width: "100%" }}>
        <img
          className={css`
            object-fit: cover;
            height: 100%;
            width: 100%;
          `}
          src={img}
        />
      </Box>
      <CardContent
        sx={{
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.71)",
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 88px)",
          justifyContent: "center",
          px: 6,
          position: "absolute",
          top: "50%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%,-50%)",
          transition: "opacity 150ms",
          opacity: "0",
          width: "100%",
        }}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={"10px"}>
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
      <CardHeader
        sx={{
          bgcolor: "hsla(0, 6%, 12%, 0.88)",
          bottom: "0",
          left: "0",
          position: "absolute",
          py: "10px",
          height: "45px",
          width: "100%",
        }}
        title={
          <Typography
            variant="body2"
            sx={{ lineHeight: 1.4, textAlign: "center" }}
          >
            {title}
          </Typography>
        }
      />
    </Card>
  );
}

export default ProjectCard;
