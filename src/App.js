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
  const { getAccessTokenSilently } = useAuth0();
  const [helloWorld, setHelloWorld] = useState("");
  const [userData, setUserData] = useState("");
  useEffect(() => {
    axios
      .get(".netlify/functions/getHelloWorld", {
        baseURL: "/",
      })
      .then(function (response) {
        setHelloWorld(response.data.data);
      });

    const getUsers = async () => {
      const accessToken = await getAccessTokenSilently();
      axios
        .get(".netlify/functions/getUsers", {
          headers: {
            token: accessToken,
          },
          baseURL: "/",
        })
        .then(function (response) {
          setUserData(response.data.data);
        });
    };
    getUsers();
  }, [getAccessTokenSilently]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage helloWorld={helloWorld} userData={userData} />}
        />

        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
