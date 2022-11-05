import React from "react";
import { useState } from "react";
const REMAIN_DATA = [
    { id: "1027", name: "ETH" },
    { id: "6636", name: "DOT" },
    { id: "1839", name: "BNB" }
];



export default function Form(props) {
    function AddAsset (props) {
        return( 
      <option value={props.id}>{props.name}</option>
    )
    }

    const addAssetList = REMAIN_DATA.map((curency) => (
        <AddAsset id={curency.id} name={curency.name} key={curency.id} />
    ) );
    
    const [id, setId] = useState('');

    function handleChange(e) {
         setId(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addCurency(id);
        setId('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <select 
        onChange={handleChange}
        value={id}
        className="form-select" 
        aria-label="Default select example"
        >
        <option selected>Add Asset</option>
         {addAssetList}

        </select>
        <button type="submit" classNameName="btn btn__primary btn__lg">
          Add
        </button>
        </form>
        
    )
}