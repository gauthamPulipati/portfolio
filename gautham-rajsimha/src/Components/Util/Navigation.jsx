import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { propTypes } from "react-bootstrap/esm/Image";

const styles = {
    centerstyle: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#000101',
        paddingTop: '10px',
        paddingBottom: '10px',
        position:'fixed',
        width:'100%'

    },
    tabstyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        fontFamily: 'Andale Mono, monospace'
    },
    tabstyleright: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        fontFamily: 'Andale Mono, monospace',
        display:'flex',
        justifyContent:'right'
    }
}

function Navigation(props) {
    const [selectedtab, setSelectedtab] = useState(0)
    const handleChange = (event, newValue) => {
        setSelectedtab(newValue)
        props.assignSelected(newValue)
    }

    return (
        <Box style={styles.centerstyle} >
            <Tabs
                onChange={handleChange}
                value={selectedtab}
                aria-label="Tabs where selection follows focus"
                selectionFollowsFocus
            >
                <Tab label={<span style={styles.tabstyle}>About</span>} />
                <Tab label={<span style={styles.tabstyle}>Skills</span>} />
                <Tab label={<span style={styles.tabstyle}>Work</span>} />
                <Tab label={<span style={styles.tabstyle}>Contact</span>} />
            </Tabs>
        </Box>
    )
}

export default Navigation