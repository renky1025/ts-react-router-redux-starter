import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { hot } from 'react-hot-loader';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home';
import Dashboard from './Dashboard';
const App = () => (
      <TransitionGroup>
          <CSSTransition
                  classNames="fade"
                  timeout={300}
                >
            <Switch>
              <Route exact path='/'  render={() => (
                <Redirect to="/home"/>
              )} />
              <Route exact path='/home' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
      </TransitionGroup>
);

// export default App
export default hot(module)(App)