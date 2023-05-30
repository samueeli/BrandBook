import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const LogoView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="02 Logo"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
