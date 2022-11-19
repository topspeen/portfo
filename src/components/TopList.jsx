import React from 'react';
import '../App.css';
import {
  selector,
  useRecoilValue,
} from 'recoil';


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
    let response = await fetch('http://localhost:3001/top');
    response = await response.json();
    console.log(response)
    return response;
    }
  },
);

export default function TopList() {

    const mainList = useRecoilValue(topList);
    console.log(`mainlist ${mainList}`)
    
    return (
  <div>
  {mainList.map((item) => (
      <TopItem key={item.id} item={item} />))}
  </div>
    );
  }
  
  function TopItem({item}) {
  
  return (

    <div className="container-md text-center">
    <div className="row">
      <div className="col">{item.id}</div>
      <div className="col">
      <div className="row-sm-6">
          <img src={item.image.small} className="img-fluid" alt='logo' /> 
      </div>
      <div className="row-sm-6">  
          {}
      </div>    
          </div>
      <div className="col">{price_formatter.format(item.market_data.current_price.usd)}</div>
      <div className="col">{market_cap_formatter.format(item.market_data.market_cap.usd)}</div>
      <div className="col">
        <span style={{color: item.market_data.price_change_percentage_7d > 0 ? 'green' : 'red' }}>{parseFloat(item.market_data.price_change_percentage_7d).toFixed(2)+"%"}</span>
      </div>
      
            </div>
          </div>

  );
  }
  
 
  
  