import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SeeMoreButton from "../Util/SeeMoreButton";

const styles = {

}

function SkillsBasic() {

    const [hovered, setHovered] = useState(-1)

    let javastyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '90%',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/java.jpg')`,
        backgroundSize: '100% 100%',
        borderRadius:'2%'
    }
    let pythonstyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '90%',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/python.jpg')`,
        backgroundSize: '100% 100%',
        borderRadius:'2%'
    }
    let jsstyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '90%',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/javascript.png')`,
        backgroundSize: '100% 100%',
        borderRadius:'2%'
    }
    let reactstyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '90%',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/react.gif')`,
        backgroundSize: '100% 100%',
        borderRadius:'2%'
    }
    let springstyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '90%',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/spring.jpg')`,
        backgroundSize: '100% 100%',
        borderRadius:'2%'
    }
    let mlstyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '90%',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/ml.jpg')`,
        backgroundSize: '100% 100%',
        borderRadius:'2%'
    }

    let javatext = {
        visibility: 'hidden'
    }
    let pythontext = {
        visibility: 'hidden'
    }
    let jstext = {
        visibility: 'hidden'
    }

    let reacttext = {
        visibility: 'hidden'
    }
    let springtext = {
        visibility: 'hidden'
    }
    let mltext = {
        visibility: 'hidden'
    }

    

    if (hovered == 1) {
        javastyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/java.jpg')`,
            backgroundSize: '100% 100%',
            opacity: '0.7',
            borderRadius:'2%'
        }
        javatext = {
            visibility: 'visible',
            backgroundColor: '000101',
            fontSize: '50px',
            fontFamily: 'Andale Mono, monospace',
            fontWeight: 'bold',
            color: 'white'
        }
    }
    else if (hovered == -1) {
        javastyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/java.jpg')`,
            backgroundSize: '100% 100%',
            borderRadius:'2%'
        }
        javatext = {
            visibility: 'hidden'
        }
    }
    else if (hovered == 2) {
        pythonstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/python.jpg')`,
            backgroundSize: '100% 100%',
            opacity: '0.8',
            borderRadius:'2%'
        }
        pythontext = {
            visibility: 'visible',
            fontSize: '50px',
            fontFamily: 'Andale Mono, monospace',
            fontWeight: 'bold',
            color: 'black'
        }

    }
    else if (hovered == -2) {
        pythonstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/python.jpg')`,
            backgroundSize: '100% 100%',
            borderRadius:'2%'
        }
        pythontext = {
            visibility: 'hidden'
        }

    }
    else if (hovered == 3) {
        jsstyle = {
            display: 'flex',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/javascript.png')`,
            backgroundSize: '100% 100%',
            opacity: '0.8',
            borderRadius:'2%'
        }
        jstext = {
            visibility: 'visible',
            fontSize: '50px',
            fontFamily: 'Andale Mono, monospace',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if (hovered == -3) {
        jsstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/javascript.png')`,
            backgroundSize: '100% 100%',
            borderRadius:'2%'
        }
        jstext = {
            visibility: 'hidden',

        }
    }
    else if (hovered == 4) {
        reactstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/react.gif')`,
            backgroundSize: '100% 100%',
            opacity: '0.8',
            borderRadius:'2%'
        }
        reacttext = {
            visibility: 'visible',
            fontSize: '50px',
            fontFamily: 'Andale Mono, monospace',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if (hovered == -4) {
        reactstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/react.gif')`,
            backgroundSize: '100% 100%',
            borderRadius:'2%'
        }
        reacttext = {
            visibility: 'hidden'
        }
    }
    else if (hovered == 5) {
        springstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/spring.jpg')`,
            backgroundSize: '100% 100%',
            opacity: '0.8',
            borderRadius:'2%'
        }
        springtext = {
            visibility: 'visible',
            fontSize: '50px',
            fontFamily: 'Andale Mono, monospace',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if (hovered == -5) {
        springstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/spring.jpg)`,
            backgroundSize: '100% 100%',
            opacity:'0',
            borderRadius:'2%'
        }
        springtext = {
            visibility: 'hidden'
        }
    }
    else if (hovered == 6) {
        mlstyle = {
            display: 'flex',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/ml.jpg')`,
            backgroundSize: '100% 100%',
            opacity: '0.9',
            borderRadius:'2%'
        }
        mltext = {
            visibility: 'hidden',
            fontSize: '50px',
            fontFamily: 'Andale Mono, monospace',
            fontWeight: 'bold',
            color: 'black'
        }
    }
    else if (hovered == -6) {
        mlstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '90%',
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/ml.jpg')`,
            backgroundSize: '100% 100%',
            borderRadius:'2%'
        }
        mltext = {
            visibility: 'hidden'
        }
    }

    return (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <div style={javastyle} onMouseOver={() => setHovered(1)} onMouseOut={() => setHovered(-1)}><span style={javatext}>Java</span></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div style={pythonstyle} onMouseOver={() => setHovered(2)} onMouseOut={() => setHovered(-2)}><span style={pythontext}>PYTHON</span></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div style={jsstyle} onMouseOver={() => setHovered(3)} onMouseOut={() => setHovered(-3)}><span style={jstext}>JavaScript</span></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div style={reactstyle} onMouseOver={() => setHovered(4)} onMouseOut={() => setHovered(-4)}><span style={reacttext}>React</span></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div style={springstyle} onMouseOver={() => setHovered(5)} onMouseOut={() => setHovered(-5)}><span style={springtext}>Spring</span></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div style={mlstyle} onMouseOver={() => setHovered(6)} onMouseOut={() => setHovered(-6)}><span style={mltext}>ML</span></div>
            </Grid>
            <SeeMoreButton />
        </React.Fragment>
    )
}

export default SkillsBasic