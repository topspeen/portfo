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
import Sorting from './components/Sorting';


function NavigationBar() {
  return(
    <>
    <Container fluid className='nav'>
    <Navbar bg="light" variant="light">
    
      <Container className='nav-container'>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className='flex-column flex-sm-row' defaultActiveKey='#home' variant="tabs">
            <Nav.Link className='nav-elem' href="#home">Cryptocurrencies</Nav.Link>
            <Nav.Link className='nav-elem' href="#features">Watchlist</Nav.Link>
            <Nav.Link className='nav-elem' href="#pricing">Portfolio</Nav.Link>
            <Nav.Link className='nav-elem' href="#pricing">Portfolio</Nav.Link>
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


function App() {

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
  


 <ListGroup variant='flush'>
 <Sorting />
    
    <Suspense fallback={<div>Loading...</div>}>
    
    <TopList />
    </Suspense>
    </ListGroup>
    
    </div>
    </RecoilRoot>
  );
}



export default App;