import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <footer id="contact" className="main-footer">
        <div className="top-section">
          <Container>
            {this.props.appData &&
            this.props.appData.footerSection &&
            this.props.appData.footerSection.header ? (
              <h3>{this.props.appData.footerSection.header}</h3>
            ) : null}
            <div className="row">
              {this.props.appData &&
                this.props.appData.footerSection &&
                this.props.appData.footerSection.blocks.map((block, index) => (
                  <div className="col-md-4 block" key={index}>
                    {this.props.renderTextHtml(block.content)}
                  </div>
                ))}
            </div>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            {this.props.appData &&
            this.props.appData.footerSection &&
            this.props.appData.footerSection.copyright ? (
              <div className="copyright">
                {this.props.appData.footerSection.copyright}
              </div>
            ) : null}
            <ul className="social-links">
              {this.props.appData &&
                this.props.appData.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
            </ul>
          </Container>
        </div>
      </footer>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
