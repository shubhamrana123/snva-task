import { Box, Grid, Stack } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ToDoCard from '../component/Card'

const Cards = () => {
const [todosList,setTodosList] = useState([])
    const todos = async ()=>{
    
        const url =`https://jsonplaceholder.typicode.com/todos`
        const {data} =await axios.get(url)
        setTodosList(data)
        console.log(data)
    }
    useEffect(()=>{
        todos()
    },[])
  return (
<>
{/* <Grid container>
{todosList?.map((item:any)=>(
   <Grid item>
    <ToDoCard/>
   </Grid>
))}
</Grid> */}
{/* <Stack sx={{border:1,borderColor:'red',minHeight:'100vh'

}}>
{todosList?.map((item:any)=>(
   
    <ToDoCard todoData={item}/>

))}


</Stack> */}
<Box   sx={{
          display: "grid",
          flexDirection: "row",
          columnGap: "16px",
          rowGap: "20px",
          gridTemplateColumns: {
            xs: `repeat(1,1fr)`,
            sm: `repeat(2,1fr)`,
            // md: `repeat(3,1fr)`,
            lg: `repeat(3,1fr)`,
            xl: `repeat(4,1fr)`,
          },
          // alignItems:'center',
          // justifyContent:'space-around'
        }}>
{todosList?.map((item:any)=>(
   
   <ToDoCard todoData={item}/>

))}
</Box>
</>
  )
}

export default Cards