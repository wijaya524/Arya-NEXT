import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextView = (props : {label: string, maxLength: number}) => {
    const {label, maxLength} = props
    return (
        <Box

        sx={{
          width: 400,
          maxWidth: "100%",
          py: 2,
          gap: 5,
          display: "flex",
          flexDirection: "column",
         
        }}
      >
        <TextField
        inputProps={{ style: { color: "white" }, maxLength: maxLength,  autoComplete: "off" }}
        InputLabelProps={{ style: { color: "white" } }}
          fullWidth
          id="standard-multiline-static"
          label={label}     
          variant="standard"
        />

        </Box>

    )
}

export default TextView