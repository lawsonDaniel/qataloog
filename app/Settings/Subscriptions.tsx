import { Box, MenuItem, Typography,SelectChangeEvent,Select,Badge,Avatar, Stack,styled, Tabs,Tab } from '@mui/material'
import React,{useState} from 'react'
import Image from 'next/image'
import Termly from './subscription/Termly';

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


function Subscriptions() {
  const [country, setCountry] = useState('nigeria');
  const [value, setValue] = React.useState(0);
  
  const handleCTabhange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (event: SelectChangeEvent) => {
      setCountry(event.target.value as string);
  };
  return (
    <Box>
        <Select
        sx={{ 
            '.MuiOutlinedInput-notchedOutline': { 
              border:"0.5px solid #D0D0D4"
            },
            width:"204px",
            
         }}
         IconComponent={() => (
            <Image src="/chevron-down.svg" alt={''} width={30} height={30} />
          )}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          className='w-[150px] px-2'
          onChange={handleChange}
        >
          <MenuItem value={'nigeria'} >
            <Box sx={{
                gap:"5px",
                display:"flex",
                alignItems:"center"
            }}>
            <Image width={20} height={20} src="/NG.svg" alt={"nigeria"}/>
            <Typography sx={{
              fontSize:'14px',
              fontWeight:'400'
            }}>Nigeria</Typography>
            </Box>
          </MenuItem>
        </Select>
      <Box sx={{ width: '318px', marginTop:"40px" }}>
      <Box sx={{ 
        background:"#FEFEFF"
       }}>
        <Tabs 
         sx={{ '& .MuiTab-root.Mui-selected': { 
          backgroundColor: '#FCD9D1' ,
          color:'#F14119',
          borderRadius:"4px",
          border:"none"
        } }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#FEFEFF",
            color:"#000000"
          }
        }} 
        value={value} onChange={handleCTabhange} aria-label="basic tabs example">
          <Tab label="Termly" {...a11yProps(0)} />
          <Tab label="Bi-Annually" {...a11yProps(1)} />
          <Tab label="Annually" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Termly/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Bi-Annually
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Bi-Annually
      </CustomTabPanel>
    </Box>
    </Box>
  )
}

export default Subscriptions