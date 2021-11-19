import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SkillsBasic from "./SkillsBasic";
import Trait from "../Traits";
import WorkBasic from "./WorkBasic";
import SocialIcons from "../Util/socialIcons";

const pyth ='python.jpg'
const styles = {
    prename: {
        fontSize: '60px',
        fontFamily: 'Andale Mono, monospace',
        paddingTop: '250px',
        color: '#000101'
    },
    name: {
        fontSize: '70px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        color: '#000101'

    },
    desc: {
        fontSize: '50px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        paddingTop: '50px',
        color: '#000101'
    },
    sidedesc: {
        fontSize: '20px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold'
    },
    sidetitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '30px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold'
    },
    whatdotitle: {
        paddingTop: '70px',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '50px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        height: 'auto'
    },
    
    
    iconimage:{
        height:'85%',
        width:'90%'
    },
    seemore:{
        display: 'flex',
        justifyContent: 'right',
        fontSize: '20px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold'
    },
    skillsimgs:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'85%',
        width:'90%',
        backgroundImage:`url('images/icons/python.jpg')`,
        backgroundSize:'100% 100%'
    },
    skillstext:{
        visibility:'hidden'
    }
}

function About() {
    const mypic = 'mypic.jpg'
    const [skillno, setSkillno] = useState(-1)
    let trans={}
    skillno=== -1
    ? trans={backgroundColor:'red'}
    : trans={backgroundColor:'green'}

    return (
        <Box sx={{ flexGrow: 1, color: 'black' }}>
            <Grid container spacing={2} >
                <Grid item xs={12} style={{ paddingBottom: '80px' }}>
                    <div style={styles.prename}>I'm</div>
                    <div style={styles.name}>GAUTHAM RAJSIMHA</div>
                    <div style={styles.name}>PULIPATI</div>
                    <div style={styles.desc}>Full Stack Developer</div>
                    <SocialIcons />
                </Grid>
                <Grid item xs={12} md={5}
                    style={{paddingTop:'30px', backgroundColor: '#179696', backgroundImage: 'linear-gradient(to right, #027777, #02ffff)'}}
                >
                    <div><img src={process.env.PUBLIC_URL + '/whoami.jpg'} width='100%'/></div>
                </Grid>
                <Grid item xs={12} md={7}
                    style={{
                        paddingTop:'10px',
                        backgroundColor: '#179696',
                        backgroundImage: 'linear-gradient(to right,  #02ffff, #027777)'
                    }}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidetitle}>Who Am I?</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>Graduate Student at Northeastern Univeristy</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>Major in Information Systems</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>Student Success Guide at Northeastern University</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>Former Software Engineer at Larsen and Toubro Infotech</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>B.Tech in Computer Science at National Institute of Technology Warangal</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>Lives in Boston, Massachusetts</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={<span style={styles.sidedesc}>From Hyderabad, India</span>} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid style={styles.whatdotitle} item xs={12}>
                    I'M GOOD AT
                </Grid>
                <SkillsBasic />
                
                <Grid style={styles.whatdotitle} item xs={12}>
                    MY WORK
                </Grid>
                <WorkBasic />

                <Grid style={styles.whatdotitle} item xs={12}>
                    MY BEST TRAITS
                </Grid>
                <Trait />
            </Grid>
        </Box>
    )
}

export default About