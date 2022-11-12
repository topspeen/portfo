import React from 'react';
import '../App.css';
import {
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ListState } from '../App';


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
  
  
  return (
    // <div>
    //   {item.item}
    //   <button onClick={toggleItemCompletion}>X</button>
    // </div>
    <div className="container-md text-center">
            <div className="row">
              <div className="col">{item.item}</div>
              <div className="col">
              <div className="row-sm-6">
                  <img src={item.item} className="img-fluid" alt='logo' /> 
              </div>
              <div className="row-sm-6">  
                  {}
              </div>    
                  </div>
              <div className="col">{item.price}</div>
              <div className="col">{item.marketCap}</div>
              <div className="col">{item.sev_d}</div>
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