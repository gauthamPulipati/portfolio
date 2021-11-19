import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function SeeMoreButton(){
    let seemorebtn = {
        fontSize: '15px',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        color: 'white',
        paddingRight:'10px'
    }
    let buttonoff={
        border:'0px solid #FFFF66',
        color:'#027979',
        backgroundColor:'#000101'
    }
    let buttonon={
        border:'1px solid #FFFF66',
        backgroundColor:'#027979',
        color:'#000101'
    }

    let seemoreimgsmall={
        width:'25px',
        height:'25px'
    }

    let seemoreimgbig={
        width:'35px',
        height:'35px'
    }

    let buttongrid={
        height:'60px',
        display:'flex',
        justifyContent:'right',
        marginRight:'40px'
    }

    const [seemoreimg, setSeemoreimg] = useState(seemoreimgsmall)
    const [buttoncolor, setButtonColor] = useState(buttonoff)
    return(
        <React.Fragment>
            <Grid 
            style={buttongrid}
            item xs={12}>

                <Button variant="contained" 
                style={buttoncolor}
                onMouseOver={()=> {
                    setSeemoreimg(seemoreimgbig)
                    setButtonColor(buttonon)
                }}
                onMouseOut={()=>{
                    setSeemoreimg(seemoreimgsmall)
                    setButtonColor(buttonoff)
                }}
                >
                    <span style={seemorebtn}>See More</span>
                    <img
                    style={seemoreimg}
                    src="https://img.icons8.com/pastel-glyph/64/ffffff/plus--v2.png" />
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default SeeMoreButton