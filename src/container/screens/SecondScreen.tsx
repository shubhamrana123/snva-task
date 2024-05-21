import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
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
  
  const airportDataObject: AirportDataProps[]= [{
    airportCode: "YAO",
    airportName: "Yaounde",
    cityCode: "YAO",
    cityName: "Yaounde",
    countryCode: "CM",
    countryName: "Cameroon",
    continent: "Africa"
  },
  {
    airportCode: "ZLJ",
    airportName: "Yverdon-les-Bains",
    cityCode: "ZLJ",
    cityName: "Yverdon-les-Bains",
    countryCode: "CH",
    countryName: "Switzerland",
    continent: "Europe"
  },
  {
    airportCode: "NQZ",
    airportName: "Nursultan Nazarbayev International Airport",
    cityCode: "NQZ",
    cityName: "Astana",
    continent: "Kazakhstan",
    countryCode: "KZ",
    countryName: "Kazakhstan"
  },


{
  airportCode: "BTR",
  airportName: "Baton Rouge Metropolitan",
  cityCode: "BTR",
  cityName: "Baton Rouge",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "WBQ",
  airportName: "Beaver",
  cityCode: "WBQ",
  cityName: "Beaver",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "BLI",
  airportName: "Bellingham International",
  cityCode: "BLI",
  cityName: "Bellingham",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "BJI",
  airportName: "Bemidji Regional",
  cityCode: "BJI",
  cityName: "Bemidji",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "CPX",
  airportName: "Benjamin Rivera Noriega",
  cityCode: "CPX",
  cityName: "Culebra",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "BTM",
  airportName: "Bert Mooney",
  cityCode: "BTM",
  cityName: "Butte",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "BET",
  airportName: "Bethel",
  cityCode: "BET",
  cityName: "Bethel",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
},
{
  airportCode: "BTT",
  airportName: "Bettles",
  cityCode: "BTT",
  cityName: "Bettles",
  countryCode: "US",
  countryName: "United States",
  continent: "North America"
}
]
  return (
    <>
      <Stack className='container' width='560px' sx={{ border: 1, borderColor: 'gray' ,padding:3}}>
        <Stack sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography variant='h6' fontWeight={'bold'}>Select Depart City</Typography>
        </Stack>
        <Stack sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>

          <Typography sx={{ color: 'gray', fontSize: '12px' }}>Depart from</Typography>
          <Typography sx={{ color: 'gray', fontSize: '12px' }}>Going to</Typography>
        </Stack>
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
      sx={{ width: 300 }}
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
          label="Choose a country"
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
            <Typography sx={{ fontWeight: 'bold' }}>Mumbai</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>BOM</Typography>

          </Stack>
        </Stack>


      </Stack>

    </>
  )
}

export default SecondScreen