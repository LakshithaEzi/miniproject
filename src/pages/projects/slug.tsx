import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { sanityClient } from '../../Sanity';

export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type == "project"] { slug }';
  const projects = await sanityClient.fetch(query);
  const paths = projects.map((project: any) => ({
    params: { slug: project.slug.current },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await sanityClient.fetch(query, { slug: params?.slug });
  return { props: { project } };
};

const ProjectPage: NextPage<{ project: any }> = ({ project }) => (
  <div>
    <Head>
      <title>{project.title}</title>
      <meta name="description" content={project.description} />
    </Head>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    {project.image && <img src={project.image.asset.url} alt={project.title} />}
    <a href={project.link}>Visit Project</a>
  </div>
);

export default ProjectPage;
