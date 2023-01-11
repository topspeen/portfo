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

const sortingStateFilter = atom({
    key: 'sortingStateFilter',
    default: '',
});

export const filteredSortingState = selector({
    key: 'filteredSortingState',
    get: ({get}) => {
        const filter = get(sortingStateFilter);
        const list = get(topListState);

        if(filter == '') return list;
        else return list.filter(Item => Item.id.includes(filter));
    },
});

 export default function Sorting() {
    const [filter, setFilter] = useRecoilState(sortingStateFilter);

    const updateFilter = ({target: {value}}) => setFilter(value);

      
    return (   
    <ListGroup.Item>
    <div className="container text-center">
  <div className="row">
 <div className="col"><input type="text" value={filter} onChange={updateFilter} /> </div>
 {/* <div className="col"><button onClick={sortItems}>#</button> </div> */}
 <div className="col">Asset</div>
 <div className="col">Price</div>
 <div className="col">Market Cap</div>
 <div className="col">7d %</div>
 </div>
 </div>
    </ListGroup.Item>
    )
   

  
}