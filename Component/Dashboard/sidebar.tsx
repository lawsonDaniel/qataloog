"use client";
import React, { useState } from 'react'
import SideBarMenu from './sideBarMenu'
import { Box, Button,Typography } from '@mui/material'
import AcademicLevel from '../svg/Academic'
import Album from '../svg/Album'
import Atm from '../svg/Atm'
import School from '../svg/School'
import Flag from '../svg/Flag'
import Dashboard from '../svg/Dashboard';
import User from '../svg/User';
import Microsoft from '../svg/Microsoft';
import Coupon from '../svg/Coupon';
import Setting from '../svg/Setting'
import Image from 'next/image';

function Sidebar() {
  const [isHover,setOnHover] = useState<boolean>(false)
  return (
    <Box sx={{
      background:"#FCFCFFx",
      width:"250px"
    }}>
       <SideBarMenu icon={<Dashboard/>} label='/'/>
      <SideBarMenu icon={<User/>} label='Users'/>
      <SideBarMenu icon={<Microsoft/>} label='Admins'/>
      <SideBarMenu icon={<Coupon/>} label='Coupon Codes'/> 
      <SideBarMenu icon={<AcademicLevel />} label='Academic Levels'/>
      <SideBarMenu icon={<School />} label='Platforms'/>
      <SideBarMenu icon={<Flag />} label='Countries'/>
      <SideBarMenu icon={<Album />} label='Content Type'/>
      <SideBarMenu icon={<Atm />} label='Withdrawals'/>
      <SideBarMenu icon={<Setting />} label='Settings'/>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"25px"}}>
      <Button  sx={{
                    color:'#F14119',
                    border:"1px solid #F14119",
                    width: '204px',
                    height: '48px',
                    padding: '12px 24px 12px 24px',
                    borderRadius: '48px',
                    fontSize:'13px',
                    lineHeight:'24px',
                    '&:hover':{
                    color:'#F14119',
                    border:"1px solid #F14119",
                    }
                }}>
                    <Box sx={{
                        display:'flex',
                        gap:'5px'
                    }}>
                        <Image src="/logout-03.svg" width={24} height={24} alt="remove"/>
                        <Typography>Logout</Typography>
                    </Box>
                </Button>
      </Box>
    </Box>
  )
}

export default Sidebar