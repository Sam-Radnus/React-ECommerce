import React,{useState}from 'react'
import "./styles/Button.css";
const Number = (props) => {
    const { setInc,setDec}=props;
    const [inputVal, setInputVal] = useState(1);

    const handleInputChange = (e) => {
      setInputVal(parseInt(e.target.value) || 1);
    };
  
    const handleAddClick = (e) => {
      
        setInputVal(inputVal + 1);
        setInc();
    };
  
    const handleRemoveClick = (e) => {
      if (inputVal > 1) {
        setInputVal(inputVal - 1);
        setDec();
      }
    };
  

    return (
    <div className="wrapper">
      <input
        type="number"
        value={inputVal}
        onChange={handleInputChange}
        min="1"
      />
      <span className="input-button add" onClick={handleAddClick}>+</span>
      <span className="input-button remove" onClick={handleRemoveClick}>-</span>
      
    </div>
  )
}

export default Number