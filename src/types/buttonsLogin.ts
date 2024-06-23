import { emailProvider, facebookProvider, githubProvider, googleProvider, twitterProvider } from "../utils/firebaseConfig";

export const buttons = [
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
        label: 'Github',
        src: 'https://www.svgrepo.com/show/353783/github-octocat.svg',
        alt: 'Github Logo',
        provider: githubProvider
    },
    {
        label: 'Twitter',
        src: 'https://www.svgrepo.com/show/452123/twitter.svg',
        alt: 'Twitter Logo',
        provider: twitterProvider
    },
];