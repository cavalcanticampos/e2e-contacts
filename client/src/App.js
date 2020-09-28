import React from "react";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Contacts } from "./pages";

const history = createBrowserHistory();

function App() {
  return (
    <Wrapper className="App">
      <HashRouter basename="/">
        <Switch>
          <Route
            exact={true}
            path={"/"}
            component={(props) => (
              <Contacts history={history} {...props}></Contacts>
            )}
          />
        </Switch>
      </HashRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  color: black;
`;

export default App;
