import React from "react";
import FormInput from "./components/FormInput";
import ListResult from "./components/ListResult";
import {connect} from 'react-redux'
class Homepage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1 className="page-title text-center">
          HARNESS EVERY CLICK, TAP AND SWIPE.{" "}
        </h1>
        <div className="text-mini text-center">
          Brand, track and optimize every touchpoint with Bitly, the world's
          leading link management platform.
          <a className="link-more">
            Learn More{" "}
            <i style={{ fontSize: "19px" }} className="fas fa-arrow-right" />
          </a>
        </div>
        <FormInput />
        <ListResult />
      </div>
    );
  }
}

export default connect(function(state){return{link:state.link}})(Homepage);
