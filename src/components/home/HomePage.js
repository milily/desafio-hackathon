import React, { Fragment, useEffect, useState} from "react";
//MUI Components
import Grid from '@mui/material/Grid';
import ChartByWeeks from "../charts/ChartByWeeks";
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
            <h2 sx={{ display: 'flex', justifyContent: 'center'}}>Gráfico Estado de ánimo por semana</h2>
            <Grid container sx={{ justifyContent: 'center', marginTop: '50px'}}>
            </Grid>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid className="chartparent">
                            <ChartByWeeks 
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Home