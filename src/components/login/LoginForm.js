import React from "react";
//MUI Components
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
//Auth0
import { useAuth0 } from '@auth0/auth0-react'

const LoginForm = () => {
    const {loginWithRedirect} = useAuth0()
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      }; 
    return(
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { display: 'flex', m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off">
            <TextField 
            id="outlined-basic" 
            label="Usuario" 
            variant="outlined" 
            sx={{display: 'flex'}}/>
            <FormControl 
                sx={{  display: 'flex', m: 1, width: '25ch' }} 
                variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
              <Button 
                sx={{mt:2, backgroundColor: '#ffd100', display: 'flex', justifyContent: 'center', justifyItems: 'center'}}
                variant="contained">Iniciar Sesión
              </Button>
              <Button 
                sx={{mt:2, backgroundColor: '#ffd100', display: 'flex', justifyContent: 'center', justifyItems: 'center'}}
                variant="contained" onClick={() => loginWithRedirect()}>Usar otra cuenta
              </Button>
            </FormControl>
        </Box>
    )
}

export default LoginForm