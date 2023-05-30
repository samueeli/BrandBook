import './CoverPageView.css';
import { Circles } from '../../components/Circles';

interface CoverPageProps {
  logo: string;
}

export const CoverPageView = ({ logo }: CoverPageProps) => {
  return (
    <section className="CoverPageView_container pdf-page">
      <div className="CoverPageView_circle">
        <Circles size="large" />
      </div>
      <img
        style={!logo ? { visibility: 'hidden' } : undefined}
        height="30%"
        src={logo}
        alt="logo"
      />
      <div style={{ marginBottom: '18vh' }}>
        <h1>
          Brand<span style={{ fontWeight: '100' }}>Book</span>
        </h1>
        <div style={{ fontSize: '4rem', fontWeight: '100', marginTop: '1rem' }}>
          {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};
