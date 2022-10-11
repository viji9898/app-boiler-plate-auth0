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
          <p style={{ fontWeight: "700" }}>Company</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://techhq.lk/discover/techhq"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://techtalent.lk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://techtalent.lk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Profile
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://techtalent.lk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={5}>
          <p style={{ fontWeight: "700" }}>Community</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={
                  "https://join.slack.com/t/tech-talent-lk/shared_invite/zt-1at2w6tr5-to9Z_wO8I8wIR__doFkVLA"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Slack
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://twitter.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://www.linkedin.com/company/techhq-lk/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
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
                  "https://github.com/viji9898/app-boiler-plate/tree/hot-fixes"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={5}>
          <p style={{ fontWeight: "700" }}>Our Impact</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://unconditionalcompassion.org/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foundation Goodness
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://techforgood.lk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                techForGood
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://techforgood.lk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Impact Statement
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
