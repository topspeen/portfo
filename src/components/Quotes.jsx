import React from "react";

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                    id: props.id, 
                    name: props.name, 
                    price: "price", 
                    logo: "logo", 
                    marketCap: "marketCap", 
                    sev_d: "7d" 
                    };
    }
    
    componentDidMount() {
        (async() => {
            let res = await fetch('http://localhost:3001');
            let json = await res.json();
           let json_id = props.id
            json = json.data[{json_id}];
            // console.log(json.quote.USD.price);
            console.log(json);
            let json_price = json.quote.USD.price
            let json_marcketcap = json.quote.USD.market_cap
            let json_percent_change_7d = json.quote.USD.percent_change_7d
            let meta_res = await fetch('http://localhost:3001/meta');
            let meta_json = await meta_res.json();
            console.log(meta_json);
            meta_json = meta_json.data[{json_id}].logo
    
            // Create price formatter.
    const price_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });
    
    // Create market cap formatter.
    const market_cap_formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact'
        });
    
        this.setState({id: props.id, 
                       name: props.name, 
                       price: price_formatter.format(json_price), 
                       logo: meta_json, 
                       marketCap: market_cap_formatter.format(json_marcketcap), 
                       sev_d: parseFloat(json_percent_change_7d).toFixed(2)+"%" })
           
    
    }
        )();
    }
    
    render() {
        return (
            <div class="container-md text-center">
            <div class="row">
              <div class="col">{props.name}</div>
              <div class="col">
              <div class="row-sm-6">
                  <img src={this.state.logo} class="img-fluid" alt='logo' /> 
              </div>
              <div class="row-sm-6">  
                  {}
              </div>    
                  </div>
              <div class="col">{this.state.price}</div>
              <div class="col">{this.state.marketCap}</div>
              <div class="col">{this.state.sev_d}</div>
              <div class="col">
              <button 
                          type="button" 
                          className="btn btn__danger"
                          onClick={() => props.deleteCurency({json_id})}
                >
                      Delete <span className="visually-hidden">{props.name}</span>
                    </button>
              </div>
            </div>
          </div>
        )
    }
    
}
export default Quotes;