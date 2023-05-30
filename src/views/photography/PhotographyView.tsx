import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const PhotographyView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="06 Photography"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
