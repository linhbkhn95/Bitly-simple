import React from "react";

class ResultItem extends React.Component {
  render() {
    return (
      <li className="shortened_link ">
        <div className="title-link">
          <a className="article-title">Budweiser lon 330ml - Thùng 24</a>
        </div>
        <div className="url-link">
          <a className="article-title smaller">
            vuabia.com/budweiser-330ml-1x24box-can.html
          </a>
        </div>
        <div className="link-generate">
          <div className="short-link">
            <a>https://bit.ly/2zC8fLm</a>
            <a className="button primary copy">Copy</a>
          </div>
          <div className="info-page">
            <div className="number"> 14,162</div>
          </div>
        </div>
      </li>
    );
  }
}
export default ResultItem;
