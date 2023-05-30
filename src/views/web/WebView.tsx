import { ContentImage, ImageProps } from '../../components/ContentImage';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

export const WebView = ({ image }: ImageProps) => {
  return (
    <>
      <ContentPageLayout
        page="07 Web"
        content={<ContentImage image={image} />}
      />
    </>
  );
};
