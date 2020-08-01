import * as React from 'react'
import { Navbar as BootNavBar, Container, Row, Col, Nav } from 'react-bootstrap'
import styles from './../styles/navbar.module.css'
import { Link } from 'react-router-dom'

export interface HeaderProps {}

export interface HeaderState {}

class Navbar extends React.Component<HeaderProps, HeaderState> {
  state = {}
  render() {
    return (
      <BootNavBar sticky="top" className={styles.main} expand="sm">
        <Container>
          <Row>
            <Col md={{ offset: 1 }}>
              <BootNavBar.Brand className={styles.brand}>
                <Link to="/">Video-Hoster</Link>
              </BootNavBar.Brand>
            </Col>
            <Col>
              <Nav>
                <Nav.Link>
                  <Link to="/title">Title</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/search">Search</Link>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        {/* <BootNavBar.Toggle aria-controls="basic-navbar-nav" />
        <BootNavBar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </BootNavBar.Collapse> */}
      </BootNavBar>
    )
  }
}

export default Navbar
