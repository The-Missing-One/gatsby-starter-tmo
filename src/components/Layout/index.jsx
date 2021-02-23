import React from 'react';
import PropTypes from 'prop-types';

import Seo from '../Seo';
import MainNav from '../MainNav';

const Layout = (props) => {
  const {
    children, title, description, image,
  } = props;

  return (
    <main>
      <Seo title={title} description={description} image={image} />
      <MainNav />
      <section className="container mx-auto">
        {children}
      </section>
    </main>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

Layout.defaultProps = {
  description: null,
  image: null,
};
