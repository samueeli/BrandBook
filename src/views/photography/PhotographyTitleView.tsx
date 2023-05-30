import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const PhotographyTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Photography" description={description} />
    </>
  );
};
