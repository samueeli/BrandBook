import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const TypographyView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="03 Typography"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
