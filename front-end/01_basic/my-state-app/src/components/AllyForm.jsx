import { useRef } from "react";  

export default function AllyForm() {   
  const inputRef = useRef(null);    

  const onKeyDown = (e) => {     
    if (e.key === "Enter") {       
      e.preventDefault();       
      // 다음 필드로 포커스 이동       
      inputRef.current?.focus();     
    }   
  };    

  return (     
    <div>       
      <label htmlFor="first">First</label>       
      <input id="first" onKeyDown={onKeyDown} />       
      <label htmlFor="second">Second</label>       
      <input id="second" ref={inputRef} />     
    </div>   
  ); 
}