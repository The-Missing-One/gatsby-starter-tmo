import React from 'react';
import { Link } from 'gatsby';

const MainNav = () => (
  <nav>
    {[
      {
        route: '/',
        title: 'Home',
      },
    ].map((link) => (
      <Link
        className="block mt-4 text-xl font-bold text-gray-700 no-underline lg:inline-block lg:mt-0 lg:ml-6 xl:text-2xl hover:text-gray-600"
        key={link.title}
        to={link.route}
      >
        {link.title}
      </Link>
    ))}
  </nav>
);

export default MainNav;
