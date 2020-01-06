import React, { Component } from "react";
import { Button, NavbarBrand, Container } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super([props]);
    this.props = props;
    this.headerRef = React.createRef();
    this.subMenu = React.createRef();
    this.navbarToggler = React.createRef();
    this.navbarCollapse = React.createRef();
    this.mobileNavbarCollapse = React.createRef();
    this.headerNavigation = this.headerNavigation.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }
  toggleSubNavigation = evt => {
    evt.preventDefault();
    let theLink = evt.target,
      theLinksParent = evt.target.closest("div"),
      theLinksMenu = evt.target.closest("div").closest(".submenu"),
      submenuLinks = theLinksMenu.getElementsByTagName("div"),
      theSectionId = theLink.getAttribute("href").replace("#", ""),
      theSection = document.getElementById(theSectionId),
      theSectionPosY = theSection ? theSection.offsetTop : null;

    theSectionPosY &&
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: theSectionPosY
      });

    for (let index = 0; index < submenuLinks.length; index++) {
      const element = submenuLinks[index];
      element.classList.remove("current");
    }
    theLinksParent.classList.add("current");
  };
  toggleNavigation = evt => {
    this.headerRef.current.classList.toggle("is-open");
    // let theButton = evt.currentTarget,
    //   theCollapser = theButton.nextSibling;
    // if (theCollapser.classList.contains("collapse")) {
    //   theCollapser.classList.add("collapsing");
    //   theCollapser.classList.remove("collapse");
    //   setTimeout(() => {
    //     theCollapser.classList.remove("collapsing");
    //   }, 300);
    // } else {
    //   theCollapser.classList.remove("collapsing");
    //   theCollapser.classList.add("collapse");
    // }
  };
  headerNavigation = () => {
    let theBody = document.getElementsByTagName("body")[0];
    window.addEventListener("scroll", function() {
      let offsetTop = window.pageYOffset;
      if (offsetTop > 100) {
        theBody.classList.add("is-sticky");
      } else {
        theBody.classList.remove("is-sticky");
      }
    });
  };
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    this.headerNavigation();
    return (
      <React.Fragment>
        <header className="main-header" ref={this.headerRef}>
          <div className="top-navigation">
            <Container>
              <div className="navbar-header">
                <div className="inner">
                  <div>
                    <NavbarBrand>
                      <img
                        src="https://via.placeholder.com/230x40.png"
                        alt=""
                      />
                    </NavbarBrand>
                    <span className="navbar-title">Dragon Theme</span>
                  </div>
                  <Button
                    className="navbar-toggle collapsed"
                    onClick={e => this.toggleNavigation(e)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Button>
                </div>
                <div className="btn-border">
                  <span
                    className="btn-request-demo request-demo"
                    onClick={e => this.props.toggleDemoModal()}
                  >
                    Request Live Demo
                  </span>
                </div>
              </div>
              <nav className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  {this.props.appData && this.props.appData.subNavigationLinks
                    ? this.props.appData.subNavigationLinks.map(
                        (link, index) => (
                          <li
                            key={index}
                            className={link.current ? "current" : null}
                          >
                            <a href={link.url}>{link.label}</a>
                          </li>
                        )
                      )
                    : null}
                </ul>
              </nav>
            </Container>
          </div>
          <div className="sub-navigation">
            <Container>
              <div className="submenu" ref={this.subMenu}>
                {this.props.appData && this.props.appData.subNavigationLinks
                  ? this.props.appData.subNavigationLinks.map((link, index) => (
                      <div
                        key={index}
                        className={link.current ? "current" : null}
                      >
                        <a
                          className="submenu-link"
                          href={link.url}
                          onClick={e => this.toggleSubNavigation(e)}
                        >
                          {link.label}
                        </a>
                      </div>
                    ))
                  : null}
              </div>
            </Container>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
