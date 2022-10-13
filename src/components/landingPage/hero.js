import { Button, Col, Divider, Row } from "antd";
import {
  LoginButton,
  LogoutButton,
  RegisterButton,
} from "../../utils/auth0/auth0Components";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./profile";

export const Hero = ({ helloWorld, userData }) => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Row
      gutter={[18]}
      style={{
        // alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        background: "rgb(225, 225, 219)",
        maxWidth: "1200px",
        padding: "20px",
      }}
    >
      <Col span={24}>
        <div
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "16px",
            opacity: "70%",
            // marginLeft: "50px",
            textAlign: "center",
          }}
        >
          <h1> - Boiler Plate App v3.01- </h1>
          <small>faunadb, auth0, react, ant design, netlify, github</small>
        </div>
      </Col>
      <Divider />
      <Col xs={24} sm={24} md={6}>
        <div style={{ fontWeight: "600" }}>
          <h2>Instructions</h2>
        </div>
        <p>Checkout the developer docs on how to use the app</p>
        <Button>Developer Docs</Button>
        <div style={{ fontWeight: "600" }}>
          <br></br>
          <h2>Auth0 Login:</h2>
        </div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {isAuthenticated ? <LogoutButton /> : <RegisterButton />}
      </Col>
      <Col xs={24} sm={24} md={8}>
        <div style={{ fontWeight: "600" }}>
          <h2>Auth0:</h2>
        </div>
        <div
          style={{
            maxWidth: "400px",
            overflow: "scroll",
            backgroundColor: "white",
            padding: "15px",
            // margin: "10px 0px",
            height: "75%",
          }}
        >
          {user ? (
            <pre>{JSON.stringify(user, null, 2)}</pre>
          ) : (
            <pre>{JSON.stringify({ user: null }, null, 2)}</pre>
          )}
        </div>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <div style={{ fontWeight: "600" }}>
          <h2>faunaDb:</h2>
        </div>
        <div
          style={{
            maxWidth: "400px",
            overflow: "scroll",
            backgroundColor: "white",
            padding: "15px",
            // margin: "10px 0px",
            height: "75%",
          }}
        >
          {helloWorld ? (
            <pre>{JSON.stringify(helloWorld, null, 2)}</pre>
          ) : (
            <pre>{JSON.stringify({ faunaDb: null }, null, 2)}</pre>
          )}
          <p>API call made with admin Key</p>
        </div>
      </Col>

      <Col xs={24} sm={24} md={6}></Col>
      <Col xs={24} sm={24} md={8}>
        <Profile />
      </Col>
      <Col xs={24} sm={24} md={8}>
        <div
          style={{
            maxWidth: "400px",
            overflow: "scroll",
            backgroundColor: "white",
            padding: "15px",
            // margin: "10px 0px",
            height: "100%",
          }}
        >
          <div style={{ fontWeight: "600" }}>
            <h2>Auth0-Fauna-Token:</h2>
          </div>
          {helloWorld ? (
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          ) : (
            <pre>{JSON.stringify({ faunaDb: null }, null, 2)}</pre>
          )}
          <p>API call made with Auth0 AccessProvider </p>
          <p>
            Access restricted based on <code>user role</code>{" "}
          </p>
        </div>
      </Col>
    </Row>
  );
};
