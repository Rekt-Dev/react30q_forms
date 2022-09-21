import "./styles.css";
import React from "react"
export default function App() {
  return (
    <div className="App">
      <h1>Learning React forms</h1>
      <form>
          
          <input
           type="text" 
          name="name"
          placeholder="Whats your name?"
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
