import React from 'react';


export default function Customers(props){
 
    return(
        <div>
            {props.client.map(obj=>
                <div> 
                     <h2>{obj.name}</h2> 
                    <p>{obj.size}</p>
                    <p>{obj.red}</p>
                    <p>{obj.garlic}</p>
                    <p>{obj.bbq}</p>
                    <p>{obj.spinach}</p>
                    <p>{obj.pepperoni}</p>
                    <p>{obj.chicken}</p>
                    <p>{obj.pineapple}</p>
                    <p>{obj.pepper}</p>
                    <p>{obj.special}</p>
      
                </div>
            )}
        </div>
    )

}