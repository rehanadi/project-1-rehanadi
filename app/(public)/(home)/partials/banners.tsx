import { bannerData, BannerData } from '@/constants/banner-data';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

const Banners = () => {
  return (
    <div className='custom-container flex w-full flex-col'>
      <Carousel>
        <CarouselContent>
          {bannerData.map((banner, index) => (
            <CarouselItem key={index} className='md:basis-full'>
              <Banner
                key={index}
                href={banner.href}
                src={banner.src}
                alt={banner.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
};

export default Banners;

const Banner = ({ href, src, alt }: BannerData) => {
  return (
    <div className='relative aspect-1200/441 w-full overflow-hidden rounded-4xl'>
      <Link href={href} className='relative block h-full w-full'>
        <Image src={src} alt={alt} fill />
      </Link>
    </div>
  );
};
