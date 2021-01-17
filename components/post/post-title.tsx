import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props): JSX.Element => {
  return <h1 className="font-black leading-none mb-0 mt-0">{children}</h1>;
};

export default PostTitle;
