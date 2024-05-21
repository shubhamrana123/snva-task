import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FirstScreen = () => {
  const [count1, setCount1] = useState<any>(0)
  const [count2, setCount2] = useState<any>(0)
  const [count3, setCount3] = useState<any>(0)
  const [value, setValue] = React.useState('Economy');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setCount1(0);
    setCount2(0);
    setCount3(0)
  };
  return (
    <>
      <Stack id='container' maxWidth={'650px'} sx={{

        padding: 3,
        rowGap: '10px'
      }}>
        <Stack id='part-one' sx={{

        }}>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',


          }}>
            <Typography sx={{ color: 'gray' }}> Depart From</Typography>
            <Typography sx={{ color: 'gray' }}> Going to</Typography>
          </Stack>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'

          }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}> New Delhi</Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}> Mumbai</Typography>
          </Stack>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'

          }}>
            <Typography sx={{ color: 'gray' }}> DEL</Typography>
            <Typography sx={{ color: 'gray' }}> BOM</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack className="part-two" >
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'

          }}>
            <Typography sx={{ color: 'gray' }}> Traveller class</Typography>
            <Typography sx={{ color: 'gray' }}> ^</Typography>
          </Stack>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'

          }}>
            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}> {count1 + count2 + count3} Travelers,{value}</Typography>

          </Stack>

        </Stack>
        <Divider />
        <Stack className="part3" rowGap='5px'>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',

          }}>
            <Stack sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',

            }}>
              <Typography sx={{ fontWeight: 'bold' }}>Adult</Typography>
              <Typography></Typography>
            </Stack>
            <Stack flexDirection={'row'}>
              <Typography sx={{ fontWeight: 'bold' }}>Child</Typography>
              <Typography sx={{ color: 'gray' }}> (2-12 years)</Typography>
            </Stack>
            <Stack flexDirection={'row'}>
              <Typography sx={{ fontWeight: 'bold' }}>Infant</Typography>
              <Typography sx={{ color: 'gray' }}> (below 2 years)</Typography>
            </Stack>
          </Stack>

          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}>

            <Stack sx={{
              display: 'flex',
              flexDirection: 'row',
              border: 1,
              borderStyle: 'dotted',
              width: '100px',
              justifyContent: 'space-around'
            }}>
              <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => {
                  if (count1 < 9) {
                    setCount1(count1 + 1)
                  }


                }}>+</Typography>
              <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', backgroundColor: 'lightgray' }}> {count1}</Typography>
              <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => {
                  if (count1 > 0) {
                    setCount1(count1 - 1)
                  }


                }}>-</Typography>
            </Stack>
            <Stack sx={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              {/* <Typography>+</Typography> */}
              <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                border: 1,
                borderStyle: 'dotted',
                width: '100px',
                justifyContent: 'space-around'
              }}>
                <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => {
                    if (count2 < 9) {
                      setCount2(count2 + 1)
                    }


                  }}>+</Typography>
                <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', backgroundColor: 'lightgray' }}> {count2}</Typography>
                <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => {
                    if (count2 > 0) {
                      setCount2(count2 - 1)
                    }


                  }}>-</Typography>
              </Stack>


            </Stack>

            <Stack sx={{
              display: 'flex',
              flexDirection: 'row',
              border: 1,
              borderStyle: 'dotted',
              width: '100px',
              justifyContent: 'space-around'
            }}>
              <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => {
                  if (count3 < 9) {
                    setCount3(count3 + 1)
                  }


                }}>+</Typography>
              <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', backgroundColor: 'lightgray' }}> {count3}</Typography>
              <Typography sx={{ border: 1, width: '33.3px', fontSize: '18px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => {
                  if (count3 > 0) {
                    setCount3(count3 - 1)
                  }


                }}>-</Typography>
            </Stack>

          </Stack>
        </Stack>

        <Stack className="radio">

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Flight class</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="economy"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
              <FormControlLabel value="Premium Economy" control={<Radio />} label="Premium Economy" />
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>
    </>
  )
}

export default FirstScreen