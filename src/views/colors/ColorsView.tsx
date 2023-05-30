import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const ColorsView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="04 Colors"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
