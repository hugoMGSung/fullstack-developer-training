// UserDetail.jsx (자식)
export function UserDetail({ user }) {   
  if (!user) return <p>사용자를 선택하세요.</p>;   
  return (     
    <div>       
      <h3>{user.name}</h3>       
      <p>연락처: {user.phone}</p>     
    </div>   
  ); 
}  