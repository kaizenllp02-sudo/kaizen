import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration using environment variables
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: '2023-05-03',
})

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source)
}

// GROQ queries for blog posts
export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  mainImage,
  publishedAt,
  excerpt,
  author->{
    name,
    image
  },
  categories[]->
}`

export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc)`