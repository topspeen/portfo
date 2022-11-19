import React, { Suspense } from 'react';
import SelectList from './components/SelectList';
import MainList from './components/MainList';
import TopList from './components/TopList';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import {
  RecoilRoot,
  atom,
} from 'recoil';
import Card from 'react-bootstrap/Card';

export const ListState = atom({
  key: 'CurencyList',
  default: [
    { id: "1", item: "BTC", price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d", isComplete: true, },
    { id: "2", item: "LTC",  price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d", isComplete: true, },
    { id: "74", item: "DOGE",  price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d",  isComplete: true, },
    { id: "1027", item: "ETH",  price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d",  isComplete: false, },
    { id: "6636", item: "DOT",  price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d",  isComplete: false, },
    { id: "1839", item: "BNB",  price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d",  isComplete: false, },
],
});

// // Create price formatter.
// const price_formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   });
  
//   // Create market cap formatter.
//   const market_cap_formatter = new Intl.NumberFormat('en-US', {
//   notation: 'compact'
//   });

// let dataFromCoingecko;
// (async() => {
//   let res = await fetch('http://localhost:3001/top');
//   let json = await res.json();
//   dataFromCoingecko = await json;
//   console.log(dataFromCoingecko)
// })();
// //fetch coingecko data and create atom with loadable
// function TopCoingecko() {
//   const TopState = atom({
//     key: 'TopState',
//     default: topStateLoadable,
//   })
  
//   const topStateLoadable = useRecoilValueLoadable(dataFromCoingecko)
//   const listTop = useRecoilValue(TopState)


//   return(
//     <div>
//     {listTop.map((item) => (
//         <TopItem key={item.id} item={item} />))}
//     </div>
//   )
// }

// function TopItem({item}) {
//   return(
//     <div className="container-md text-center">
//     <div className="row">
//       <div className="col">{item.id}</div>
//       <div className="col">
//       <div className="row-sm-6">
//           <img src={item.image.small} className="img-fluid" alt='logo' /> 
//       </div>
//       <div className="row-sm-6">  
//           {}
//       </div>    
//           </div>
//       <div className="col">{price_formatter.format(item.matket_data.current_price.usd)}</div>
//       <div className="col">{market_cap_formatter.format(item.matket_data.market_cap.usd)}</div>
//       <div className="col">
//         <span style={{color: item.matket_data.price_change_percentage_7d  > 0 ? 'green' : 'red' }}>{parseFloat(item.matket_data.price_change_percentage_7d).toFixed(2)+"%"}</span>
//       </div>
      
//             </div>
//           </div>
//   )
// }

function App(props) {


  

  return (
    <RecoilRoot>
      <Card 
      border='light'
      // key="Secondary"
      // bg="secondary"
      // text="white"
      style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Get started with PortFo</Card.Title>
        <Card.Text>
        Browse, create watchlists, monitor cryptocurency prices and manage portfolio.
        </Card.Text>
      </Card.Body>
    </Card>
      

<div>
  <Container fluid>
    <Row>
      <Col></Col>
      <Col></Col>
      <Col><SelectList /></Col>
    </Row>
  </Container>

<div className="table-responsive">
            <h2>All Crypto</h2>
    <div className="container text-center">
    <div className="row">
   <div className="col">#</div>
   <div className="col">Asset</div>
   <div className="col">Price</div>
   <div className="col">Market Cap</div>
   <div className="col">7d %</div>
   <div className="col"></div>
 </div>

    
    <Suspense fallback={<div>Loading...</div>}>
    <TopList />
    </Suspense>
    
    

    
    
    </div>
    </div>
    </div>
    </RecoilRoot>
  );
}



export default App;