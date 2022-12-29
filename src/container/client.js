import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// here is where the client specifies the API version whih helps fix bugs and features
export const client = sanityClient({
    //projectID and token from sanity backend manager
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
//allows you to crop pictures how you want it