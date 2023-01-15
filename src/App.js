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
import {RecoilRoot,
useRecoilState} from 'recoil';
import Card from 'react-bootstrap/Card';
import Sorting from './components/Sorting';
import { sortingStateFilter } from './components/Sorting';
import Form from 'react-bootstrap/Form';



function NavigationBar() {
  
  const [filter, setFilter] = useRecoilState(sortingStateFilter);

    const updateFilter = ({target: {value}}) => setFilter(value);

  return(
    <>
  
      <Container className='nav-container' >
          <Nav className='flex-column flex-sm-row' 
          defaultActiveKey='#home' 
          variant="tabs"
          onSelect={(selectedKey) => alert(`page ${selectedKey} still in development`)}
          >
            <Nav.Item>
                <Nav.Link className='nav-elem' href="#home">Cryptocurrencies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='nav-elem' eventKey="watchlist">Watchlist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link className='nav-elem' eventKey="portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Form.Control type="text" value={filter} onChange={updateFilter} placeholder="Search" />
            </Nav.Item>
          </Nav>
        
   
    </Container>
   
    </>
  )
}


function App() {

  return (
    <RecoilRoot>
        {/* <Navbar  bg="light" variant="light">
    <Navbar.Text className='ml-auto'>
            Signed in as: <a href="#login">Daxespen</a>
          </Navbar.Text>
      </Navbar> */}
      <h>Signed in as: <a href="#login">Daxespen</a></h>
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