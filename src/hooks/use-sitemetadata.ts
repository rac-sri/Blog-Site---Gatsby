import { graphql, useStaticQuery } from 'gatsby';

type dataObj = {
  siteMetadata: {
    title: string;
    description: string;
  };
};

const useSiteMetaData = (): dataObj => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
export default useSiteMetaData;
