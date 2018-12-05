import React from "react";
import ResultItem from "./ResultItem";
import ShareLink from "./ShareLink";
import { connect } from "react-redux";
import { getTopLink } from "../../../store/actions/linkAction";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ListResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: null
    };
  }
  componentDidMount() {
    this.props.getTopLink();
  }
  renderListItem() {
    let { data } = this.props;
    if (data && data.length > 0) {
      let array = [];

      array.push(
        <ResultItem
          coppy={short_link => {
            this.setState({ copy: short_link });
          }}
          text={this.state.copy}
          dataItem={data[0]}
        />
      );
      array.push(<ShareLink />);
      if (data.length > 1) {
        for (var i = 1; i < data.length; i++)
          array.push(
            <ResultItem
              coppy={short_link => {
                this.setState({ copy: short_link });
              }}
              text={this.state.copy}
              dataItem={data[i]}
            />
          );
      }
      return array;
      // data.forEach(element => {
      //      array
      // });
      // return data.map(item => {
      //   return <ResultItem dataItem={item} />;
      // });
    } else {
      return <ShareLink />;
    }
  }
  render() {
    return (
      <div className="link-container mid-container">
        <CopyToClipboard
          text={this.state.copy}
          onCopy={() => {
            this.setState({ coppied: true });
          }}
        >
          <ul
            className="list-result"
            style={{ display: "block", overflow: "hidden" }}
          >
            {this.renderListItem()}
          </ul>
        </CopyToClipboard>
      </div>
    );
  }
}
export default connect(
  function(state) {
    return { data: state.link.data, link: state.link };
  },
  { getTopLink }
)(ListResult);
