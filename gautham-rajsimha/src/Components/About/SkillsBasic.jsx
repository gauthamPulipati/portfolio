import { Grid } from "@mui/material";
import {Box } from "@mui/system";
import React, {useState} from "react";



function SkillsBasic(){

    const [hover, setHover] = useState(0)

    let javaimg={
        color:'white',
        border:'1px solid black',
        backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/java.jpg')`,
        backgroundSize:'270px 270px',
        backgroundRepeat: 'no-repeat',
        borderRadius:'50%',
        margin: '15%'
    }
    let javatext={
        visibility:'hidden',
        padding:'min(45%,150px)'
    }

    let pythonimg={
        color:'white',
        border:'1px solid black',
        backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/python.jpg')`,
        backgroundSize:'270px 270px',
        backgroundRepeat: 'no-repeat',
        borderRadius:'50%',
        margin: '15%'
    }
    let pythontext={
        visibility:'hidden',
        padding:'min(45%,150px)'
    }

    let jsimg={
        color:'white',
        border:'1px solid black',
        backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/javascript.png')`,
        backgroundSize:'270px 270px',
        backgroundRepeat: 'no-repeat',
        borderRadius:'50%',
        margin: '15%'
    }
    let jstext={
        visibility:'hidden',
        padding:'min(45%,150px)'
    }

    let reactimg={
        color:'white',
        border:'1px solid black',
        backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/react1.gif')`,
        backgroundColor:'#242625',
        backgroundSize:'265px 265px',
        backgroundRepeat: 'no-repeat',
        borderRadius:'50%',
        margin: '15%'
    }
    let reacttext={
        visibility:'hidden',
        padding:'min(45%,150px)'
    }

    let springimg={
        color:'white',
        border:'1px solid black',
        backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/spring.jpg')`,
        backgroundSize:'270px 270px',
        backgroundRepeat: 'no-repeat',
        borderRadius:'50%',
        margin: '15%'
    }
    let springtext={
        visibility:'hidden',
        padding:'min(45%,150px)'
    }

    let mlimg={
        color:'white',
        border:'1px solid black',
        backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/ml.jpg')`,
        backgroundSize:'270px 270px',
        backgroundRepeat: 'no-repeat',
        borderRadius:'50%',
        margin: '15%'
    }
    let mltext={
        visibility:'hidden',
        padding:'min(45%,150px)'
    }

    if(hover === 1){
        javaimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/java.jpg')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%',
            opacity:'0.8'
        }
        javatext={
            visibility:'visible',
            padding:'min(41%,140px)',
            fontSize: '30px',
            fontFamily: 'Sans, Roboto, Lato',
            fontWeight: 'bold',
            color: 'white'
        }
    }
    else if(hover === -1){
        javaimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/java.jpg')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%'
        }
        javatext={
            visibility:'hidden',
            padding:'min(45%,150px)'
        }
    }

    else if(hover === 2){
        pythonimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/python.jpg')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%',
            opacity:'0.8'
        }
        pythontext={
            visibility:'visible',
            padding:'min(41%,150px)',
            paddingLeft:'min(30%,140px)',
            fontSize: '30px',
            fontFamily: 'Sans, Roboto, Lato',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if(hover === -2){
        pythonimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/python.jpg')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%'
        }
        pythontext={
            visibility:'hidden',
            padding:'min(45%,150px)'
        }
    }

    else if(hover === 3){
        jsimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/javascript.png')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'#ebd41c',
            borderRadius:'50%',
            margin: '15%',
            opacity:'0.8'
        }
        jstext={
            visibility:'visible',
            padding:'min(41%,150px)',
            paddingLeft:'min(15%,140px)',
            paddingTop:'min(21%,140px)',
            paddingBottom:'61%',
            fontSize: '30px',
            fontFamily: 'Sans, Roboto, Lato',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if(hover === -3){
        jsimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/javascript.png')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%'
        }
        jstext={
            visibility:'hidden',
            padding:'min(45%,150px)'
        }
    }

    else if(hover === 4){
        reactimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/react1.gif')`,
            backgroundColor:'#242625',
            backgroundSize:'265px 265px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%',
            opacity:'0.8'
        }
        reacttext={
            visibility:'visible',
            padding:'min(41%,150px)',
            paddingLeft:'min(30%,140px)',
            fontSize: '30px',
            fontFamily: 'Sans, Roboto, Lato',
            fontWeight: 'bold',
            color: 'white'
        }
    }
    else if(hover === -4){
        reactimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/react1.gif')`,
            backgroundColor:'#242625',
            backgroundSize:'265px 265px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%'
        }
        reacttext={
            visibility:'hidden',
            padding:'min(45%,150px)'
        }
    }

    else if(hover === 5){
        springimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/spring.jpg')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%',
            opacity:'0.8'
        }
        springtext={
            visibility:'visible',
            padding:'min(41%,150px)',
            paddingLeft:'min(30%,140px)',
            fontSize: '30px',
            fontFamily: 'Sans, Roboto, Lato',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if(hover === -5){
        springimg={
            color:'white',
            border:'1px solid black',
            backgroundImage:`url('${process.env.PUBLIC_URL}/images/icons/spring.jpg')`,
            backgroundSize:'270px 270px',
            backgroundRepeat: 'no-repeat',
            borderRadius:'50%',
            margin: '15%'
        }
        springtext={
            visibility:'hidden',
            padding:'min(45%,150px)'
        }
    }
    return(
        <React.Fragment>
            <Box sx={{ flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} >
                        <div onMouseOver={()=> setHover(1)} onMouseOut={()=> setHover(-1)} style={javaimg}><div style={javatext}>JAVA</div></div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onMouseOver={()=> setHover(2)} onMouseOut={()=> setHover(-2)} style={pythonimg}><div style={pythontext}>PYTHON</div></div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onMouseOver={()=> setHover(3)} onMouseOut={()=> setHover(-3)} style={jsimg}><div style={jstext}>JAVASCRIPT</div></div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onMouseOver={()=> setHover(4)} onMouseOut={()=> setHover(-4)} style={reactimg}><div style={reacttext}><span style={{backgroundColor:'black', padding:'5px', borderRadius:'10%'}}>REACT</span></div></div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onMouseOver={()=> setHover(5)} onMouseOut={()=> setHover(-5)} style={springimg}><div style={springtext}>Spring</div></div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onMouseOver={()=> setHover(6)} onMouseOut={()=> setHover(-6)} style={mlimg}><div style={mltext}>ML</div></div>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default SkillsBasic