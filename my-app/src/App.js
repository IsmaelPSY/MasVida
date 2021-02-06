import React from 'react';
import './App.css';

//Bootstrap
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Componentes
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">MAS VIDA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Soy un Centro de Salud</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Quiero una Cita Médica</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Realizar Diagnóstico</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Home/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>
  );
}

export default App;
