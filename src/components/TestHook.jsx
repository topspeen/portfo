import React, {useState, useEffect} from "react";

export default function TestHook(props) {
  
   const [item, setItem] = useState({ 
                                quotes: 'curency',
                                price: 'price',
                                meta: 'meta',
                                market_cap: 'market_cap',
                                percent_change_7d: 'percent_change_7d' 
                                });

// Create price formatter.
const price_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });
    
    // Create market cap formatter.
    const market_cap_formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact'
        });

       useEffect(() => {
        console.log('use effect');
        (async() => {
            let res = await fetch('http://localhost:3001');
            let json = await res.json();
            json = json.data[props.id];
            let meta_res = await fetch('http://localhost:3001/meta');
                    let meta_json = await meta_res.json();
                    // console.log(meta_json);
                    meta_json = meta_json.data[props.id].logo

                    
              
           setItem({
            quotes: json.name,
            price: json.quote.USD.price,
            meta: meta_json,
            market_cap: json.quote.USD.market_cap,
            percent_change_7d: json.quote.USD.percent_change_7d 
           }   ); 
        })
        ();
    }, [])



    return(
        <div className="container-md text-center">
            <div className="row">
              <div className="col">{item.quotes}</div>
              <div className="col">
              <div className="row-sm-6">
                  <img src={item.meta} className="img-fluid" alt='logo' /> 
              </div>
              <div className="row-sm-6">  
                  {}
              </div>    
                  </div>
              <div className="col">{price_formatter.format(item.price)}</div>
              <div className="col">{market_cap_formatter.format(item.market_cap)}</div>
              <div className="col">
                <span style={{color: item.percent_change_7d > 0 ? 'green' : 'red' }}>{parseFloat(item.percent_change_7d).toFixed(2)+"%"}</span>
              </div>
              <div className="col">
              <button 
                          type="button" 
                          classNameName="btn btn__danger"
                          onClick={() => props.deleteCurency(props.id)}
                >
                      Delete 
                    </button>
              </div>
            </div>
          </div>     
    )
}