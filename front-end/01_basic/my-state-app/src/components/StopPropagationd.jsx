export default function StopPropagationd() {
  const handleParentClick = () => {
    alert("부모 div 클릭됨!");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단!
    alert("자식 버튼 클릭됨! (부모로 안 올라감)");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ border: "2px solid red", padding: 20 }}
    >
      <button onClick={handleChildClick}>자식 버튼</button>
    </div>
  );
}
