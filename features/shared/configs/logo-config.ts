export interface LogoConfig {
  size?: 'small' | 'large';
  width?: number;
  height?: number;
}

export const logoConfigs = {
  large: {
    image: '/icons/logo.svg',
    width: 155,
    height: 42,
  },
  small: {
    image: '/icons/logo-small.svg',
    width: 40,
    height: 40,
  },
};
