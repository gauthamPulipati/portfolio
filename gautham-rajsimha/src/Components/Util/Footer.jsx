import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialIcons from "./socialIcons";

const styles = {
    mainstyle: {
        backgroundColor: 'black',
        borderTopStyle: 'solid',
        borderTopColor: '#05cbcb'
    },
    copyright: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',    
        color: '#05cbcb',
        fontWeight: 'bold',
        fontSize: '18px',
        fontFamily: 'Andale Mono, monospace',
        paddingBottom:'30px'
    },
    contactme: {
        display:'flex',
        justifyContent:'right',
        alignItems:'center',    
        color: '#05cbcb',
        fontWeight: 'bold',
        fontSize: '18px',
        fontFamily: 'Andale Mono, monospace'
    },
    contacttext: {
        textDecoration:'none',
        paddingLeft:'50px',
        display:'flex',
        justifyContent:'left',
        alignItems:'center',    
        color: '#05cbcb',
        fontWeight: 'bold',
        fontSize: '18px',
        fontFamily: 'Andale Mono, monospace'
    }
}

function Footer() {
    return (
        <Box style={styles.mainstyle}>
            <Grid container>
                <Grid style={styles.contactme} item xs={12} md={4}>
                    Contact Info.
                </Grid>
                <Grid style={styles.contacttext} item xs={12} md={3}>
                    <div>617 838 4557</div>
                    <a style={styles.contacttext} href = "mailto:pulipati.g@northeastern.com">EMAIL ME</a>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SocialIcons icontype='light' />
                </Grid>
                <Grid item xs={1} md={1}>
                    <span style={{ visibility: 'hidden' }}>sjhfg</span>
                </Grid>
                <Grid style={styles.copyright} item xs={12} md={12}>
                    Copyright &#169; 2021 by Gautham Rajsimha Pulipati
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer