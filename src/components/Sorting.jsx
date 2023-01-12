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
import { Button, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './sorting.css'

const sortingStateFilter = atom({
    key: 'sortingStateFilter',
    default: '',
});

const toggleFilter = atom({
    key: 'toggleFilter',
    default: false,
});

export const filteredSortingState = selector({
    key: 'filteredSortingState',
    get: ({get}) => {
        const toggle = get(toggleFilter);
        const filter = get(sortingStateFilter);
        const list = get(topListState);
        let newFilter = filter.toLocaleLowerCase();
        console.log(toggle);

        switch (toggle) {
            case false: {
                if(filter == '') return list;
                else return list.filter(Item => Item.id.includes(newFilter));
            }
            case true: {
                let copyList = JSON.parse(JSON.stringify(list));
                if(filter == '') return copyList.sort((a, b) => (a.id > b.id) ? 1 : ((a.id < b.id) ? -1 : 0));
                else return copyList.sort((a, b) => (a.id > b.id) ? 1 : ((a.id < b.id) ? -1 : 0)).filter(Item => Item.id.includes(newFilter));
            }
        }
        
    },
});

 export default function Sorting() {
    const [filter, setFilter] = useRecoilState(sortingStateFilter);
    const [toggle, setToggle] = useRecoilState(toggleFilter);

    const updateFilter = ({target: {value}}) => setFilter(value);
    const updateToggle = () => setToggle(!toggle);


      
    return (   
    <ListGroup.Item>
    <div className="container text-center">
        
  <div className="row">
  <div className="col">
    <Form>
        <Form.Group className='mb-1'>
        <Form.Control type="text" value={filter} onChange={updateFilter} placeholder="Search" /> 

        </Form.Group>

    </Form>
    </div>
 <div className="col"></div>
 <div className="col"></div>
  </div>
  <div className="row">
 <div className="col"></div>
 <div className="col"><Button variant='link' onClick={updateToggle}>Asset</Button> </div>
 <div className="col">Price</div>
 <div className="col">Market Cap</div>
 <div className="col">7d %</div>
 </div>
 </div>
    </ListGroup.Item>
    )
   

  
}