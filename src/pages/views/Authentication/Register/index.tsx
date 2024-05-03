import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterView = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <form
      action=""
      method="post"
      className=" grid my-36 items-center justify-center align-center"
    >
      <h1 className=" text-3xl font-bold">Register</h1>
      <Box

        sx={{
          width: 400,
          maxWidth: "100%",
          py: 5,
        }}
      >
        <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
          fullWidth
          id="standard-multiline-static"
          label="Multiline"
          multiline
         
          variant="standard"
        />

        <FormControl fullWidth variant="standard">

          <InputLabel
            htmlFor="standard-adornment-password"
            sx={{ color: "white" }}
          >
            Password
          </InputLabel>
          <Input
            fullWidth
            sx={{ color: "white" }}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </form>
  );
};

export default RegisterView;
