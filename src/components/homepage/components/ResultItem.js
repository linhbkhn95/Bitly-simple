import React from "react";
class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    const { dataItem } = this.props;
    return (
      <li className="shortened_link ">
        <div className="title-link">
          <a href={dataItem.full_link} className="article-title">
            {dataItem.title_link}
          </a>
        </div>
        <div className="url-link">
          <a href={dataItem.full_link} className="article-title smaller">
            {/* vuabia.com/budweiser-330ml-1x24box-can.html */}
            {dataItem.full_link}
          </a>
        </div>
        <div className="link-generate">
          <div className="short-link">
            <a href={`/${dataItem.short_link}`}>
              {" "}
              {`${window.location.host}/${dataItem.short_link}`}
            </a>

            <a
              style={{
                color: this.props.text === dataItem.short_link ? "white" : "",
                backgroundColor:
                  this.props.text === dataItem.short_link ? "red" : ""
              }}
              onClick={() => {
                this.props.coppy(dataItem.short_link);
              }}
              className="button primary copy"
            >
              Copy
            </a>
          </div>
          <div className="info-page">
            <div className="number">{dataItem.count}</div>
            <span
              style={{ marginLeft: "5px" }}
              className="glyphicon glyphicon-signal"
              aria-hidden="true"
            >
              
            </span>
          </div>
        </div>
      </li>
    );
  }
}
export default ResultItem;
