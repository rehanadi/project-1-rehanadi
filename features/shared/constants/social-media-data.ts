export interface SocialMediaData {
  name: string;
  link: string;
  icon: string;
  width: number;
  height: number;
}

export const socialMediaData: SocialMediaData[] = [
  {
    name: 'Facebook',
    link: '/',
    icon: '/icons/social-media/facebook.svg',
    width: 10.83,
    height: 20.02,
  },
  {
    name: 'Instagram',
    link: '/',
    icon: '/icons/social-media/instagram.svg',
    width: 20.01,
    height: 20.02,
  },
  {
    name: 'LinkedIn',
    link: '/',
    icon: '/icons/social-media/linkedin.svg',
    width: 16.74,
    height: 16.01,
  },
  {
    name: 'TikTok',
    link: '/',
    icon: '/icons/social-media/tiktok.svg',
    width: 17.04,
    height: 19.66,
  },
];
