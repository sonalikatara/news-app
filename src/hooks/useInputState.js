import { useState } from "react";

export default (initialValue)=>{
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handleValueChange, resetValue];
};
