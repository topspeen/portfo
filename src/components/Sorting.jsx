import React, {useState} from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {topListState} from './TopList';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Sorting() {
   

      
    return (   
    <ListGroup.Item>
    <div className="container text-center">
  <div className="row">
 <div className="col"><input type="text" value={inputValue} onChange={onChange} /> </div>
 <div className="col"><button onClick={sortItems}>#</button> </div>
 <div className="col">Asset</div>
 <div className="col">Price</div>
 <div className="col">Market Cap</div>
 <div className="col">7d %</div>
 </div>
 </div>
    </ListGroup.Item>
    )
   

  
}