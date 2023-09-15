import React,{useState}from 'react'
import "./styles/Button.css";
const Number = (props) => {
    const { setInc,setDec,value}=props;
    const [inputVal, setInputVal] = useState(1);

    const handleInputChange = (e) => {
      setInputVal(parseInt(e.target.value));
    };
  
    const handleAddClick = (e) => {
      
      
        setInc();
    };
  
    const handleRemoveClick = (e) => {
      
      
        setDec();
      
    };
  

    return (
    <div className="wrapper">
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min="1"
      />
      <span className="input-button add" onClick={handleAddClick}>+</span>
      <span className="input-button remove" onClick={handleRemoveClick}>-</span>
      
    </div>
  )
}

export default Number