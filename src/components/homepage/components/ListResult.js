import React from "react";
import ResultItem from "./ResultItem";
import ShareLink from "./ShareLink";
class ListResult extends React.Component {
  render() {
    return (
      <div className="link-container mid-container">
        <ul className="list-result" style={{ display: "block", overflow: "hidden" }}>
          <ResultItem />
          <ShareLink />
        </ul>
      
      </div>
    );
  }
}
export default ListResult;
