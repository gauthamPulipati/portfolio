import React from "react";
import Grid from '@mui/material/Grid';
import { Button, Carousel } from "react-bootstrap";
import SeeMoreButton from "../Util/SeeMoreButton";

const styles ={
    darkhead:{
        fontSize: '40px',
        fontFamily: 'Andale Mono, monospace',
        color: '#000101',
        backgroundColor:'#08cbcb',
        opacity:'0.8'
    },
    darkdescription:{
        fontSize: '20px',
        fontFamily: 'Andale Mono, monospace',
        color: '#000101',
        backgroundColor:'#08cbcb',
        opacity:'0.8'
    },
    virushead:{
        fontSize: '40px',
        fontFamily: 'Andale Mono, monospace',
        color: '#000101',
        backgroundColor:'white',
        opacity:'0.8'
    },
    virusdescription:{
        fontSize: '20px',
        fontFamily: 'Andale Mono, monospace',
        color: '#000101',
        backgroundColor:'white',
        opacity:'0.8'
    },
    lighthead:{
        fontSize: '30px',
        fontFamily: 'Andale Mono, monospace',
        color: 'white',
        opacity:'0.8'
    },
    lightdescription:{
        fontSize: '15px',
        fontFamily: 'Andale Mono, monospace',
        color: 'white',
        opacity:'0.8'
    },
    image:{
        maxHeight:'600px',
        height:'auto'
    }
}

function WorkBasic() {
    return (
        <React.Fragment>
            <Grid item xs={12}>
            <Carousel>
            <Carousel.Item>
                    <img
                        style={styles.image}
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/workbasic/travel.png'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 ><span style={styles.darkhead}>TRAVEL FOOD and BLOG</span></h3>
                        <p ><span style={styles.darkdescription}>A webiste built on REACT (MERN stack)</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={styles.image}
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/workbasic/getchecked.png'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={styles.lighthead}>GET CHECKED</h3>
                        <p style={styles.lightdescription}> A Java swing application</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={styles.image}
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/workbasic/simulation.gif'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3><span style={styles.virushead}>Virus Simulator</span></h3>
                        <p><span style={styles.virusdescription}>Python application to simulate a virus based on given factors</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Grid>
            <SeeMoreButton />
        </React.Fragment>
    )
}

export default WorkBasic