import React from 'react';


export default function Customers(props){
 
    return(
        <div>
            {props.client.map(obj=>
                <div className="choices" key={obj.name}> 
                     <h2>{obj.name}</h2> 
                     <div>
                     <h4>Size: </h4>
                    <p>{obj.size}</p>
                    <h4>Sauce: </h4>
                    <p>{obj.red}</p>
                    <p>{obj.garlic}</p>
                    <p>{obj.bbq}</p>
                    <p>{obj.spinach}</p>
                    <h4>Toppings: </h4>
                    <p>{obj.pepperoni}</p>
                    <p>{obj.chicken}</p>
                    <p>{obj.pineapple}</p>
                    <p>{obj.pepper}</p>
                    <h4>Special instructions</h4>
                    <p>{obj.special}</p>
                    </div>
                </div>
            )}
        </div>
    )

}