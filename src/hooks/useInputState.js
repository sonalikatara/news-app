import { useState } from "react";

/* This hook has functions to manage state and handle changes in the Input ELements of a form */

function InputState(initialValue){
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handleValueChange, resetValue];
};
export default InputState;