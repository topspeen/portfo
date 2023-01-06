import React, { Suspense } from 'react';
import TopList from './components/TopList';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import {RecoilRoot} from 'recoil';
import Card from 'react-bootstrap/Card';


function NavigationBar() {
  return(
    <>
    <Container fluid>
    <Navbar bg="light" variant="light">
    
      <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto" defaultActiveKey='#home' variant="tabs">
            <Nav.Link href="#home">Cryptocurrencies</Nav.Link>
            <Nav.Link href="#features">Watchlist</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
          </Nav>
        </Container>
    <Navbar.Text>
            Signed in as: <a href="#login">Daxespen</a>
          </Navbar.Text>
        
      </Navbar>
    </Container>
   
    </>
  )
}


function App(props) {

  return (
    <RecoilRoot>
      <Card 
      border='light'>
      <Card.Body>
        <Card.Title>Get started with Daxespen</Card.Title>
        <Card.Text>
        Browse, create watchlists, monitor cryptocurrency prices and manage portfolio.
        </Card.Text>
      </Card.Body>
    </Card>
      

<div>
  
 
      <NavigationBar />
  

<div className="table-responsive">
            <h2>All Crypto</h2>
 </div>
 <ListGroup variant='flush'>
      <ListGroup.Item>
      <div className="container text-center">
    <div className="row">
   <div className="col">#</div>
   <div className="col">Asset</div>
   <div className="col">Price</div>
   <div className="col">Market Cap</div>
   <div className="col">7d %</div>
   </div>
   </div>
      </ListGroup.Item>
    
    <Suspense fallback={<div>Loading...</div>}>
    
    <TopList />
    </Suspense>
    </ListGroup>
    
    </div>
    </RecoilRoot>
  );
}



export default App;