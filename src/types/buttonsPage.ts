import { emailProvider, facebookProvider, googleProvider, twitterProvider } from "../utils/firebaseConfig";

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
    {
        label: 'Email',
        src: 'https://www.svgrepo.com/show/452213/gmail.svg',
        alt: 'Microsoft Logo',
        provider: emailProvider
    },
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
    { name: 'Contacto', href: '/contact', current: false },
    { name: 'Planes', href: '/plans', current: false },
    { name: 'Opciones', href: '/options', current: false },
];