import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const LogoTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Logo" description={description} />
    </>
  );
};
