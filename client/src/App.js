import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Projects from "./components/Project/Projects";
// import ProjectDetail from "./components/Project/ProjectDetail";
// import TaskDetail from "./components/TaskDetail";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

class App extends React.Component {
  state = { user: this.props.user };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} clearUser={this.setUser} />
        {/* <Route
          exact
          path="/projects"
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <Projects {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />

        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route exact path="/tasks/:id" component={TaskDetail} /> */}

        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} setUser={this.setUser} />} //passing all the router props and the user props
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUser={this.setUser} />} //passing all the router props and the user props
        />
      </div>
    );
  }
}

export default App;
