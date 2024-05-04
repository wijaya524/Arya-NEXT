import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextView = (props : {label: string, maxLength: number, type: string, name: string}) => {
    const {label, maxLength, type, name} = props
    return (
        <Box

        sx={{
          width: 400,
          maxWidth: "100%",
          py: 1,
          gap: 5,
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <TextField
        inputProps={{ style: { color: "#eaeaea" }, maxLength: maxLength,  autoComplete: "off" , type : type }}
        InputLabelProps={{ style: { color: "white", } }}
          fullWidth
          name={name}
          id="standard-multiline-static"
          label={label}     
          variant="standard"
        />

        </Box>

    )
}

export default TextView