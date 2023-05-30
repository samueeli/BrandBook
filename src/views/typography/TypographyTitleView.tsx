import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const TypographyTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Typography" description={description} />
    </>
  );
};
