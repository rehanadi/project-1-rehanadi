'use client';

import Image from 'next/image';
import { useMedia } from 'react-use';

const Logo = () => {
  const isLargeIsh = useMedia('(min-width: 768px)', false);

  const imageConfigs = {
    large: {
      src: '/icons/logo.svg',
      width: 155,
      height: 42,
    },
    small: {
      src: '/icons/logo-small.svg',
      width: 40,
      height: 40,
    },
  };

  const imageConfig = isLargeIsh ? imageConfigs.large : imageConfigs.small;

  return (
    <Image
      src={imageConfig.src}
      alt='Logo'
      width={imageConfig.width}
      height={imageConfig.height}
    />
  );
};

export default Logo;
