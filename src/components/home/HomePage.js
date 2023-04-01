import React, { Fragment, useEffect, useState} from "react";
//MUI Components
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//Images or Logo
// import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
//Components
// import CardContents from "./Card";
// import Search from './Search'
//Axios for API call
import axios from "axios";


const Home = () => {
    const [apiData, setApiData] = useState([])
    const [streamingContent, setStreamingContent] = useState([])
    
    useEffect(()=>{
        ApiContentCall()
    },[])

    const ApiContentCall = () =>{
        axios.get('streamingContent.json')
            .then((response) => {
                const apiResponse = response.data.entries
                setApiData(apiResponse)
                setStreamingContent(apiResponse)
            }
        )
    }

    const filterByMovieSerieOrYear = (inputData) =>{ 
        const {
            nativeEvent:{
                target:{
                    value
                }
            }
        } = inputData

        const inputFilter = apiData.filter( contentType => {
            return contentType.title.toLowerCase().includes(value.toLowerCase()) || String(contentType.releaseYear).includes(value.toLowerCase())
        })

        setStreamingContent(inputFilter)
    }

    return(
        <Fragment>
            <Grid container sx={{ justifyContent: 'center', marginTop: '50px'}}>
                <Grid item >
                    <img
                        sx={{ justifyContent: 'center'}}
                        width={'120'}
                        // src={friendlyKittyIcon}
                        alt={'kitty'}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={9}>
                    <Grid container spacing={2}>
                        {
                            streamingContent.map((singleContent,index) =>{
                                return(
                                    <Grid item key={index} lg={3} xs={12} md={4} sm={12}>
                                        <h1>Hola</h1>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Home