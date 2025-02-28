import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'buq6r67e',
  dataset: 'production',
  apiVersion: '2025-02-27',
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