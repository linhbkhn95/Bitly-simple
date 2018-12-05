import React from "react";
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from "react-bootstrap";
import "./index.css";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: null
    };
  }
  componentWillMount(){

  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll(event) {
    if (window.scrollY < 30 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY >= 400 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);

    // this.setState({
    //   transform: itemTranslate
    // });
  }
  render() {
    let styleHeader = this.state.scrolling ? " header-fixed animation" : "";
    let HeaderStyle = {zIndex:this.state.scrolling?2000:1000}
    return (
      <React.Fragment>
        <header style={HeaderStyle} id="header">
          {/* inverse */}
          <Navbar bsStyle={styleHeader} collapseOnSelect>
            {/* <div className={this.state.scrolling?"header-fixed":""}> */}

            <Navbar.Header>
              <Navbar.Brand>
                <h1 className="header-logo">
                  <a href="#brand" />
                </h1>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link Management
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Enterprise
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Resources
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Blog
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Login
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Sign up
                </NavItem>
                <a className="enterprise">Get Enterprise</a>
              </Nav>
            </Navbar.Collapse>
            {/* </div> */}
          </Navbar>
        </header>

        <div id="container" className="clearfix">
          <div className="container shorten-container container-pod">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
