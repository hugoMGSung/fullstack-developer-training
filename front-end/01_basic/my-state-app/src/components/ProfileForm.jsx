import { useState } from "react";  

export default function ProfileForm() {   
  const [form, setForm] = useState({     
    name: "",     
    age: "",     
    gender: "female",   
  });    

  const handleChange = (e) => {     
    const { name, value } = e.target; // name 특성으로 분기 제거     
    setForm((prev) => ({ ...prev, [name]: value }));   
  };    

  const handleSubmit = (e) => {     
    e.preventDefault();     
    // 검증/전송…     
    alert(JSON.stringify(form, null, 2));   
  };    

  return (     
    <form onSubmit={handleSubmit}>       
      <label>         
        이름         
        <input name="name" value={form.name} onChange={handleChange} />       
      </label><br />
      <label>         
        나이         
        <input name="age" value={form.age} onChange={handleChange} />       
      </label><br />
      <label>         
        성별         
        <select name="gender" value={form.gender} onChange={handleChange}>           
          <option value="female">여성</option>           
          <option value="male">남성</option>           
          <option value="other">기타</option>         
        </select>       
      </label><br />
      <button>저장</button>     
    </form>   
  ); 
}