import React, {useState, useEffect} from 'react';
import '../App.css';
import {
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ListState } from '../App';

// Create price formatter.
const price_formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  });
  
  // Create market cap formatter.
  const market_cap_formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact'
  });


export default function MainList() {
   

    const mainList = useRecoilValue(filterToMainList);
    
    return (
  <div>
  {mainList.map((item) => (
      <MainItem key={item.id} item={item} />))}
  </div>
    );
  }
  
  function MainItem({item}) {
    const [mainList, setMainList] = useRecoilState(ListState);
    const index = mainList.findIndex((i) => i === item);
  
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(mainList, index, {
        ...item,
        isComplete: !item.isComplete,
    });
    console.log(JSON.stringify(newList))
    setMainList(newList);
  };
  
   //fetching data from server and state to render it
   const [i, setI] = useState({ 
    curency: 'curency',
    price: 'price',
    meta: 'meta',
    market_cap: 'market_cap',
    percent_change_7d: 'percent_change_7d' 
    });



useEffect(() => {
console.log('use effect');
(async() => {
let res = await fetch('http://localhost:3001');
let json = await res.json();
json = json.data[item.id];
let meta_res = await fetch('http://localhost:3001/meta');
let meta_json = await meta_res.json();
// console.log(meta_json);
meta_json = meta_json.data[item.id].logo



setI({
quotes: json.name,
price: json.quote.USD.price,
meta: meta_json,
market_cap: json.quote.USD.market_cap,
percent_change_7d: json.quote.USD.percent_change_7d 
}   ); 
})
();
}, [])

  
  return (
    // <div>
    //   {item.item}
    //   <button onClick={toggleItemCompletion}>X</button>
    // </div>
    <div className="container-md text-center">
    <div className="row">
      <div className="col">{i.curency}</div>
      <div className="col">
      <div className="row-sm-6">
          <img src={i.meta} className="img-fluid" alt='logo' /> 
      </div>
      <div className="row-sm-6">  
          {}
      </div>    
          </div>
      <div className="col">{price_formatter.format(i.price)}</div>
      <div className="col">{market_cap_formatter.format(i.market_cap)}</div>
      <div className="col">
        <span style={{color: i.percent_change_7d > 0 ? 'green' : 'red' }}>{parseFloat(i.percent_change_7d).toFixed(2)+"%"}</span>
      </div>
      <div className="col">
              <button 
                          type="button" 
                          className="btn btn__danger"
                          onClick={toggleItemCompletion}
                >
                      Delete 
                    </button>
              </div>
            </div>
          </div>

  );
  }
  
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  const filterToMainList = selector({
    key: 'filterToMainList',
    get: ({get}) => {
      const list = get(ListState);
  
          return list.filter((item) => item.isComplete);
     
      }
    },
  );