import { ColorContext } from '../../contexts/ColorContext';
import { ContentPageLayout } from '../../layouts/ContentPageLayout';

const IndexItem = ({ num, page }: { num?: string; page?: string }) => {
  return (
    <ColorContext.Consumer>
      {(brandColor) => (
        <div
          style={{
            display: 'flex',
            fontWeight: '900',
            fontSize: '1.5rem',
          }}
        >
          <div
            style={{
              padding: '.5rem',
              borderRight: `1px solid ${brandColor}`,
              width: '3.7rem',
            }}
          >
            {num}
          </div>
          <div style={{ padding: '.5rem', marginLeft: '.5rem' }}>{page}</div>
        </div>
      )}
    </ColorContext.Consumer>
  );
};

const IndexList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '4rem',
        height: '100%',
      }}
    >
      <IndexItem num="01" page="The Brand" />
      <IndexItem num="02" page="Logo" />
      <IndexItem num="03" page="Typography" />
      <IndexItem num="04" page="Colors" />
      <IndexItem num="05" page="Icons" />
      <IndexItem num="06" page="Photography" />
      <IndexItem num="07" page="Web" />
      <IndexItem num="08" page="Stationary" />
    </div>
  );
};

export const ContentsView = () => {
  return (
    <>
      <ContentPageLayout page="Contents" content={<IndexList />} />
    </>
  );
};
