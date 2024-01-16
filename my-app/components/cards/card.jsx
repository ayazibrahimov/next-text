import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


// const getData = async ()=>{
  
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   return res.json()
  
// }
// const getData2 = async ()=>{
  
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/2')
//   return res.json()
  
// }
// const getData3 = async ()=>{
  
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/3')
//   return res.json()
  
// }


async function card() {

  // let info = getData()
  // let info1 = getData2()
  // let info2 = getData3()


  // let [myData1, myData2, myData3] = await Promise.all([info, info1, info2])

  
  return (
    <div>
       <p>Salam Alekum qaqam necesen</p>
       <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  )
}

export default card;