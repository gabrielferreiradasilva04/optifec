import React from "react";
import { FormControl, TextField } from "@mui/material";

export default function CustomTextField({
  label,
  variant = "outlined",
  fullWidth = true,
  ...props
}) {
  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
        label={label}
        variant={variant}
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
