// UserList.jsx (자식)
export function UserList({ users, onSelect }) {   
  return (     
    <ul>       
      {users.map((u) => (         
        <li key={u.id}>           
          <button onClick={() => onSelect(u)}>{u.name}</button>         
        </li>       
      ))}     
    </ul>   
  ); 
}  