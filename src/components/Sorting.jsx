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
        const [sorted, setSorted] = useRecoilState(topListState);
        const [inputValue, setInputValue] = useState('');
        let newSorted = JSON.parse(JSON.stringify(sorted));
           
        const sortItems = () => {
            
             function compare(a, b) {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
             }   
             newSorted.sort(compare);
             console.log(newSorted);
            setSorted(newSorted);
        }
     
            const onChange = (event) => {
                setInputValue(event.target.value);
                console.log(event.target)
                let i = inputValue.toString();
                if(event.target.value == "") {
                    console.log('empty')
                    setSorted(newSorted);}
                else {
                    const filtered = newSorted.filter(item => item.id.includes(i.toLowerCase()));
                 setSorted(filtered);
                } 
             
            }


      
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