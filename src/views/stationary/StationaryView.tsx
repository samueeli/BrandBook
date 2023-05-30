import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const StationaryView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="08 Stationary"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
