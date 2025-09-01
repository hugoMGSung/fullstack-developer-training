import { useCallback, useMemo, useState } from "react";  

function Expensive({ n }) {   
  // 아주 비싼 계산이 있다고 가정   
  const total = useMemo(() => {     
    let s = 0;     
    for (let i = 0; i < 5e6; i++) s += i % (n + 1);  // 500만 번 반복하는 계산!  
    return s;   
  }, [n]);   
  return <p>계산 결과: {total}</p>; 
}  

export default function OptimizeDemo() {   
  const [n, setN] = useState(1000);   
  const [clicks, setClicks] = useState(0);    

  const onClick = useCallback(() => setClicks((c) => c + 1), []);   
  // onClick은 의존성이 없어 재생성되지 않음 → 자식 메모이제이션 시 유리    

  return (     
    <>       
      <label>         
        N         
        <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />       
      </label>       
      <button onClick={onClick}>clicked: {clicks}</button>       
      <Expensive n={n} />     
    </>   
  ); 
}