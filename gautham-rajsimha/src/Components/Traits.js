import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const styles = {
    creativetext: {
        display: 'flex',
        justifyContent: 'center',
        height: '550px',
        fontSize: '30px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        backgroundColor: '#030606',
        color: 'white',
        borderRadius: '1%',
        paddingTop: '200px',
        paddingLeft: '30px'
    },
    growthimg: {
        width: '100%',
        height: '96%'
    },
    cardcolor: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        height: 'auto',
        backgroundColor: '#030606'
    }
}

function Trait() {

    return (
        <React.Fragment>
            <Grid item xs={12} md={6}>
                <Card style={{ backgroundColor: '#030606', color: 'white' }}>
                    <CardHeader title={<span style={styles.cardcolor}>Creative</span>} />
                    <CardMedia
                        component="img"
                        image="creative.jpg"
                        alt="green iguana"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
                <div style={styles.creativetext}>I dive into my inner pool of knowledge and insight to populate my mind with unique and elegant solutions</div>
            </Grid>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
                <div style={styles.creativetext}>When you go from fixed mindset to growth mindset, a new world of possibilities open up</div>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src='growth.jpeg' style={styles.growthimg} />
            </Grid>
        </React.Fragment>
    )
}

export default Trait