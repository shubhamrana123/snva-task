import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const NewTask = () => {
  return (
    <>
      <Stack sx={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 0 }}>
        <Stack rowGap={'30px'}>
          <Typography sx={{ textAlign: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ color: 'white', fontSize: '20px', textAlign: 'center' }} className="lucide lucide-zap floating-element h-14 w-14"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></Typography>
          <Stack className='container' rowGap='20px'>
            <Stack id='logo' sx={{ flexDirection: 'column', color: 'white' }}>
              <Typography variant='h2' fontWeight={'bold'} textAlign='center'>The Ultimate Link </Typography>
              <Typography variant='h2' fontWeight={'bold'}>Collection Powerhouse</Typography>
            </Stack>
            <Stack className='second-part' sx={{ color: 'white', }}>
              <Typography sx={{ fontSize: '22px', textAlign: 'center' }}>Organize & transform your web links into Curated Lists.</Typography>
              <Typography sx={{ fontSize: '22px', textAlign: 'center' }}>Effortlessly share via single click   One Link,  Possibilities!</Typography>
            </Stack>
            <Stack className="third-part" sx={{ flexDirection: 'row', justifyContent: 'center', columnGap: '15px', padding: 5 }}>
              <Button variant='contained' sx={{ color: 'black', backgroundColor: 'white', fontWeight: 'bold', width: '200px' }}>Get Started</Button>
              <Button variant='outlined' sx={{ color: 'whitesmoke', borderColor: 'white', width: '200px', fontWeight: 'bold' }}>Watch demo</Button>
            </Stack>

          </Stack>
          <Stack className='second-container' sx={{ color: 'white', rowGap: '10px' }}>

            <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} sx={{}}>Share Your Favorite Links</Typography>
            <Stack>

              <Typography textAlign={'center'} >The easiest way to curate your favorite links, blogs, websites and</Typography>
              <Typography textAlign={'center'}>share it with everyone. No SEO spam. No Sponsored Links.</Typography>
            </Stack>

          </Stack>
        </Stack>


      </Stack>
    </>
  )
}

export default NewTask