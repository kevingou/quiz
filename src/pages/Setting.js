import { Button} from "@mui/material";
import { Box } from "@mui/system";
import React from 'react'
import SelectField from '../components/SelectField';
import TextFieldComp from "../components/TextFieldComp";

const Setting = () => {
  return (
   <form>
    <SelectField label="Category"></SelectField>
    <SelectField label="Difficulty"></SelectField>
    <SelectField label="Type"></SelectField>
    <TextFieldComp />
    <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
   </form>
  )
}

export default Setting;