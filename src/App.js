import "./App.css";
import "antd/dist/antd.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";
import { LandingPage } from "./pages/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { getAccessTokenSilently, user } = useAuth0();
  const [helloWorld, setHelloWorld] = useState("");
  const [userData, setUserData] = useState("");
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    axios
      .get(".netlify/functions/getHelloWorld", {
        baseURL: "/",
      })
      .then(function (response) {
        setHelloWorld(response.data.data);
      });

    const getUsers = async () => {
      setSpinner(true);
      const accessToken = await getAccessTokenSilently();
      const userId = user.sub;
      axios
        .get(".netlify/functions/getUser", {
          params: { userId },
          headers: {
            token: accessToken,
          },
          baseURL: "/",
        })
        .then(function (response) {
          setUserData(response.data.data);
          setSpinner(false);
        });
    };
    getUsers();
  }, [getAccessTokenSilently, user]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              helloWorld={helloWorld}
              userData={userData}
              spinner={spinner}
            />
          }
        />

        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
