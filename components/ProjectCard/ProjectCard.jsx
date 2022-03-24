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
import techStackTitleMapping from "../../constants/techStackTitleMapping";
import Image from "next/image";
import useShowItemOnIntersect from "../../hooks/useShowItemOnIntersect";

export const TechStackContainer = ({
  techStack,
  visible,
  sx = {},
  logoSize = "20px",
}) => (
  <Stack
    className="card-top-container"
    direction="row"
    spacing={5}
    sx={{
      alignItems: "center",
      bgcolor: "grey.800",
      height: "45px",
      justifyContent: "center",
      py: 1,
      position: "absolute",
      left: "0",
      top: "0",
      transform: visible ? "" : "translateY(-100%)",
      transition: "transform 150ms",
      width: "100%",
      zIndex: 1,
      ...sx,
    }}
  >
    {techStack.map((name) => (
      <Box
        key={name}
        sx={{
          display: "flex",
          width: logoSize,
        }}
      >
        <img
          src={techStackLogoMapping[name]}
          className={css`
            font-size: 1rem;
          `}
          alt={name}
          title={techStackTitleMapping[name]}
        />
      </Box>
    ))}
  </Stack>
);

export const ProjectCardTitle = ({ title, sx = {} }) => (
  <CardHeader
    sx={{
      bgcolor: "hsla(0, 6%, 12%, 0.88)",
      bottom: "0",
      left: "0",
      position: "absolute",
      py: 1,
      height: "45px",
      width: "100%",
      ...sx,
    }}
    title={
      <Typography variant="body2" sx={{ lineHeight: 1.4, textAlign: "center" }}>
        {title}
      </Typography>
    }
  />
);

function ProjectCard(props) {
  const { title, description, img, techStack, website, sourceCode } = props;
  const { showItem, ref } = useShowItemOnIntersect();
  
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        "&:hover .card-top-container": {
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
      <TechStackContainer techStack={techStack} />
      <Box
        sx={{
          height: "0",
          paddingBottom: "75%",
          width: "100%",
        }}
        ref={ref}
      >
        <Image src={img} layout="fill" objectFit={"cover"} />
      </Box>
      <CardContent
        sx={{
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.71)",
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 88px)",
          justifyContent: "center",
          px: 7,
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
        <Typography variant="body2" sx={{ mb: 3 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1}>
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
      <ProjectCardTitle title={title} />
    </Card>
  );
}

export default ProjectCard;
