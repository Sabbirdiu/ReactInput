import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Todo from './components/todo/Todo';
// import Hooks from './components/todo/Hooks'
import MainForm from './components/splitForm/MainForm';
import Index from './components/registrationform/index';
function App() {
  return (
    <Container className='my-3'>
      <Row>
        <Col>
          <Todo />
          <MainForm />
          <Index />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
