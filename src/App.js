import React, {useState} from 'react';
import SelectList from './components/SelectList';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const todoListState = atom({
  key: 'CurencyList',
  default: [
    { id: "1", item: "BTC", isComplete: true },
    { id: "2", item: "LTC", isComplete: true },
    { id: "74", item: "DOGE", isComplete: true },
    { id: "100", item: "DOGE", isComplete: false },
    { id: "200", item: "DOGE", isComplete: false },
],
});

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const newTodoList = todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} />
  ));

  return (
<div>
{newTodoList}
</div>
    
  
  );
}

function TodoItem({item}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);


  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
  });
  setTodoList(newList);
};


return (
  <div>
    {item.item}
    <button onClick={toggleItemCompletion}>X</button>
  </div>
);
}

const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const list = get(todoListState);

        return list.filter((item) => item.isComplete);
   
    }
  },
);

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function App() {
  

  return (
    <RecoilRoot>
      <table>
        <tr>
          <td><TodoList /></td>
          <td><SelectList /></td>
        </tr>
      </table>
        
    </RecoilRoot>
  );
}


   


export default App;