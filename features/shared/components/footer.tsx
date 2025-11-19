import Link from 'next/link';
import Logo from './logo';
import {
  socialMediaData,
  type SocialMediaData,
} from '@/features/shared/constants/social-media-data';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-300'>
      <div className='custom-container flex flex-col items-center gap-4 py-10 md:gap-10 md:py-20'>
        <div className='flex flex-col items-center gap-4 md:gap-[22px]'>
          <Link href='/'>
            <Logo />
          </Link>

          <p className='text-sm-semibold md:text-md-semibold'>
            Discover inspiring stories & timeless knowledge, ready to borrow
            anytime. Explore online or visit our nearest library branch.
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <h3 className='text-md-bold'>Follow on Social Media</h3>
          <div className='flex-center gap-3'>
            {socialMediaData.map((socialMedia, index) => (
              <SocialMediaIcon key={index} {...socialMedia} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialMediaIcon = ({ name, icon, link }: SocialMediaData) => {
  return (
    <Link href={link}>
      <div className='flex-center size-10 rounded-full border border-neutral-300 transition hover:bg-neutral-200'>
        <img src={icon} alt={name} />
      </div>
    </Link>
  );
};
