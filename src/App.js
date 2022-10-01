import { Fragment } from "react";
import { Routes, Route} from "react-router-dom";
import Finalscreen from './pages/Finalscreen';
import Questions from './pages/Questions';
import Setting from './pages/Setting';
import {Container,Typography } from '@mui/material';
import {Box} from '@mui/system';





function App() {

  return (

 <Fragment>
  <Container maxWidth="sm">
    <Box textAlign="center" mt={5}>
    <Routes>

<Route path="/"  element={<Setting />}>

  </Route>
<Route path="/questions"  element={<Questions />} />
<Route path="/score"  element={<Finalscreen />} />



</Routes>
</Box>
  </Container>

 </Fragment>
   

  
    
  );
}

export default App;

