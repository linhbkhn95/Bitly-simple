import React from "react";
import ResultItem from "./ResultItem";
import ShareLink from "./ShareLink";
import {connect} from 'react-redux'
class ListResult extends React.Component {
  renderListItem(){
    const {link} =  this.props;
    if(link&&link.length>0){
      return link.map((item)=>{
          return <ResultItem dataLink ={item}/>
      })
    }
    else{
      return <div>No data</div>
    }

  }
  render() {
    
    return (
      <div className="link-container mid-container">
        <ul className="list-result" style={{ display: "block", overflow: "hidden" }}>
            {this.renderListItem()}
            <ShareLink />
        </ul>
      
      </div>
    );
  }
}
export default connect(function(state){return{link:state.link}}) (ListResult);
