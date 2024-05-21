import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import airport from './../../airport.json'
interface AirportDataProps {
  airportCode: string
  airportName: string
  cityCode: string
  cityName: string
  countryCode: string
  countryName: string
  continent: string
}
const SecondScreen = () => {
  const [searchedText, setSearchedText] = useState<any>()
  console.log('airport', airport)
  const airportDataObject: AirportDataProps[] = airport
  return (
    <>
      <Stack className='container' width='560px' sx={{ border: 1, borderColor: 'gray', padding: 3 }}>
        <Stack sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography variant='h6' fontWeight={'bold'}>Select Depart City</Typography>
        </Stack>
        {/* <Stack sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>

          <Typography sx={{ color: 'gray', fontSize: '12px' }}>Depart from</Typography>
          <Typography sx={{ color: 'gray', fontSize: '12px' }}>Going to</Typography>
        </Stack> */}
        <Stack sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          {/* <TextField size='small'
            id="filled-search"
            label="Search"
            type="search"
            placeholder=""
            variant="outlined"
            sx={{ maxWidth: '100px' }}
            onChange={(txt) => setSearchedText(txt.target.value)} /> */}
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            options={airportDataObject}
            autoHighlight
            getOptionLabel={(option) => option.cityName}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                  alt=""
                />
                {option.cityName} ({option.countryCode})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Depart from"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Stack sx={{
            display: 'flex'

          }}>
               <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            options={airportDataObject}
            autoHighlight
            getOptionLabel={(option) => option.cityName}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                  alt=""
                />
                {option.cityName} ({option.countryCode})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Going to"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
            {/* <Typography sx={{ fontWeight: 'bold' }}>Mumbai</Typography> */}
            <Typography sx={{ fontWeight: 'bold' ,alignSelf:'end'}}>BOM</Typography>

          </Stack>
        </Stack>


      </Stack>

    </>
  )
}

export default SecondScreen