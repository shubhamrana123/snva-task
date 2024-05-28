import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




import NewTask from "./container/screens/NewTask";
import Cards from "./container/screens/Cards";


function App() {

  const [value, setValue] = React.useState('Economy');


  const filterSuggestions = (suggestion:any, userInput:any) => {
    
    console.log('sugesstion',suggestion)
    console.log('userinput',userInput)
    return suggestion?.toLowerCase()?.startsWith(userInput.toLowerCase());
  };


  return (
   <>
  
  {/* <Task suggestions ={arr} filterSuggestion={filterSuggestions}/> */}
  <NewTask/>
{/* <Cards/> */}
   </>
  );
}

export default App;
