import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Section, CustomInput } from "..";
import { useShowItemOnIntersect } from "../../hooks";
import useContactLogic from "./useContactLogic";
import Image from "next/image";

const ContactDecor = () => {
  const { showItem, ref } = useShowItemOnIntersect();

  return (
    <Slide direction="right" in={showItem} timeout={1000}>
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: { xs: "none", md: "block" },
          width: "60%",
        }}
      >
        <Box sx={{ position: "absolute", right: "0", top: "0", width: "30%",zIndex:1 }}>
          <Image
            src="/images/mail/contact-mail-sign.png"
            height="196"
            width="190"
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="/images/mail/contact-mail.png"
            width="654"
            height="480"
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "0",
            top: "0",
            transform: "translate(0,60px) rotate(44deg)",

            width: "30%",
          }}
        >
          <img src="/images/mail/triangle.png" alt="" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "0",
            bottom: "0",
            transform: "translate(70px,0) rotate(136deg)",
            width: "30%",
          }}
        >
          <img src="/images/mail/triangle.png" alt="" />
        </Box>
      </Box>
    </Slide>
  );
};

function Contact() {
  const { handlers, name, email, message } = useContactLogic();
  const { handleInputChange } = handlers;
  /*   const { showItem, ref } = useShowItemOnIntersect(); */

  return (
    <Section id="contact">
      <Stack
        direction="row"
        sx={{ alignItems: "center" }}
        spacing={{ md: "70px" }}
      >
        <ContactDecor />
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2">Contact Me</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Message me to turn your ideas into a competitive product with my
              passion and skills.
            </Typography>
          </Box>
          <Box
            sx={{
              backdropFilter: "blur(12px)",
              bgcolor: "grey.700",
              border: "1px solid",
              borderColor: "grey.100",
              borderRadius: 1,
              mt: 3,
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
                <Button sx={{ borderRadius: "20px", mt: 3, py: 2 }}>
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
