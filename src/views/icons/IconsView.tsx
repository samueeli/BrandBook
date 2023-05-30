import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const IconsView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="05 Icons"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
