import React, {useState} from 'react';
import { ListState } from '../App';
import {
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Button from 'react-bootstrap/Button';
import Select from 'react-bootstrap/FormSelect';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

const filterToSelect = selector({
  key: 'filterSelect',
  get: ({get}) => {
    const list = get(ListState);

        return list.filter((item) => !item.isComplete);
   
    }
  },
);





function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function SelectList() {
 
  const [selectList, setSelectList] = useRecoilState(ListState);
   //toggle
  function toggleItemCompletion(i) {
    console.log(`i from toggle ${i}`)
    const index = selectList.findIndex((listItem) => listItem.item === i);
    console.log(`selectlist from toggle ${JSON.stringify(selectList)}`)
    console.log(`index from toggle ${index}`)
    const item = selectList[index];
    console.log(`item from toggle ${JSON.stringify(item)}`)
    const newList = replaceItemAtIndex(selectList, index, {
      ...item,
      isComplete: !item.isComplete,
  });
  setSelectList(newList);
  };

  const [i, setI] = useState('');
    const filteredSelectList = useRecoilValue(filterToSelect);
    const newSelectList = filteredSelectList.map((item) => (
      <SelectItem key={item.id} name={item.item}/>
    ));



    function handleChange(e) {
      setI(e.target.value);
      }
  
      function handleSubmit(e) {
       e.preventDefault();
      toggleItemCompletion(i);
      setI('')
      }


    return (
  <Form onSubmit={handleSubmit} >
    
      <Container fluid>
      <Form.Label>Add cryptocurency</Form.Label>
    <Row>
      <Col></Col>
      <Col>    <Select 
    onChange={handleChange}
     value={i}

    >
      <option value="" selected></option> 
      {newSelectList}
    </Select>
    </Col>
      <Col><Button variant="secondary" type='submit'>Add</Button></Col>
    </Row>
  </Container>

  </Form>
    );
  }
  
  function SelectItem(props) {
  return (
    <>
      <option value={props.name}> {props.name}
      </option>
    </>
  );
  }
  
  


export default SelectList;