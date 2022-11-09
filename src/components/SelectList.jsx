import React, {useState} from 'react';
import { todoListState } from '../App';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

function SelectList() {
    const selectList = useRecoilValue(filteredSelectListState);
    const newSelectList = selectList.map((selectItem) => (
      <SelectItem key={selectItem.id} item={selectItem} />
    ));
  
    return (
  <div>
  {newSelectList}
  </div>
      
    
    );
  }
  
  function SelectItem({item}) {
    const [selectList, setSelectList] = useRecoilState(todoListState);
    const index = selectList.findIndex((listItem) => listItem === item);
  
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(selectList, index, {
        ...item,
        isComplete: !item.isComplete,
    });
    setSelectList(newList);
  };
  
  
  return (
    <div>
      {item.id}
      <button onClick={toggleItemCompletion}>X</button>
    </div>
  );
  }
  
  
  const filteredSelectListState = selector({
    key: 'FilteredSelectList',
    get: ({get}) => {
      const list = get(todoListState);
  
          return list.filter((item) => !item.isComplete);
     
      }
    },
  );

  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

export default SelectList;