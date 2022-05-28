import { Link } from "react-router-dom";
import { Navbar, Nav, Grid, Row, Col } from "rsuite";
import logoImg from "../components/assets/images/logo.png";

function Header() {
  return (
    <div className="header__part">
      <div className="container">
        <Navbar>
          <Grid>
            <Row>
              <div className="navbar">
                <Col lg={8} md={4} sm={4} xsHidden>
                  <Navbar.Brand href="#">
                    <img className="logoImg" src={logoImg} alt="logo" />
                  </Navbar.Brand>
                </Col>
                <Col lg={8} md={10} sm={20} xs={24}>
                  <Nav>
                    <div className="navbar__item">
                      <p>Home</p>
                      <p>Pages</p>
                      <p>Contacts</p>
                      <Link className="routerLink" to="/login">
                        <p>Sign In</p>
                      </Link>
                    </div>
                  </Nav>
                </Col>
                <Col lg={8} md={10} smHidden xsHidden>
                  <Nav pullRight>
                    <div className="navbar__icons">
                      <p>
                        <span className="material-icons-outlined">
                          account_circle
                        </span>
                      </p>
                      <p>
                        <span className="material-icons-outlined">
                          favorite_border
                        </span>
                      </p>
                      <p>
                        <span className="material-icons-outlined">balance</span>
                      </p>
                      <p>
                        <span className="material-icons-outlined">
                          shopping_cart
                        </span>
                        {/* <div className="shopping__cart_round">15</div> */}
                      </p>
                    </div>
                  </Nav>
                </Col>
              </div>
            </Row>
          </Grid>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
