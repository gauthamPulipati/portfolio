import React from "react";
import SocialIcons from "./socialIcons";

const styles ={
    footerfull:{
        backgroundColor:'#000101'
    }
}

function Footer(){
    return(
        <React.Fragment style={styles.footerfull}>
            <SocialIcons icontype='light' />
        </React.Fragment>
    )
}

export default Footer