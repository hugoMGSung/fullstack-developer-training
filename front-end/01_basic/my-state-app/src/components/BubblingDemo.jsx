export default function BubblingDemo() {   
  return (     
    <div       
      onClick={() => console.log("부모 onClick (버블링)")}       
      onClickCapture={() => console.log("부모 onClickCapture (캡처)")}       
      style={{ padding: 16, border: "1px solid #999" }}     
    >       
      <button onClick={() => console.log("자식 onClick")}>Child</button>     
    </div>   
  ); 
}