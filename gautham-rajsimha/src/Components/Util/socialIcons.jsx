import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons(props) {
    let linkedin = 'linkedin'
    let github = 'github'
    let instagram = 'instagram'
    let socialcontainer ='social-container'

    if(props.icontype==='light'){
        console.log('sgf')
        linkedin= 'linkedinlight'
        github = 'githublight'
        instagram = 'instagramlight'
        socialcontainer='social-container-left'

    }

    return (
        <React.Fragment >
            <div class={`${socialcontainer}`}>
                <a href="https://www.linkedin.com/in/gauthamrajsimha/" target='_blank'
                    className={`${linkedin} social`}>
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/gauthamPulipati" target='_blank'
                    className={`${github} social`}>
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.instagram.com/gautham_rajsimha/" target='_blank'
                    className={`${instagram} social`}>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
            </div>
        </React.Fragment>
    )
}

export default SocialIcons