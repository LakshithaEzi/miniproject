import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import ProjectList from '../components/ProjectList';
import { sanityClient } from '../Sanity';


export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await sanityClient.fetch(query);
  return { props: { projects } };
};

const HomePage: NextPage<{ projects: any[] }> = ({ projects }) => (
  <div>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="Dynamic portfolio showcasing projects" />
    </Head>
    <h1>Projects</h1>
    <ProjectList projects={projects} />
  </div>
);

export default HomePage;
