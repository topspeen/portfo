import React from 'react';
import '../App.css';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import ListGroup from 'react-bootstrap/ListGroup';
import { filteredSortingState } from './Sorting';




// Create price formatter.
const price_formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  });
  
  // Create market cap formatter.
  const market_cap_formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact'
  });

 

const topList = selector({
  key: 'topList',
  get: async () => {
    let response = await fetch('../.netlify/functions/coingecko-api');
    response = await response.json();
    console.log(response)
    return response;
    }
  },
);

export const topListState = atom ({
  key: 'listState',
  default: topList,
});



export default function TopList() {


    const mainList = useRecoilValue(filteredSortingState);
   
    
    return (
  <div>
  {mainList.map((item) => (
      <TopItem key={item.id} item={item} />))}
  </div>
    );
  }
  
  function TopItem({item}) {
  
  return (
    <ListGroup.Item action variant='light' >

    <div className="container text-center">
    <div className="row">
      <div className="col"><img src={item.image.thumb} className="img-fluid" alt='logo' /></div>
      <div className="col">
        <div className="col">
         
        </div>
      <div className="col">
        <div className="row-sm-S6">{item.name}</div> 
      </div>    
          </div>
      <div className="col">{price_formatter.format(item.market_data.current_price.usd)}</div>
      <div className="col">{market_cap_formatter.format(item.market_data.market_cap.usd)}</div>
      <div className="col mobile">
        <span style={{color: item.market_data.price_change_percentage_7d > 0 ? 'green' : 'red' }}>{parseFloat(item.market_data.price_change_percentage_7d).toFixed(2)+"%"}</span>
      </div>
      
            </div>
          </div>
          </ListGroup.Item>
  );
  }
  
 
  
  