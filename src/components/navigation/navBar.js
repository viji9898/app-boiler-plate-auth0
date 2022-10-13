import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "antd";

export const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          boilerPlate<sup>v3</sup>
        </Navbar.Brand>
        <Navbar.Toggle />

        {isAuthenticated && (
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                title={<Avatar src={user.picture} />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text>Signed in as: {user.name}</Navbar.Text>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};
