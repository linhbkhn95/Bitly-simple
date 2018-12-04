import React from "react";

class ShareLink extends React.Component {
  render() {
    return (
      <li style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className="sign-link ">
         <div className="text-suggest">Want to customize, share, and track your links? </div>
         
         <a className="btn-link ">Sign Up For Free</a>
      </li>
    );
  }
}
export default ShareLink;
