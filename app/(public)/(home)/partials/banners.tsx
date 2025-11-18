import { bannerData, type BannerData } from '@/constants/banner-data';
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
    <div className='flex w-full flex-col'>
      <Carousel>
        <CarouselContent>
          {bannerData.map((banner, index) => (
            <CarouselItem key={index} className='md:basis-full'>
              <Banner key={index} {...banner} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
};

export default Banners;

const Banner = ({ link, image, title }: BannerData) => {
  return (
    <div className='relative aspect-1200/441 w-full overflow-hidden rounded-4xl'>
      <Link href={link} className='relative block h-full w-full'>
        <Image src={image} alt={title} fill />
      </Link>
    </div>
  );
};
