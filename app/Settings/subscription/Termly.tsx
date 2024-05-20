import { Box, Button, InputLabel, TextField } from '@mui/material'
import React from 'react'

function Termly() {
  return (
   <Box sx={{
    display:'flex',
    flexDirection:'column',
    gap:'20px',
   
    
}}>
<Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"0"
            }}>
            <InputLabel sx={{
                    fontSize:'16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color:'#323233'
                }}  htmlFor="name">Plan Duration (Months)</InputLabel>
                <TextField InputProps={{
                style: {
                borderRadius: "24px",
                width: '432px',
                height: '40px',
                padding: '12px 24px 12px 24px',     
                border: '0.5px',
                }
            }} id="name" placeholder='4'  variant="outlined" />
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"0"
            }}>
            <InputLabel sx={{
                    fontSize:'16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color:'#323233'
                }}  htmlFor="name">Plan Duration (Days)</InputLabel>
                <TextField InputProps={{
                style: {
                borderRadius: "24px",
                width: '432px',
                height: '40px',
                padding: '12px 24px 12px 24px',     
                border: '0.5px',
                }
            }} id="name" placeholder='120'  variant="outlined" />
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"0"
            }}>
            <InputLabel sx={{
                    fontSize:'16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color:'#323233'
                }}  htmlFor="name">Subscription Fee (₦)</InputLabel>
                <TextField InputProps={{
                style: {
                borderRadius: "24px",
                width: '432px',
                height: '40px',
                padding: '12px 24px 12px 24px',     
                border: '0.5px',
                }
            }} id="name" placeholder='500'  variant="outlined" />
            </Box>
            <Button sx={{
                    color:'#FAFAFF',
                    background:"#F14119",
                    width: '204px',
                    height: '48px',
                    padding: '12px 24px 12px 24px',
                    borderRadius: '48px',
                    fontSize:'13px',
                    lineHeight:'24px',
                    '&:hover':{
                    color:'#FAFAFF',
                    background:"#F14119",
                    }
                }}>Update</Button>

   </Box>
  )
}

export default Termly