import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'your_project_id',  // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2023-09-20',  // Use the latest API version
  useCdn: true,
});
