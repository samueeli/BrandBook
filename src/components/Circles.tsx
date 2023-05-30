import { ColorContext } from '../contexts/ColorContext';
import './Circles.css';

interface CircleType {
  size?: 'small' | 'large';
}

export const Circles = ({ size = 'small' }: CircleType) => {
  const dimensions = size === 'small' ? 30 : 60;

  return (
    <ColorContext.Consumer>
      {(brandColor) => (
        <div
          style={{
            width: `${dimensions}vw`,
            height: `${dimensions}vw`,
            position: 'relative',
          }}
        >
          <div
            style={{ backgroundColor: `${brandColor}` }}
            className="Circles_outer"
          ></div>
          <div className="Circles_middle"></div>
          <div
            style={{ backgroundColor: `${brandColor}` }}
            className="Circles_inner"
          ></div>
        </div>
      )}
    </ColorContext.Consumer>
  );
};
