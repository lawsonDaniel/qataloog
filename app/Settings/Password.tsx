import { Box, Button, IconButton, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';

function Password() {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showoldPassword, setShowoldPassword] = React.useState(false);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Password is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password does not match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // handle form submission
    },
  });

  const renderError = (error:string | undefined) => {
    if (error) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'red' }}>
          <Image src="/alert-02.svg" alt="error" width={20} height={20} />
          <Typography sx={{
            fontSize:'12px'
          }}>{error}</Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0" }}>
        <InputLabel sx={{
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          textAlign: 'left',
          color: '#323233'
        }} htmlFor="currentpassword">Current Password</InputLabel>
        <TextField
          id="oldPassword"
          name="oldPassword"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
          helperText={formik.touched.oldPassword ? renderError(formik.errors.oldPassword) : ''}
          type={showCurrentPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowCurrentPassword((show) => !show)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showCurrentPassword ? <VisibilityOff sx={{ color: "#F14119" }} /> : <Visibility sx={{ color: "#F14119" }} />}
            </IconButton>,
            style: {
              borderRadius: "24px",
              width: '432px',
              height: '40px',
              padding: '12px 24px 12px 24px',
              border: '0.5px',
            }
          }}
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0" }}>
        <InputLabel sx={{
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          textAlign: 'left',
          color: '#323233'
        }} htmlFor="password">New Password</InputLabel>
        <TextField
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password ? renderError(formik.errors.password) : ''}
          type={showoldPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowoldPassword((show) => !show)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showoldPassword ? <VisibilityOff sx={{ color: "#F14119" }} /> : <Visibility sx={{ color: "#F14119" }} />}
            </IconButton>,
            style: {
              borderRadius: "24px",
              width: '432px',
              height: '40px',
              padding: '12px 24px 12px 24px',
              border: '0.5px',
            }
          }}
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0" }}>
        <InputLabel sx={{
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          textAlign: 'left',
          color: '#323233'
        }} htmlFor="confirmPassword">Confirm New Password</InputLabel>
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword ? renderError(formik.errors.confirmPassword) : ''}
          type={showOldPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowOldPassword((show) => !show)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showOldPassword ? <VisibilityOff sx={{ color: "#F14119" }} /> : <Visibility sx={{ color: "#F14119" }} />}
            </IconButton>,
            style: {
              borderRadius: "24px",
              width: '432px',
              height: '40px',
              padding: '12px 24px 12px 24px',
              border: '0.5px',
            }
          }}
          variant="outlined"
        />
      </Box>
      <Button type="submit" sx={{
        color: '#FAFAFF',
        background: "#F14119",
        width: '204px',
        height: '48px',
        padding: '12px 24px 12px 24px',
        borderRadius: '48px',
        fontSize: '13px',
        lineHeight: '24px',
        '&:hover': {
          color: '#FAFAFF',
          background: "#F14119",
        }
      }}>Update</Button>
    </Box>
  );
}

export default Password;
