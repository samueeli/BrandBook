import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const BrandView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="01 The Brand"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
