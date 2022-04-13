import React, {useState} from 'react';
import Icon from './components/icon';
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';






const itemArray = new Array(16).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const turn = () => {
    
  }
 
  
  return (
    <Container className="cont p-5">
      <Row className='row'>
        <Col md={6} className="offset-md-3">
          <h1 className="text-warning text-center">
            {isCross ? "cross" : "circle"} turns 
          </h1>

          <div className="grid">
          {itemArray.map((item, i) => (
            <Card color="warning">
            <CardBody className="box" onClick={turn}>
            <Icon name={item} key={i} index={i}/>
            </CardBody>
          </Card>
          ))}        
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}


export default App;