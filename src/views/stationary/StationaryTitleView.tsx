import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const StationaryTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Stationary" description={description} />
    </>
  );
};
