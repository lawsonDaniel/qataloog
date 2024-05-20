"use client"
import { Box, Typography,Tabs,Tab  } from '@mui/material'
import React from 'react'
import Profile from './Profile';
import Password from './Password';
import Subscriptions from './Subscriptions';
import PublisherEarnings from './PublisherEarnings';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
   <Box>
      <Typography sx={{
        fontSize: '39.06px',
        fontWeight: '900',
        lineHeight: '48px',
        textAlign: 'left'

      }}>Settings</Typography>
      
      <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs 
        sx={{ '& .MuiTab-root.Mui-selected': { 
          color:'#000000',
          borderRadius:"4px",
          border:"none"
        } }}
        TabIndicatorProps={{
    style: {
      backgroundColor: "#F14119",
      color:"#000000"
    }
  }} value={value}  onChange={handleChange} aria-label="setting tab">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Password" {...a11yProps(1)} />
          <Tab label="Subscriptions" {...a11yProps(2)} />
          <Tab label="Publisher Earnings" {...a11yProps(3)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Profile/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Password/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Subscriptions/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
     <PublisherEarnings/>
      </CustomTabPanel>
      
    </Box>
   </Box>
  )
}

export default page