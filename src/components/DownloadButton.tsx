import './DownloadButton.css';
import download from '../assets/download.png';

export interface DownloadButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const DownloadButton = ({ onClick }: DownloadButtonProps) => {
  return (
    <div onClick={onClick} className="DownloadButton_container">
      <span className="DownloadButton_text">DOWNLOAD</span>
      <img src={download} alt="download icon" />
    </div>
  );
};
