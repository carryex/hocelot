import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import Page1 from "./components/page1/page1";
import page2 from "./components/page2/page2";
import page3 from "./components/page3/page3";
import page4 from "./components/page4/page4";
import page5 from "./components/page5/page5";
import page6 from "./components/page6/page6";
import page7 from "./components/page7/page7";
import page8 from "./components/page8/page8";
import page8Uploaded from "./components/page8/page8uploaded";
import page9 from "./components/page9/page9";
import Page9Container from "./components/page9/page9Container";
import page10 from "./components/page10/page10";
import store from './redux/reduxStore';
import {Provider} from 'react-redux';
import Quality from './components/quality/Quality/Quality'
import QualityHocelot from './components/quality/QualityHocelot/QualityHocelot'

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route history={history} path="/login" component={Page1} />
              <Route history={history} path="/register" component={page2} />
              <Route history={history} path="/try" component={page3} />
              <Route history={history} path="/solutions" component={page4} />
              <Route history={history} path="/business" component={page5} />
              <Route history={history} path="/product" component={page6} />
              <Route history={history} path="/portfolio" component={page7} />
              <Route
                history={history}
                exact
                path="/new"
                component={page8}
              />
              <Route
                history={history}
                exact
                path="/upload//uploaded"
                component={page8Uploaded}
              />
              <Route history={history} path="/sort-cvs" component={Page9Container} />
              <Route history={history} path="/quality" component={Quality} />
              <Route history={history} path="/quality-hocelot" component={QualityHocelot} />
              <Route history={history} path="/success" component={page10} />

              <Redirect from="/" to="/login" />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
