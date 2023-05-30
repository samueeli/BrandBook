import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const ContentsTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Contents" description={description} />
    </>
  );
};
