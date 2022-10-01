import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";


const SelectField = (props) => {
  const { label} = props;
 
  const [value, setValue] = useState("");

  const handleChange = (e) => {
   
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          <MenuItem>1</MenuItem>
          <MenuItem>1</MenuItem>
          <MenuItem>1</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;