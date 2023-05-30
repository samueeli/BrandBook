export interface ImageProps {
  image?: string;
}

export const ContentImage = ({ image }: ImageProps) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
