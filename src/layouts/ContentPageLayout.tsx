import { ColorContext } from '../contexts/ColorContext';
import './ContentPageLayout.css';

export interface ContentPageProps {
  page?: string;
  content?: any;
}

export const ContentPageLayout = ({ page, content }: ContentPageProps) => {
  return (
    <ColorContext.Consumer>
      {(brandColor) => (
        <section className="ContentPageLayout_container pdf-page">
          <div className="ContentPageLayout_content">{content}</div>
          <div
            style={{ borderTop: `1px solid ${brandColor}` }}
            className="ContentPageLayout_footer"
          >
            {page}
          </div>
        </section>
      )}
    </ColorContext.Consumer>
  );
};
