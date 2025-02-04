import React from "react";
import { FormControl, TextField } from "@mui/material";

export default function CustomTextField({
  label,
  variant = "outlined",
  fullWidth = true,
  disabled,
  required,
  ...props
}) {
  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
      disabled={disabled}
        label={label}
        variant={variant}
        required={required}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
        {...props}
      />
    </FormControl>
  );
}
