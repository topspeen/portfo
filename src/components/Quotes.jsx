
import React from 'react';

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quotes: 'curency',
                       price: 'price',
                        meta: 'meta',
                        market_cap: 'market_cap',
                        percent_change_7d: 'percent_change_7d' };
    }

    

    componentDidMount() {
        (async() => {
            let res = await fetch('http://localhost:3001');
            let json = await res.json();
            json = json.data[1];
            // console.log(json.quote.USD.price);
            console.log(json);
            let json_price = json.quote.USD.price
            let json_marcketcap = json.quote.USD.market_cap
            let json_percent_change_7d = json.quote.USD.percent_change_7d
            let meta_res = await fetch('http://localhost:3001/meta');
            let meta_json = await meta_res.json();
            console.log(meta_json);
            meta_json = meta_json.data[1].logo

            // Create price formatter.
    const price_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    // Create market cap formatter.
    const market_cap_formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact'
        });
  
  
            this.setState({quotes: json,
                        price: price_formatter.format(json_price),
                        meta: meta_json,
                        market_cap: market_cap_formatter.format(json_marcketcap),
                        percent_change_7d: parseFloat(json_percent_change_7d).toFixed(2)+"%" })                         
        })();
        
    }

   
    render() {
      
        return ( <div>
            
            <div class="container-md text-center">
  <div class="row">
    <div class="col">{this.props.name}</div>
    <div class="col">
    <div class="row-sm-6">
        <img src={this.state.meta} class="img-fluid" alt='logo' /> 
    </div>
    <div class="row-sm-6">  
        {this.state.quotes.name}
    </div>    
        </div>
    <div class="col">{this.state.price}</div>
    <div class="col">{this.state.market_cap}</div>
    <div class="col">{this.state.percent_change_7d}</div>
  </div>
</div>
                   
            </div>
            );
    }
}

export default Quotes;