import { useState } from "react";  

// 실제 서비스라면 uuid 라이브러리 또는 서버에서 발급받은 id 사용 권장
const makeId = () => crypto.randomUUID?.() || String(Date.now() + Math.random());  

export default function TodoList() {   
  const [text, setText] = useState("");   
  const [todos, setTodos] = useState([     
    { id: "t1", title: "산책하기", done: false },     
    { id: "t2", title: "약 복용 체크", done: true },   
  ]);    

  const addTodo = (e) => {     
    e.preventDefault();     
    const title = text.trim();     
    if (!title) return;     
    setTodos((prev) => [{ id: makeId(), title, done: false }, ...prev]);     
    setText("");   
  };    

  const toggleTodo = (id) => {     
    setTodos((prev) =>       
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))     
    );   
  };    

  const removeTodo = (id) => {     
    setTodos((prev) => prev.filter((t) => t.id !== id));   
  };    

  return (     
    <div>       
      <form onSubmit={addTodo}>         
        <input           
          placeholder="할 일"           
          value={text}           
          onChange={(e) => setText(e.target.value)}         
        />         
        <button>추가</button>       
      </form>        

      <ul>         
        {todos.map((t) => (           
          <li key={t.id}>             
            <label style={{ textDecoration: t.done ? "line-through" : "none" }}>               
              <input                 
                type="checkbox"                 
                checked={t.done}                 
                onChange={() => toggleTodo(t.id)}               
              />               
              {t.title}             
            </label>             
            <button onClick={() => removeTodo(t.id)}>삭제</button>           
          </li>         
        ))}       
      </ul>     
    </div>   
  ); 
}