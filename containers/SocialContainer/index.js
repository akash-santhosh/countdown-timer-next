import React from "react";
import LinkItem from "../../components/LinkItem";
import WebIcon from '/public/icons/icon-web.svg';
import GitlabIcon from '/public/icons/icon-gitlab.svg';
import GithubIcon from '/public/icons/icon-github.svg';
import DiscordIcon from '/public/icons/icon-discord.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import LinkedinIcon from '/public/icons/icon-linkedin.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

const socials = [
    {
        name: 'Web',
        icon: <WebIcon />,
        href: 'https://aks.one',
    },
    {
        name: 'Twitter',
        icon: <TwitterIcon />,
        href: 'https://twitter.com/_akashsanthosh',
    },
    {
        name: 'Linkedin',
        icon: <LinkedinIcon />,
        href: 'https://linkedin.com/in/akashsanthosh',
    },
    {
        name: 'Instagram',
        icon: <InstagramIcon />,
        href: 'https://instagram.com/akash._.santhosh',
    },
    {
        name: 'Github',
        icon: <GithubIcon />,
        href: 'https://github.com/akash-santhosh',
    },
    {
        name: 'Gitlab',
        icon: <GitlabIcon />,
        href: 'https://gitlab.com/akash-santhosh',
    }, 
    {
        name: 'Discord',
        icon: <DiscordIcon />,
        href: 'https://discord.aks.one',
    },
];

const SocialContainer = () => {
    return (
        <>
            {socials?.map(({icon, ...props}, index) => (
                <LinkItem {...props}>
                    {icon}
                </LinkItem>
            ))}
        </>
    );
};

export default SocialContainer;
