import React from "react";
import axios from "axios";
import { apiBase } from "../../client/config";
import Skeleton from "react-loading-skeleton";
import { Redirect } from "react-router-dom";
import Notfound from "../Notfound";
class RedirectWebsite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noLink: false
    };
  }
  componentDidMount() {
    let { short_link } = this.props.match.params;
    let self = this;
    axios.get(`${apiBase}/getFullLink/${short_link}`).then(res => {
      if (res.data.code == 0) {
        window.location = res.data.data;
      } else {
        self.setState({ noLink: true });
      }
    });
  }
  render() {
    if (!this.state.noLink) return <Skeleton />;
    return <Notfound />;
  }
}
export default RedirectWebsite;
