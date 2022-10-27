
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quotes: 'quotes',
                       price: 'price',
                        meta: 'meta' };
    }

    

    componentDidMount() {
        (async() => {
            let res = await fetch('http://localhost:3001');
            let json = await res.json();
            json = json.data[1];
            // console.log(json.quote.USD.price);
            let json_price = json.quote.USD.price
            let meta_res = await fetch('http://localhost:3001/meta');
            let meta_json = await meta_res.json();
            console.log(meta_json.data[1].logo);
            meta_json = meta_json.data[1].logo
            this.setState({quotes: json,
                        price: json_price,
                        meta: meta_json })                         
        })();
   
    }

   
    render() {
      
        return ( 
            <div>
            <h1> Hello, world! </h1> 
           <div>{this.state.quotes.name} {this.state.price} <img src={this.state.meta} alt='logo' /> </div> 
            </div> 
            );
    }
}

export default Main;