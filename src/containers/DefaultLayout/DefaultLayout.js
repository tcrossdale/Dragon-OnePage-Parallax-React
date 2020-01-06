import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";
import routes from "../../_routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      appData: this.props.appData,
      demoModalIsOpen: false
    };
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  renderTextHtml = content => {
    return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
  };

  toggleDemoModal = () => {
    this.setState({
      demoModalIsOpen: !this.state.demoModalIsOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <DefaultHeader
          appData={this.state.appData}
          renderTextHtml={this.renderTextHtml}
          toggleDemoModal={this.toggleDemoModal}
        />
        <Suspense fallback={this.loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component
                      appData={this.state.appData}
                      {...props}
                      renderTextHtml={this.renderTextHtml}
                      toggleDemoModal={this.toggleDemoModal}
                      demoModalIsOpen={this.state.demoModalIsOpen}
                    />
                  )}
                />
              ) : null;
            })}
            <Redirect appData={this.state.appData} from="/" to="/" />
          </Switch>
        </Suspense>
        <DefaultFooter
          appData={this.state.appData}
          renderTextHtml={this.renderTextHtml}
        />
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
