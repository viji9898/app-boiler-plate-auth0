import { Col, Divider, Row, Space } from "antd";

export const Footer = () => {
  return (
    <div>
      <Row gutter={[18, 18]} style={{ margin: "20px" }}>
        <Divider></Divider>
        <Col xs={24} sm={24} md={9}>
          <p style={{ fontWeight: "900" }}>Starter App</p>
          <p style={{ fontSize: "14px" }}>
            Starter App is a boiler plate for building simple SPA websites.
          </p>
          <Space>
            <a
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "black",
              }}
              href={
                "https://join.slack.com/t/tech-talent-lk/shared_invite/zt-1at2w6tr5-to9Z_wO8I8wIR__doFkVLA"
              }
            >
              {"Join us on "}
              <img
                style={{ height: "15px" }}
                src={
                  "https://jdevs-app.s3.eu-west-2.amazonaws.com/04-slack-artwork/slack-2.svg"
                }
                alt={"slack logo"}
              />
            </a>
          </Space>
        </Col>
        <Col xs={12} sm={12} md={5}>
          <p style={{ fontWeight: "700" }}>FaunaDb</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={
                  "https://auth0.com/blog/what-is-fauna-and-how-does-it-work-with-auth0/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                How Does It Work With Auth0?
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={
                  "https://fauna.com/blog/setting-up-sso-authentication-in-fauna-with-auth0"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Fauna with Auth0
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={5}>
          <p style={{ fontWeight: "700" }}>Auth0</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://auth0.com/docs/quickstart/spa/react/01-login"}
                target="_blank"
                rel="noopener noreferrer"
              >
                React: Login
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={
                  "https://auth0.com/docs/quickstart/spa/react/02-calling-an-api"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                React: Call an API
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://auth0.com/docs/libraries/auth0-react"}
                target="_blank"
                rel="noopener noreferrer"
              >
                SDK for Single Page Apps
              </a>
            </li>

            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={
                  "https://auth0.com/docs/customize/actions/flows-and-triggers/post-user-registration-flow"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Post User Registration Flow
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={5}>
          <p style={{ fontWeight: "700" }}>Fauna-Auth0</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://www.youtube.com/watch?v=a3YIzB70WQQ"}
                target="_blank"
                rel="noopener noreferrer"
              >
                youTube - Fauna and Auth0 Setup
              </a>
            </li>
          </ul>
        </Col>
        <Divider></Divider>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "12px" }}>app-boiler-plate</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
