import { Button, Col, Row } from "antd";
import { GithubOutlined } from "@ant-design/icons";

export const Hero = ({ helloWorld }) => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        background: "rgb(225, 225, 219)",
        maxWidth: "1200px",
      }}
    >
      <Col xs={24} sm={24} md={12}>
        <Row>
          <Col span={24}>
            <div
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                opacity: "70%",
                marginLeft: "50px",
              }}
            >
              <h1> - Boiler Plate App v2.01- </h1>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[18, 18]}
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "16px",
            opacity: "70%",
            marginLeft: "50px",
          }}
        >
          <Col xs={24} sm={24} md={12}>
            <div style={{ fontWeight: "600" }}>
              <h2>Instructions</h2>
            </div>
            <p>Checkout the developer docs on how to use the app</p>
            <Button>Developer Docs</Button>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div style={{ fontWeight: "600" }}>
              <h2>Developer</h2>
            </div>
            <p>Checkout the repo for instruction on how to use the app</p>
            <Button
              href="https://github.com/viji9898/app-boiler-plate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
              Github
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <div
          style={{
            // background: "rgb(225, 225, 219)",
            margin: "40px",
            textAlign: "center",
          }}
        >
          <img
            src={
              "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
            }
            className="App-logo"
            alt="logo"
          />
        </div>
      </Col>
      <Col span={24}>
        {helloWorld ? (
          <div style={{ textAlign: "center" }}>
            <p style={{ backgroundColor: "lime" }}>
              <code>"{helloWorld.title}"</code>.
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ backgroundColor: "red" }}>
              "ERROR - Faunadb Not Connected"
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};
