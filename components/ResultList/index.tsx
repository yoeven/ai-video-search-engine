import { GetMatchIndexesQuery } from "@graphql/generated/graphql";
import IndexCard from "components/IndexCard";
import { memo } from "react";
import Masonry from "react-masonry-css";

interface IProps {
  results: GetMatchIndexesQuery["match_indexes_gte"];
  searchEmbeddingQuery: any[];
  onSummaryClick: (index: GetMatchIndexesQuery["match_indexes_gte"][0]) => void;
  onChatClick: (index: GetMatchIndexesQuery["match_indexes_gte"][0]) => void;
}

const ResultList: React.FC<IProps> = ({ results, searchEmbeddingQuery, onSummaryClick, onChatClick }) => {
  return (
    <Masonry
      breakpointCols={{
        default: 4,
        1200: 2,
        700: 1,
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {results.map((data, index) => (
        <IndexCard
          key={data.id}
          index={data}
          indexCount={index}
          searchEmbeddingQuery={searchEmbeddingQuery}
          onSummaryClick={onSummaryClick}
          onChatClick={onChatClick}
        />
      ))}
    </Masonry>
  );
};

export default memo(ResultList);
