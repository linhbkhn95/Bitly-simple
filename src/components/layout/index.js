import React from "react";
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from "react-bootstrap";
import "./index.css";
class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }
  render() {
    return (
      <React.Fragment>
        <header id="header">
          {/* inverse */}
          <Navbar collapseOnSelect>
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
