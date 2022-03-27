import { useTheme } from "@emotion/react";
import { Box, Link, List, Slide, Stack } from "@mui/material";
import React from "react";
import { socialLinks } from "../../fixtures/socialLinks";
import { useShowItemOnIntersect } from "../../hooks";

function SocialLinks() {
  const theme = useTheme();
  const { showItem, ref } = useShowItemOnIntersect();

  return (
    <Slide direction="right" in={showItem} timeout={500}>
      <Box
        ref={ref}
        sx={{
          background:
            "radial-gradient(198.75% 176.52% at -48.75% -18.56%, rgba(255, 255, 255, 0.49) 0%, rgba(238, 238, 238, 0.21) 100%)",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          display: { xs: "none", md: "block" },
          top: "50%",
          transform: "translateY(-50%)",
          position: "fixed",
          zIndex: theme.zIndex.overlayUI,
        }}
      >
        <List>
          <Stack>
            {socialLinks.map(({ icon, to }, i) => (
              <>
                <Link
                  key={to}
                  href={to}
                  sx={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                    color: "text.secondary",
                    p: 0,
                    transition: "color 150ms",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                  target="_blank"
                >
                  {React.cloneElement(icon, { sx: { fontSize: "3.5rem" } })}
                </Link>
              </>
            ))}
          </Stack>
        </List>
      </Box>
    </Slide>
  );
}

export default SocialLinks;
