import { Link } from 'gatsby';
import React from 'react';

export interface Props {
  crumbs?: { to?: string; title: string }[];
}

const Breadcrumbs = ({ crumbs = [] }: Props) => {
  const crumbList = crumbs.map((crumb, index) => {
    const isLastCrumb = index >= crumbs.length - 1;
    return (
      <li className="inline">
        {isLastCrumb ? (
          <span>{crumb.title}</span>
        ) : (
          <>
            <Link className="text-gray-500 no-underline" to={crumb.to || ''}>
              {crumb.title}
            </Link>
            <span className="text-gray-500 font-bold px-1">\</span>
          </>
        )}
      </li>
    );
  });

  return <ul className="list-none p-0 m-0">{crumbList}</ul>;
};

export default Breadcrumbs;
