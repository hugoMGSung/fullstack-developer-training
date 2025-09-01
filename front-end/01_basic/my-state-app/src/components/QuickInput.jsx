import { useRef } from "react";  

export default function QuickInput() {   
  const ref = useRef(null);    

  const onSubmit = (e) => {     
    e.preventDefault();     
    alert(`입력값: ${ref.current.value}`);   
  };    

  return (     
    <form onSubmit={onSubmit}>       
      <input ref={ref} placeholder="아무거나" />       
      <button>확인</button>     
    </form>   
  ); 
}
