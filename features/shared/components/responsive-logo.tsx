'use client';

import Logo from './logo';
import { useMedia } from 'react-use';

const ResponsiveLogo = () => {
  const isLargeIsh = useMedia('(min-width: 768px)', false);

  return <Logo size={isLargeIsh ? 'large' : 'small'} />;
};

export default ResponsiveLogo;
