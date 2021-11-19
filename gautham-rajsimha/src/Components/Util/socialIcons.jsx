import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons(props) {
    const [linkedin,setLinkedin] = useState('linkedin')
    const [github,setGithub] = useState('github')
    const [instagram,setInstagram] = useState('instagram')

    if(props.icontype==='light'){
        setLinkedin('linkedinlight')
        setGithub('githublight')
        setInstagram('instagramlight')
    }

    return (
        <React.Fragment >
            <div class="social-container">
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