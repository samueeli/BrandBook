import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const BrandTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="The Brand" description={description} />
    </>
  );
};
