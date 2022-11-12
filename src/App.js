import React from 'react';
import SelectList from './components/SelectList';
import MainList from './components/MainList';
import './App.css';
import {
  RecoilRoot,
  atom,
} from 'recoil';

// export const ListState = atom({
//   key: 'CurencyList',
//   default: [
//     { id: "1", item: "BTC", isComplete: true },
//     { id: "2", item: "LTC", isComplete: true },
//     { id: "74", item: "DOGE", isComplete: true, },
//     { id: "102", item: "ETH", isComplete: false },
//     { id: "663", item: "DOT", isComplete: false },
//     { id: "189", item: "BNB", isComplete: false },
// ],
// });
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



function App(props) {
  

  return (

    <RecoilRoot>
<div>
<SelectList />
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

    
    <MainList />
    
    </div>
    </div>
    </div>
    </RecoilRoot>
  );
}



export default App;