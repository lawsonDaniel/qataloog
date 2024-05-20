import { Box,Button, Typography,TextField, FormControl, InputLabel } from '@mui/material'
import React,{useState} from 'react'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Profile() {
    const [phone,setPhone] = useState<string>('')
    const [image, setImage] = useState(null);
  const [preview, setPreview] = useState<string | ArrayBuffer | any >('');
    
  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview('');
    }
  };
  const handleRemove = ()=>{
    setImage(null);
      setPreview('');
  }
  const handleButtonClick = () => {
    if(document){
        document.getElementById('file-input')?.click();
    } 
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (image) {
      console.log('Image uploaded:', image);
      // You can now handle the image upload to the server or any other logic.
    }
  };
  return (
   <Box>
        <Box sx={{
            display:'flex',
            alignItems:'center',
            gap:'20px'
        }}>
            {preview ? (
          <img
            src={preview}
            alt="Image Preview"
            style={{ width: '204px', height: '204px', objectFit: 'cover', borderRadius:'100%', }}
          /> 
        ) : <Box sx={{
            width:'204px',
            height:'204px',
            borderRadius:'100%',
            background:'#F14119'
        }}></Box>
    }
            
            <Box sx={{
                display:'flex',
                flexDirection:"column",
                gap:"10px"
            }}>
               <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <Button
          sx={{
            color: '#FAFAFF',
            background: "#F14119",
            width: '204px',
            height: '48px',
            padding: '12px 24px',
            borderRadius: '48px',
            fontSize: '13px',
            lineHeight: '24px',
            '&:hover': {
              color: '#FAFAFF',
              background: "#F14119",
            },
          }}
          onClick={handleButtonClick}
        >
          Upload New Picture
        </Button>

                 
                 <Button onClick={handleRemove} sx={{
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
                        <Image src="/remove-circle-half-dot.svg" width={24} height={24} alt="remove"/>
                        <Typography>Remove</Typography>
                    </Box>
                </Button>
            </Box>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            marginTop:"40px",
            
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
                }}  htmlFor="name">Full Name</InputLabel>
                <TextField InputProps={{
                style: {
                borderRadius: "24px",
                width: '432px',
                height: '40px',
                padding: '12px 24px 12px 24px',     
                border: '0.5px',
                }
            }} id="name" placeholder='John Doe'  variant="outlined" />
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
                }}  htmlFor="name">Email</InputLabel>
                <TextField InputProps={{
                style: {
                borderRadius: "24px",
                width: '432px',
                height: '40px',
                padding: '12px 24px 12px 24px',     
                border: '0.5px',
                }
            }} id="name" placeholder='Johhd@gmail.com'  variant="outlined" />
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
                }}  htmlFor="name">Phone Number</InputLabel>
                <PhoneInput
            containerClass="w-[432px] h-[40px] rounded-[24px] flex items-center" // Adjusted to match input width and height
            country={'us'}
            value={phone}
            onChange={phone => setPhone(phone)}
            inputStyle={{
                borderRadius: "24px",
                width: '432px',
                height: '40px',
                padding: '12px 76px',
                border: '0.5px solid',
               
            }}
            dropdownClass='w-[400px]'
            buttonStyle={{
                borderRadius: "24px 0 0 24px", // Ensuring it matches the rounded corners of the input
                height: '40px',
                border: '0.5px solid',
                borderRight: 'none', // Remove the right border to blend with the input
                padding: '0 12px',
               
            }}
        />
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
   </Box>
  )
}

export default Profile