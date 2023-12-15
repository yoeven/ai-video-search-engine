import { memo } from "react";
import ContentLoader from "react-content-loader";

interface IProps {
  width?: number;
  height?: number;
}

const ReactSingleLoader: React.FC<IProps> = ({ width = 250, height = 400 }) => {
  return (
    <ContentLoader speed={2} width={width} height={height} viewBox={`0 0 ${width} ${height}`} backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
      <rect x="0" rx="2" ry="2" width={width} height={height} />
    </ContentLoader>
  );
};

export default memo(ReactSingleLoader);
