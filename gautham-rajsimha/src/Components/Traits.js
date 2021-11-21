import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const styles = {
    creativetext1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '490px',
        fontSize: '30px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        backgroundColor: '#030606',
        color: 'white',
        borderRadius: '1%',
        paddingLeft: '30px'
    },
    creativetext2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '500px',
        fontSize: '30px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        backgroundColor: '#030606',
        color: 'white',
        borderRadius: '1%',
        paddingLeft: '30px'
    },
    creativetext3: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '340px',
        fontSize: '30px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        backgroundColor: '#030606',
        color: 'white',
        borderRadius: '1%',
        paddingLeft: '30px'
    },
    growthimg: {
        width: '100%',
        borderRadius: '1%',
        height: 'auto'
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
                        image={process.env.PUBLIC_URL + '/creative.jpg'}
                        alt="green iguana"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
                <div style={styles.creativetext1}>I dive into my inner pool of knowledge and insight to populate my mind with unique and elegant solutions</div>
            </Grid>
            <Grid item xs={12} md={6} style={{ height: '100%s' }}>
                <div style={styles.creativetext2}>When you go from fixed mindset to growth mindset, a new world of possibilities open up</div>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={process.env.PUBLIC_URL + '/growth.jpeg'} style={styles.growthimg} />
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={process.env.PUBLIC_URL + '/team.jpg'} style={styles.growthimg} />
            </Grid>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
                <div style={styles.creativetext3}>The way to achieve your own success is to be willing to help somebody else get to it first</div>
            </Grid>
        </React.Fragment>
    )
}

export default Trait