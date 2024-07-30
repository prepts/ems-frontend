import { Button, useTheme } from "@mui/material";
import React from "react";
type buttonType = "primary" | "secondary";
interface ButtonProps {
  type: buttonType;
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  width?: string;
  onClick: ()=>void;
}
const SharedButton = (props: ButtonProps) => {
  const { type, text, startIcon, endIcon, disabled, width, onClick } = props;
  const theme = useTheme();
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      sx={{
        color:
          type === "primary"
            ? theme.palette.secondary.light
            : theme.palette.primary.main,
        borderRadius: "10px",
        textTransform: 'none',
        width: width
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SharedButton;
