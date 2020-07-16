import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from './../component/portfolioImage/profileImage.component';
import MenuList from './../component/menuList/list.component';
import ContentWrapper from './contentWrapper/HomePage';
import Footer from './../component/footer/footer.component'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="menuCol">
          <div className="fixedWrapperDiv">
            <Profile />
            <MenuList />
            <Footer />
          </div>
        </Col>
        <Col sm={10} className="contentCol">
          <div className="contentWrapperDiv">
            <ContentWrapper />
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
