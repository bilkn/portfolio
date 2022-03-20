import { css } from "@emotion/css";
import { FormLabel, Input, Stack, Typography } from "@mui/material";
import React from "react";

function CustomInput(props) {
  const { label, id, name, value, onChange, ...rest } = props;
  return (
    <fieldset
      className={css`
        width: "100%";
      `}
    >
      <Stack sx={{ alignItems: "flex-start", width: "100%" }}>
        <FormLabel htmlFor={id}>
          <Typography variant="small" sx={{ color: "#fff" }}>
            {label}
          </Typography>
        </FormLabel>
        <Input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          fullWidth
          inputProps={{ sx: { fontSize: { xs: "1.4rem", md: "1.8rem" } } }}
          {...rest}
        />
      </Stack>
    </fieldset>
  );
}

export default CustomInput;
