'use client';

import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'large';
}

const Logo = ({ size = 'large' }: LogoProps) => {
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

  const imageConfig = imageConfigs[size];

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
