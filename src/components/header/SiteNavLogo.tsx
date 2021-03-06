import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { css } from 'emotion';

import config from '../../website-config';

const SiteNavLogoStyles = css`
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}

const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/me-logo.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={({ logo }: SiteNavLogoProps) => (
      <Link className={`${SiteNavLogoStyles} site-nav-logo`} to="/">
        {logo ? <img src={logo.childImageSharp.fixed.src} alt={config.title} /> : config.title}
      </Link>
    )}
  />
);

export default SiteNavLogo;
