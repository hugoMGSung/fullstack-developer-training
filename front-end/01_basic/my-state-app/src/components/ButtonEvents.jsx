export default function ButtonEvents() {   
  const handleClick = (e) => {     
    // e는 SyntheticEvent     
    console.log("클릭 이벤트 발생!", e.type);   
  };   
  return <button onClick={handleClick}>Click me</button>; 
}