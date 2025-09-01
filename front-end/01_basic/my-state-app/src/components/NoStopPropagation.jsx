export default function NoStopPropagation() {
  const handleParentClick = () => {
    alert("부모 div 클릭됨!");
  };

  const handleChildClick = () => {
    alert("자식 버튼 클릭됨!");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ border: "2px solid blue", padding: 20 }}
    >
      <button onClick={handleChildClick}>자식 버튼</button>
    </div>
  );
}