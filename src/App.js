import { useState} from "react";
import * as math from "mathjs";
import './App.css';
import Button from "./components/button";
import Input from "./components/input";

const App = () => {
   const [text,setText] =useState("")
   const [result,setResult] =useState("")

   const addToText = (val) => {
    setText((text) => [...text,val+ " "]);
   }
   const calculateResult = () => {
      const input = text.join("");
      setResult(math.evaluate(input));
   }
   const restInput = () =>{
    setText("");
    setResult(""); 
   };

  return (
    <div className="App">
    
     <div className="calc-wrapper">
      <Input text = {text} result = {result} />
     <div className="row">
     <Button symbol ="7" handleClick={addToText}/>
     <Button  symbol = "8" handleClick={addToText}/>
     <Button symbol = "9" handleClick={addToText}/>
     <Button symbol = "*" handleClick={addToText}/>
     </div>
     <div className="row">
     <Button symbol = "4"handleClick={addToText}/>
     <Button symbol = "5"handleClick={addToText}/>
     <Button symbol = "6" handleClick={addToText}/>
     <Button symbol = "/" handleClick={addToText}/>
     </div>
     <div className="row">
     <Button symbol = "1" handleClick={addToText}/>
     <Button symbol = "2" handleClick={addToText}/>
     <Button symbol = "3" handleClick={addToText}/>
     <Button symbol = "+ " handleClick={addToText} />
     </div>
     <div className="row">
     <Button symbol = "0 " handleClick={addToText}/>
     <Button symbol = "." handleClick={addToText}/>
     <Button symbol = "-" handleClick={addToText}/>
     <Button symbol = "=" color = "orange" handleClick={calculateResult}/>
     </div>
     <Button symbol = "Clear" handleClick={restInput}/>
     </div>
    </div>
  );
};

export default App;
