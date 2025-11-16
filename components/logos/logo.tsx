'use client';

import { type LogoConfig, logoConfigs } from '@/configs/logo.config';
import Image from 'next/image';

const Logo = ({ size = 'large' }: LogoConfig) => {
  const logoConfig = logoConfigs[size];

  return (
    <Image
      src={logoConfig.image}
      alt='Logo'
      width={logoConfig.width}
      height={logoConfig.height}
    />
  );
};

export default Logo;
