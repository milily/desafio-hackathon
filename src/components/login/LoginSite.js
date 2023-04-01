import React, { Fragment } from "react";
//Components
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";
//Images or Logo
import apiuxLogo from './../../assets/images/logoapiux.png'
//MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Login = () => {

    return(
        <div id='container'>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item >
                    <img
                        width={'300'}
                        src={apiuxLogo}
                        alt={'kitty'}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <Typography component="div">
                        <Box sx={{ fontFamily: 'Monospace', textAlign: 'center', fontSize: '5rem', fontWeight: 'bold', lineHeight: 'normal', marginBottom: 5, color: '#3e3f3e' }}>
                            HappyMe
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <LoginForm />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    {<LoginButton />}
                </Grid>
            </Grid>
        </div>
    )
}

export default Login