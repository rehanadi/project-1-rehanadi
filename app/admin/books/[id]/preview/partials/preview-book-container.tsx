import { ReactNode } from 'react';

interface PreviewBookContainerProps {
  children: ReactNode;
}

const PreviewBookContainer = ({ children }: PreviewBookContainerProps) => {
  return <div className='flex flex-col gap-9 md:gap-8'>{children}</div>;
};

export default PreviewBookContainer;
