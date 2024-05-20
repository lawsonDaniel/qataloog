"use client"
import { Box, MenuItem, Typography,SelectChangeEvent,Select,Badge,Avatar, Stack,styled } from '@mui/material'
import React,{useState} from 'react'
import Image from 'next/image'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#12B76A',
    color: '#12B76A',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function Header() {
    const [laguage, setLanguage] = useState('english');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        paddingY:'15px',
        width:"100%",
        backgroundColor:"#FEFEFF",
        paddingX:'30px'
        
    }}>
        <Image style={{
          objectFit:"contain"
        }} width={150} height={150} src="/logo1.svg" alt={'logo'} />
       <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"350px"
       }}>
       <Select
        sx={{ 
            '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
            width:"140px"
         }}
         IconComponent={() => (
            <Image src="/chevron-down.svg" alt={''} width={30} height={30} />
          )}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={laguage}
          label="Language"
          className='w-[107px]'
          onChange={handleChange}
        >
          <MenuItem value={'english'} >
            <Box sx={{
                gap:"5px",
                display:"flex",
                alignItems:"center"
            }}>
            <Image width={20} height={20} src="/NG.svg" alt={"english"}/>
            <Typography sx={{
              fontSize:'14px',
              fontWeight:'400'
            }}>English</Typography>
            </Box>
          </MenuItem>
        </Select>
       <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:'8px'

       }}>
       <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Qataloog Admin" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
          <Typography sx={{
              fontSize:'14px',
              fontWeight:'400'
            }}>Qataloog Admin</Typography>
       </Box>
       </Box>
    </Box>
  )
}

export default Header