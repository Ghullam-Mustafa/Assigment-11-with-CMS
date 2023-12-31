import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "lrfdeurg",
  dataset: "production",
  apiVersion: "2023-09-19",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}

export default client;
