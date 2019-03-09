import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaSpotify } from 'react-icons/fa';
import { useStaticQuery, graphql } from "gatsby"

import SocialLink from './socialLink';

const Footer = () => {

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    social {
                        twitter
                        github
                        spotify
                    }
                }
                }
            }
        `
    )

    const github = site.siteMetadata.social.github;
    const twitter = site.siteMetadata.social.twitter;
    const spotify = site.siteMetadata.social.spotify;

    const linksStyle = {
        textAlign: 'center'
    }

    const iconStyle = {
        fontSize: '30px'
    }

    const messageStyle = {
        textAlign: 'center',
        boxSizing: 'borderBox',
        height: '30px',
        margin: '70px 0 10px'
    }

    const blankIcon = <span>follow me!</span>;
    const githubIcon = <FaGithub style={iconStyle} />;
    const twitterIcon = <FaTwitter style={iconStyle} />;
    const spotifyIcon = <FaSpotify style={iconStyle} />;

    const [state, setState] = useState({
        icon: blankIcon
    });

    const handleIcons = (iconComponent) => {
        setState({
            icon: iconComponent
        });
    }

    const handleNoIcon = () => {
        setState({
            icon: blankIcon
        });
    }

    return (
        <div>
            <div style={messageStyle}>
                {state.icon}
            </div>
            <div style={linksStyle}>
                <SocialLink
                    to={`https://github.com/${github}`}
                    handleIcons={handleIcons.bind(this, githubIcon)}
                    handleNoIcon={handleNoIcon}
                >
                    github
                    </SocialLink>•
                    <SocialLink
                    to={`https://twitter.com/${twitter}`}
                    handleIcons={handleIcons.bind(this, twitterIcon)}
                    handleNoIcon={handleNoIcon}
                >
                    twitter
                    </SocialLink>•
                    <SocialLink
                    to={`https://open.spotify.com/user/${spotify}`}
                    handleIcons={handleIcons.bind(this, spotifyIcon)}
                    handleNoIcon={handleNoIcon}
                >
                    spotify
                    </SocialLink>
            </div>
        </div>
    );
}

export default Footer;