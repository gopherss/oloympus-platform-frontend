import { facebookProvider, googleProvider, twitterProvider } from "../utils/firebaseConfig";

export const SOCIALMEDIABUTTONS = [
    {
        label: 'Google',
        src: 'https://www.svgrepo.com/show/448227/google.svg',
        alt: 'Google Logo',
        provider: googleProvider
    },
    {
        label: 'Facebook',
        src: 'https://www.svgrepo.com/show/489934/facebook.svg',
        alt: 'Facebook Logo',
        provider: facebookProvider
    },
    // {
    //     label: 'Email',
    //     src: 'https://www.svgrepo.com/show/452213/gmail.svg',
    //     alt: 'Microsoft Logo',
    //     provider: emailProvider
    // },
    {
        label: 'Twitter',
        src: 'https://www.svgrepo.com/show/452123/twitter.svg',
        alt: 'Twitter Logo',
        provider: twitterProvider
    },
];

export const MENUITEMS = [
    { path: '/login', label: 'Login', icon: 'https://www.svgrepo.com/show/109716/login.svg' },
    { path: '/register', label: 'Register', icon: 'https://www.svgrepo.com/show/513326/pencil.svg' },
    { path: '/profile', label: 'Profile', icon: 'https://www.svgrepo.com/show/284827/profile-user.svg' },
    { path: '/settings', label: 'Settings', icon: 'https://www.svgrepo.com/show/382709/settings-cog-options-config-configure-gear-engineering.svg' },
    { path: '/', label: 'Sign out', icon: 'https://www.svgrepo.com/show/243822/logout.svg' },
];



export const NAVIGATION = [
    { name: 'Olympus', href: '/olympus', current: false },
    { name: 'Comunidades', href: '/community', current: false },
    { name: 'Personas', href: '/people', current: false },
    { name: 'Buscar', href: '/search', current: false },
    { name: 'Premium', href: '/premium', current: false },
    { name: 'Contacto', href: '/contact', current: false },
];


export const LINKS_HOME = [
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/395714/email-message-mail-envelope.svg",
        alt: "img email"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/217753/github.svg",
        alt: "img github"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/475636/bankin-color.svg",
        alt: "img bankin"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/475678/shopify-color.svg",
        alt: "img shopify"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/475643/dribbble-color.svg",
        alt: "img dribbble"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/299422/twitter.svg",
        alt: "img twitter"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/475661/linkedin-color.svg",
        alt: "img linkedin"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/475647/facebook-color.svg",
        alt: "img facebook"
    }
];


export const LINKS_COMUNITIES = [
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/448224/facebook.svg",
        alt: "img email"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/10337/whatsapp.svg",
        alt: "img github"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/303292/telegram-logo.svg",
        alt: "img bankin"
    },
    {
        href: "#_",
        imgSrc: "https://www.svgrepo.com/show/475689/twitter-color.svg",
        alt: "img shopify"
    },
];
