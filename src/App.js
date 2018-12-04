import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App-responsive.css"
import Home from './components/homepage/index'
import Layout from "./components/layout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Ridirect,
  hashHistory,
  Redirect,
  NavLink,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound'
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router>
          <React.Fragment>
            {/* <Link to="/user/login">Đăng nhập</Link>  */}
            <Switch>
              {/* <Route path="/login" component={Login} /> */}
              <React.Fragment>
                <Layout>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/wall" component={Home} /> */}
                    {/* <Route path="/post.notifi.:postId" component={PostNotifi} /> */}
                    {/* <Route path="/groups/:groupname" component={GroupPage} /> */}

                  
                    <Route
                      render={function() {
                        return <Notfound />;
                      }}
                    />
                  </Switch>
                </Layout>
              
              </React.Fragment>{" "}
            </Switch>
          </React.Fragment>
        </Router>
      // </Provider>
    );
  }
}

export default App;
