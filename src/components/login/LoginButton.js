import React, { Fragment } from "react";
//MUI Components
import Button from '@mui/material/Button';
//Auth0
import { useAuth0 } from '@auth0/auth0-react'
import { hover } from "@testing-library/user-event/dist/hover";

const LoginButton = () =>{
    const {loginWithRedirect} = useAuth0()

    return (
        <Fragment>
            <Button 
                sx={{m:2, backgroundColor: '#ffd100'}}
                variant="contained" 
                onClick={() => loginWithRedirect()}>Usar otra cuenta
            </Button>
        </Fragment>
    )
}

export default LoginButton