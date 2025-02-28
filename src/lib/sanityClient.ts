import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: import.meta.env.SANITY_API_VERSION,
  useCdn: false, // Désactivez le CDN pour utiliser le token
  token: import.meta.env.SANITY_TOKEN, // Utilisez une variable d'environnement
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}

export async function getProjets() {
  const query = '*[_type == "project"]';
  const projets = await client.fetch(query);
  return projets;
}