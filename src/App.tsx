import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FirstScreen from "./container/screens/FirstScreen";
import SecondScreen from "./container/screens/SecondScreen";


function App() {
  const [count1,setCount1] = useState<any>(0)
  const [count2,setCount2] = useState<any>(0)
  const [count3,setCount3] = useState<any>(0)
  const [value, setValue] = React.useState('Economy');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setCount1(0);
    setCount2(0);
    setCount3(0)
  };
  return (
   <>
  <FirstScreen/>
  <SecondScreen/>
   </>
  );
}

export default App;
