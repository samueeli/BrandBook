import { TitlePageLayout, TitlePageProps } from '../../layouts/TitlePageLayout';

export const ColorsTitleView = ({ description }: TitlePageProps) => {
  return (
    <>
      <TitlePageLayout title="Colors" description={description} />
    </>
  );
};
