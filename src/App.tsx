import "./styles.css";
import React from "react"
export default function App() {
    
    const getInputs=(value:any)=>{
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
          onChange={(event) => getInputs(event.target.value, event.target.name)}
          />
          
          <input
           type="date" 
          name="date of birth"
          placeholder="Whats your birthday?"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}

          />
          
          <input
           type="file" 
          name="file"
          placeholder="Upload your best nude?"
          defaultValue="Hello"
        onChange={(event) => getInputs(event.target.value, event.target.name)}

          />
          
          <input
           type="text" 
          name="name"
          placeholder="Whats your pets name?"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}

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
