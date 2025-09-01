export default function FormSubmit() {   
  const onSubmit = (e) => {     
    e.preventDefault(); // 폼 제출로 인한 페이지 새로고침 방지    
    alert("제출 처리 로직 실행!");   
  };   
  return (     
    <form onSubmit={onSubmit}>       
      <input name="q" placeholder="검색어" />       
      <button type="submit">검색</button>     
    </form>   
  ); 
}