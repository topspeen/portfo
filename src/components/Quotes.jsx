
import React from 'react';

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quotes:{},
                       price: 'price',
                        meta: 'meta',
                        market_cap: 'market_cap',
                        percent_change_7d: 'percent_change_7d' };
    }

    

    componentDidMount() {
        (async() => {
            let res = await fetch('http://localhost:3001');
            let json = await res.json();
            json = JSON.stringify(json.data);
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
      
        return ( <div class="table-responsive">
            <h2>All Crypto</h2>
            
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Asset</th>
                            <th scope="col">Price</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">7d %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,001</td>
                            <td><img src={this.state.meta} class="img-fluid" alt='logo' /> {this.state.quotes[1].name}</td>
                            <td>{this.state.price}</td>
                            <td>{this.state.market_cap}</td>
                            <td>{this.state.percent_change_7d}</td>
                        </tr>

                        </tbody>
                </table>
            </div>











            
            
           
           
            );
    }
}

export default Quotes;