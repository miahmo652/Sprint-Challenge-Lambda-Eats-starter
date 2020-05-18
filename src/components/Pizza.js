import React, {useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
    .min(2, "Name must be at least 2 characters")
    .required(),
    size: yup.string(),
    red: yup.string(),
    garlic: yup.string(),
    bbq: yup.string(),
    spinach:yup.string(),
    pepperoni:yup.string(),
    chicken:yup.string(),
    pineapple:yup.string(),
    pepper:yup.string(),
    special: yup.string()
})

export default function Pizza(props){
    const [formState, setFormState] = useState({
        name:"",
        size: "",
        red: "",
        garlic: "",
        bbq: "",
        spinach:"",
        pepperoni:"",
        chicken:"",
        pineapple:"",
        pepper:"",
        special: ""
    
    })
    const [error, seterror] = useState({
        name:"",
        size: "",
        red: "",
        garlic: "",
        bbq: "",
        spinach:"",
        pepperoni:"",
        chicken:"",
        pineapple:"",
        pepper:"",
        special: ""
    })
  

    const inputclick = e =>{
        e.persist()
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({...formState, [e.target.name]:e.target.value});
        }
    
    const validate =(e) => { 
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid =>{
            seterror({
                ...error,
                [e.target.name]: ""
            });
          })
          .catch(err =>{
              console.log(err.errors)
              seterror({
                  ...error,
                  [e.target.name]: err.errors[0]
              })
          })
    
    }
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
          .post("https://reqres.in/api/users", formState)
          .then(response => props.people(response.data))
          .catch(err => console.log(err));
      };
    const inputchange = e =>{
        e.persist()
        console.log("Input changed!", e.target.value, e.target.checked);
       validate(e)
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({...formState, [e.target.name]:value});
    }
    return(
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                <h4>Full name</h4>
                 <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputchange}
                    />
                 {error.name.length > 0 ? <p className = "error">{error.name}</p> : null}
                    </label>
            <label htmlFor="size">
               <h4> Choice of size</h4>
                <select value={formState.size} name="size" onChange={inputchange}>
                    <option value=" ">Choose size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
    
                </select>
                </label>
                
    <div className ="sauces">
            <label htmlFor="red">
            
            <h4>Choice of sauce</h4>               
            <input
          type="checkbox"
          name="red"
          value="Original red"
          checked={formState.red}
          onChange={inputclick}
        />
        Original red
            </label>
            <label htmlFor="garlic">
            <input
          type="checkbox"
          name="garlic"
          value="Garlic Ranch"
          checked={formState.garlic}
          onChange={inputclick}
        />
        Garlic Ranch
             </label>
             <label htmlFor="bbq">
            <input
          type="checkbox"
          name="bbq"
          value="BBQ Sauce"
          checked={formState.bbq}
          onChange={inputclick}
        />
        BBQ Sauce
             </label>
             <label htmlFor="spinach">
            <input
          type="checkbox"
          name="spinach"
          value="Spinach alfredo"
          checked={formState.spinach}
          onChange={inputclick}
        />
        Spinach Alfredo
             </label>
    </div>
<div className="toppings">
    <label htmlFor="pepperoni">
        <h4>Toppings</h4>
        <input
          type="checkbox"
          name="pepperoni"
          value="Pepperoni"
          checked={formState.pepperoni}
          onChange={inputclick}
        />
        Pepperoni
    </label>
    <label htmlFor="chicken">
            <input
          type="checkbox"
          name="chicken"
          value="Chicken"
          checked={formState.chicken}
          onChange={inputclick}
        />
        Chicken
    </label>
    <label htmlFor="pineapple">
            <input
          type="checkbox"
          name="pineapple"
          value="Pineapple"
          checked={formState.pineapple}
          onChange={inputclick}
        />
        Pineapple
    </label>
    <label htmlFor="pepper">
            <input
          type="checkbox"
          name="pepper"
          value="Green pepper"
          checked={formState.pepper}
          onChange={inputclick}
        />
        Green Pepper
    </label>
</div>
<br/>
    <label htmlFor="special">
        <h4>Special</h4> 
        
        <textarea
          name="special"
          value={formState.special}
          placeholder="anything else you'd like to add?"
          onChange={inputchange}
        />
    </label>
    <br/>
    <button type="submit">Submit order</button>
</form>
    
    )
}