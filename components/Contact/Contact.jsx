import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Section, CustomInput } from "..";
import useContactLogic from "./useContactLogic";

/* sx={{
  aspectRatio: "637/453",
  background:
    "radial-gradient(102.83% 102.83% at 0% 0%, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 99.15%)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  position: "relative",
  overflow: "hidden",
 
}} */

const ContactDecor = () => (
  <Box sx={{ width: "60%" }}>
    <svg width="100%" viewBox="0 0 637 453" fill="none">
      <g filter="url(#filter0_b_0_1)">
        <rect
          width="637"
          height="453"
          rx="10"
          fill="url(#paint0_radial_0_1)"
          fill-opacity="0.7"
        />
        <rect
          x="0.5"
          y="0.5"
          width="636"
          height="452"
          rx="9.5"
          stroke="white"
          stroke-opacity="0.3"
          style={{ mixBlendMode: "overlay" }}
        />
      </g>
      <path
        opacity="0.7"
        d="M319 223L629.903 0.25H8.09689L319 223Z"
        fill="url(#paint1_radial_0_1)"
        fill-opacity="0.7"
      />
      <defs>
        <filter
          id="filter0_b_0_1"
          x="-12"
          y="-12"
          width="661"
          height="477"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_0_1"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_0_1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(36.1765) scale(789.145 586.548)"
        >
          <stop stop-color="white" stop-opacity="0.7" />
          <stop offset="0.991538" stop-color="white" stop-opacity="0.1" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_0_1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-47.4999 -24.5001) rotate(22.9457) scale(892.63 2157.94)"
        >
          <stop stop-color="white" stop-opacity="0.3" />
          <stop offset="1" stop-color="#999999" stop-opacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  </Box>
);

function Contact() {
  const { handlers, name, email, message } = useContactLogic();
  const { handleInputChange } = handlers;

  return (
    <Section>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={"70px"}>
        <ContactDecor />
        <Box sx={{ width: "40%" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2">Contact Me</Typography>
            <Typography variant="body2" sx={{ mt: "10px" }}>
              I’m interested in freelance opportunities - espacially ambitious.
              lorem ipsum
            </Typography>
          </Box>
          <Box
            sx={{
              backdropFilter: "blur(12px)",
              bgcolor: "grey.700",
              border: "1px solid",
              borderColor: "grey.100",
              borderRadius: "10px",
              mt: 2,
              p: "30px 35px",
            }}
          >
            <form>
              <Stack spacing={1}>
                <Box>
                  <FormControl sx={{ width: "100%" }}>
                    <CustomInput
                      id="name"
                      label="Name"
                      name="name"
                      value={name}
                      onChange={({ target: { value } }) =>
                        handleInputChange(value, "name")
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={{ width: "100%" }}>
                    <CustomInput
                      id="email"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={({ target: { value } }) =>
                        handleInputChange(value, "email")
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={{ width: "100%" }}>
                    <CustomInput
                      id="message"
                      label="Message"
                      name="message"
                      minRows={8}
                      maxRows={15}
                      value={message}
                      onChange={({ target: { value } }) =>
                        handleInputChange(value, "message")
                      }
                      multiline
                    />
                  </FormControl>
                </Box>
              </Stack>
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ borderRadius: "20px", mt: 2, py: 1 }}>
                  <Typography variant="small">Send message!</Typography>
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Stack>
    </Section>
  );
}

export default Contact;
