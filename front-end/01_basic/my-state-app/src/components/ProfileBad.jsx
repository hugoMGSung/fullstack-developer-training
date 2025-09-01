import { useState } from "react";

export default function ProfileBad() {
  const [profile, setProfile] = useState({ name: "Lee", age: 70 });

  const wrongUpdate = () => {
    profile.age = profile.age + 1; // 상태 직접 수정 ❌
    setProfile(profile);           // 같은 객체를 다시 넣음
  };

  return (
    <div>
      <p>{profile.name} ({profile.age}세)</p>
      <button onClick={wrongUpdate}>나이 증가(잘못된 방식)</button>
    </div>
  );
}
