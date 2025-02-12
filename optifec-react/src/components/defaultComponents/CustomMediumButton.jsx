import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

export default function CustomMediumButton({ color, children, ...props }) {
  const theme = useTheme();

  return (
    <Button
      sx={{
        backgroundColor: theme.palette[color].main,
        "&:hover": {
          backgroundColor: theme.palette[color].dark,
        },
      }}
      variant="contained"
      size="medium"
      {...props}
    >
      {children}
    </Button>
  );
}
