'use client';

import {
  type LogoConfig,
  logoConfigs,
} from '@/features/shared/configs/logo-config';
import Image from 'next/image';

const Logo = ({ size = 'large', width, height }: LogoConfig) => {
  const logoConfig = logoConfigs[size];

  return (
    <Image
      src={logoConfig.image}
      alt='Logo'
      width={width ?? logoConfig.width}
      height={height ?? logoConfig.height}
    />
  );
};

export default Logo;
