import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        siteUrl
        defaultDescription: description
        image
      }
    }
  }
`;

const Seo = (props) => {
  const { title, description } = props;

  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    defaultDescription,
    image,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (<meta property="og:description" content={seo.description} />)}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (<meta name="twitter:description" content={seo.description} />)}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Seo.defaultProps = {
  title: null,
  description: null,
};
