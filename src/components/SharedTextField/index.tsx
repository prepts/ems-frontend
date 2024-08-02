import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import { useState } from "react";

interface TextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  type?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}
const SharedTextfield = (props: TextFieldProps) => {
  const { value, onChange, height, width, type, endAdornment, startAdornment } = props;
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <TextField
      value={value}
      onChange={onChange}
      type={type==="password" ? showPassword ? "text" : "password" : type}
      helperText={" "}
      sx={{
        width: width,
        "& .MuiOutlinedInput-root": {
          height: height,
          borderRadius: "10px",
          fontSize: "16px",
          color: "#202046",
          fontFamily: "Noto Sans SC",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.light,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              color="primary"
            >
              {type==="text" ? endAdornment : showPassword ? <VisibilityOff sx={{width: "75%"}} /> : <Visibility sx={{width: "75%"}} />}
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="end">
            {startAdornment && (
            <IconButton
              aria-label="icon"
              edge="start"
              color="primary"
            >
              {startAdornment}
            </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SharedTextfield;
