import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Question from "./components/add-Question/question.js";
import ViewQuestionFolder from "./components/ViewQuestionFolder";
import StackOverflow from "./components/StackOverflow";
import Auth from "./components/Auth";

function PrivateRoutes() {
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
  return user ? <Outlet /> : <Navigate to="/login-register" />;
}

export default PrivateRoutes;
