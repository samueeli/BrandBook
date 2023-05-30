import { Circles } from '../components/Circles';
import './TitlePageLayout.css';

export interface TitlePageProps {
  title?: string;
  description?: string;
}

export const TitlePageLayout = ({ title, description }: TitlePageProps) => {
  return (
    <section className="TitlePageLayout_container pdf-page">
      <div className="TitlePageLayout_circle">
        <Circles />
      </div>
      <div className="TitlePageLayout_text">
        <h2>{title}</h2>
        <div className="TitlePageLayout_cols">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
