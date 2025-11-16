export interface SocialMediaData {
  name: string;
  link: string;
  icon: string;
}

export const socialMediaData: SocialMediaData[] = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/yourprofile',
    icon: '/icons/social-media/facebook.svg',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/yourprofile',
    icon: '/icons/social-media/instagram.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yourprofile',
    icon: '/icons/social-media/linkedin.svg',
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@yourprofile',
    icon: '/icons/social-media/tiktok.svg',
  },
];
