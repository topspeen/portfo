import './App.css';
import React from 'react';
let data


function Curency(props) {
    
   

   async  function fetchData() { 
    const res = await fetch('http://localhost:3001/', {
       headers: {
           'Access-Control-Allow-Origin': '*'
       }
    })

    data = await res.json()
    data = await data.data[1].name
    
   console.log(data)
   // 
}
fetchData();

return <div>{props.name}</div>;
}

   
function App() {
  

        return ()
            
}

  export default App;