// Parent.jsx (부모)
import { useState } from "react"; 
import { UserList } from "./UserList"; 
import { UserDetail } from "./UserDetail";  

export default function Parent() {   
  const [selected, setSelected] = useState(null);   
  const users = [     
    { id: "u1", name: "김영희", phone: "010-1111-2222" },     
    { id: "u2", name: "이철수", phone: "010-3333-4444" },   
  ];   
  return (     
    <div style={{ display: "flex", gap: 24 }}>       
      <UserList users={users} onSelect={setSelected} />       
      <UserDetail user={selected} />     
    </div>   
  ); 
}