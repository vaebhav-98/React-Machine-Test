import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import Layout from '../components/Layout';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import DropdownInput from '../components/DropdownInput';

const TextAd = () => {
    const [headingFirst, setHeadingFirst] = useState('');
    const [headingSecond, setHeadingSecond] = useState('');
    const [description, setDescription] = useState('');
    const [landMarkImage, setLandMarkImage] = useState('');
    const [portMarkImage, setPortMarkImage] = useState('');
    const [squareMarkImage, setSquareMarkImage] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (
        <Layout>
            <Box
                sx={{
                    border: '1px solid #bdbdbd',
                    borderRadius: 1,
                    padding: 2
                }}
            >
                <Typography variant="h6" color={'#424242'} >Create Text & Media</Typography>
                <Grid container rowSpacing={2} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <Stack direction={'column'} gap={2}>
                                    <TextInput
                                        label="Heading 01"
                                        placeholder='Add a heading that would make users interested'
                                        value={headingFirst}
                                        // multiline={true}
                                        onChange={(e) => setHeadingFirst(e.target.value)}
                                    />
                                    <TextInput
                                        label="Heading 02"
                                        placeholder='Add a heading that would make users interested'
                                        value={headingSecond}
                                        // multiline={true}
                                        onChange={(e) => setHeadingSecond(e.target.value)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextInput
                                    label="Description 01"
                                    placeholder="Add primary text to help users understand more about your products, services or offers"
                                    value={description}
                                    multiline={true}
                                    rows={4.5}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextInput
                            label="Landscape Marketing Image (1.9:1)"
                            placeholder='Add the URL of the image you want to use for the ad'
                            value={landMarkImage}
                            onChange={(e) => setLandMarkImage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextInput
                            label="Portrait Marketing Image (4:5)"
                            placeholder='Add the URL of the image you want to use for the ad'
                            value={portMarkImage}
                            onChange={(e) => setPortMarkImage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextInput
                            label="Square Marketing Image (1:1)"
                            placeholder='Add the URL of the image you want to use for the ad'
                            value={squareMarkImage}
                            onChange={(e) => setSquareMarkImage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextInput
                            label="Video URL"
                            placeholder='Add the URL of the video you want to use for the ad'
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            label="Business Name"
                            placeholder='Add your business name'
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* <TextInput
                            label="Button Label"
                            placeholder='Select a label that best suits your ad'
                            value={buttonLabel}
                            onChange={(e) => setButtonLabel(e.target.value)}
                        /> */}

                        <DropdownInput
                        data = {names}
                        />


                    </Grid>
                    <Grid item xs={12}>
                        <TextInput
                            label="Website URL"
                            placeholder='Add the URL of the landing page you want to redirect users to'
                            value={websiteUrl}
                            onChange={(e) => setWebsiteUrl(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} columnGap={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button variant="outlined" disableElevation >
                            Back
                        </Button>
                        <Button variant="contained" disableElevation >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default TextAd