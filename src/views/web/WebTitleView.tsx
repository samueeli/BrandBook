import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const WebTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Web" description={description} />
    </>
  );
};
