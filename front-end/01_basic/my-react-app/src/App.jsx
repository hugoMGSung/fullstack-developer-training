import './App.css'

import { useState } from "react";

// UserCard 컴포넌트: props로 받은 초기 나이를 state로 관리
function UserCard(props) {
  const [age, setAge] = useState(props.age);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "220px",
        borderRadius: "10px",
        margin: "8px",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{props.name}</h3>
      <p style={{ margin: "0 0 12px" }}>나이: {age}</p>
      <button onClick={() => setAge(age + 1)}>한 살 더 먹기</button>
    </div>
  );
}

// App 컴포넌트: UserCard 사용 예시
export default function App() {
  return (
    <main style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginTop: 0 }}>Hello, React!</h1>
      <p style={{ color: "#666" }}>아래 버튼을 눌러 나이를 증가시켜 보세요.</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {/* 사용 예시 */}
        <UserCard name="홍길동" age={20} />
        {/* 필요하면 카드 더 추가 가능 */}
        {/* <UserCard name="김영희" age={32} /> */}
      </section>
    </main>
  );
}