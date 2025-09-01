import { useState } from "react";

export default function ProfileGood() {
  const [profile, setProfile] = useState({ name: "Lee", age: 70 });

  const correctUpdate = () => {
    setProfile(prev => ({
      ...prev,         // 기존 속성 복사
      age: prev.age + 1 // age만 변경
    }));
  };

  return (
    <div>
      <p>{profile.name} ({profile.age}세)</p>
      <button onClick={correctUpdate}>나이 증가(올바른 방식)</button>
    </div>
  );
}
