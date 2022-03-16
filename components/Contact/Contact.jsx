import {
  Box,
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

function Contact() {
  const { handlers, name, email, message } = useContactLogic();
  const { handleInputChange } = handlers;

  return (
    <Section>
      <Stack direction="row">
        <Box>
          <Box>
            <Typography variant="h2">Contact Me</Typography>
            <Typography>
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
            </form>
          </Box>
        </Box>
      </Stack>
    </Section>
  );
}

export default Contact;
