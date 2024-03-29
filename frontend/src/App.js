import React from "react";
import { Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddReview from "./components/add-review";
import Restaurant from "./components/restaurant";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";
// import { Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // declare user variable and use setUser function to update user
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }
  async function logout(){
    setUser(null);
  }

  return (
    <div>Hello World

      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">

            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor: 'pointer'}}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}

          </li>
        </div>
      </nav>

      <div className="container mt-3">
          <BrowserRouter>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList}/>
          
          <Route path="/restaurants/:id/reiew" render={(props) => ( //using render method instead of component, to be able to pass props
            <AddReview {...props} user={user}/>
          )}/>
          <Route path="/restaurants/:id" render={(props) => (
            <Restaurant {...props} user={user}/>
          )}/>
          <Route path="/login" render={(props) => (
            <Login {...props} login={login}/>
          )}/>
          </BrowserRouter>
      </div>

    </div>
  );
}

export default App;