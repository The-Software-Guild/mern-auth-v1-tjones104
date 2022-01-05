import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import GetItems from "./components/getItems";
import PostItems from "./components/postItems";
import Register from "./components/register";
import Login from "./components/login";
import UnknownPage from "./components/UnknownPage";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    user: false,
    token: "",
  };

  componentDidMount() {
    if (!localStorage.getItem("state")) {
      localStorage.setItem("state", JSON.stringify(this.state));
    }

    const data = JSON.parse(localStorage.getItem("state"));
    if (data.token !== "") {
      this.setState({ user: data.user, token: data.token });
    } else {
      this.setState({ user: false, token: "" });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  handleUser = (data) => {
    this.setState({ user: data });
  };

  handleToken = (data) => {
    this.setState({ token: data });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            state={this.state}
            handleToken={this.handleToken}
            handleUser={this.handleUser}
          />
          <div className="main">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                path="/GetItems"
                element={
                  this.state.token === "" ? (
                    <Navigate to="/login" />
                  ) : (
                    <GetItems user={this.state.user} />
                  )
                }
              >
                <Route
                  path=":id"
                  element={<GetItems user={this.state.user} />}
                ></Route>
              </Route>
              <Route
                path="/PostItems"
                element={
                  this.state.token === "" ? (
                    <Navigate to="/login" />
                  ) : this.state.user.admin === false ? (
                    <Navigate to="/" />
                  ) : (
                    <PostItems />
                  )
                }
              ></Route>
              <Route
                path="/Login"
                element={
                  <Login
                    handleToken={this.handleToken}
                    handleUser={this.handleUser}
                  />
                }
              ></Route>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="*" element={<UnknownPage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
