
import { Button, CardContent, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
const ToDoCard = ({todoData}:any) => {
  return (
<>
<Card sx={{ width: 400 ,height:200}}>
      <CardContent>
        <Stack rowGap={'20px'}>
        <Stack sx={{flexDirection:'row',justifyContent:'space-around'}}>
        <Typography fontWeight={'bold'}>Id :</Typography>
        <Typography>{todoData?.id}</Typography>
    </Stack>
    <Stack sx={{flexDirection:'row',justifyContent:'space-around'}}>
        <Typography fontWeight={'bold'}>Title:</Typography>
        <Typography>{todoData?.title}</Typography>
    </Stack>
    <Stack sx={{flexDirection:'row',justifyContent:'space-around'}}>
        <Typography fontWeight={'bold'}>Completed :</Typography>
        <Typography>{todoData?.completed}</Typography>
    </Stack>
        </Stack>
   
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
</>
  )
}

export default ToDoCard