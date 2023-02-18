import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: '6kp3b61o',
    dataset: 'production',  
    useCdn: true,
    apiVersion: '2021-03-25',
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
    return builder.image(source)
}
//Run this command in the terminal to get the projectId and dataset:
//sanity projects list
//sanity cors add http://localhost:3000
export default client ;