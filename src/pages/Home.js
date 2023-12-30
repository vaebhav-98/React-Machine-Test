import React from 'react'
import Layout from '../components/Layout';
import TextInput from '../components/TextInput';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <Layout>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={3}>
                    <TextInput 
                    
                    />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Home