import { useState } from "react";  

export default function LoginForm() {   
  const [email, setEmail] = useState("");   
  const [pwd, setPwd] = useState("");    

  const onSubmit = (e) => {     
    e.preventDefault();     
    // 서버로 로그인 요청 보내기 등…     
    alert(`로그인 시도: ${email}`);   
  };    

  return (     
    <form onSubmit={onSubmit}>       
      <label>         
        Email         
        <input           
          type="email"           
          value={email}           
          onChange={(e) => setEmail(e.target.value)} // 상태가 곧 값           
          required         
        />       
      </label><br/>
      <label>         
        Password         
        <input           
          type="password"           
          value={pwd}           
          onChange={(e) => setPwd(e.target.value)}           
          required         
        />       
      </label><br/>
      <button type="submit">로그인</button>     
    </form>   
  ); 
}