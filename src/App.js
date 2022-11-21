import React from "react";
import "./App.css";
import Header from "./components/header/header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
import Question from "./components/Add-Question/question.js";
import ViewQuestionFolder from "./components/ViewQuestionFolder";
import StackOverflow from "./components/StackOverflow";
import Auth from "./components/Auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Outlet
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/login-register",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/login-register" element={<Auth />} />

          <Route element={<Question />} path="/add-question" exact />
          <Route element={<ViewQuestionFolder />} path="/question" exact />
          <Route element={<StackOverflow />} path="/home" exact />
          <Route path="/" element={<Navigate replace to="/login-register" />} />

          <Route element={<PrivateRoutes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// npm install react-router-dom@5.2.0 --force
//123456@gmail.com
