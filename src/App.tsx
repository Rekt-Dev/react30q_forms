import "./styles.css";
import React from "react"
export default function App() {
    
    const getInputs=(value)=>{
        console.log(value)
    }
  return (
    <div className="App">
      <h1>Learning React forms</h1>
      <form>
          
          <input
           type="text" 
          name="name"
          placeholder="Whats your name?"
          onChange={(event) => getInputs(event.target.value)}
          />
          
          <input
           type="date" 
          name="date of birth"
          placeholder="Whats your birthday?"
          />
          
          <input
           type="number" 
          name="fav number"
          placeholder="Whats your fav number?"
          defaultValue="Hello!"
          />
          
          <input
           type="text" 
          name="name"
          placeholder="Whats your pets name?"
          />
          
          <button  
          
          type="submit"
          name="submit">       
           Submit  

          
         
                    
</button>    

          </form>
     
      
    </div>
  );
}
