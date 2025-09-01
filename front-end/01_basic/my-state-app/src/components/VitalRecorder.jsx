import { useMemo, useState } from "react";  

function classifyBP(sbp, dbp) {   
  if (sbp >= 140 || dbp >= 90) return "고혈압 의심";   
  if ((sbp >= 120 && sbp <= 139) || (dbp >= 80 && dbp <= 89)) return "주의 필요";   
  return "정상 범위"; 
}  

const makeId = () => crypto.randomUUID?.() || String(Date.now() + Math.random());  

export default function VitalRecorder() {   
  const [form, setForm] = useState({     
    sbp: "", // 수축기     
    dbp: "", // 이완기     
    pulse: "",     
    at: "", // YYYY-MM-DDTHH:mm (datetime-local)   
  });   
  const [records, setRecords] = useState([]);    

  const handleChange = (e) => {     
    const { name, value } = e.target;     
    // 숫자 필드는 숫자만 허용     
    if (["sbp", "dbp", "pulse"].includes(name)) {       
      const v = value.replace(/[^\d]/g, "");       
      setForm((prev) => ({ ...prev, [name]: v }));     
    } else {       
      setForm((prev) => ({ ...prev, [name]: value }));     
    }   
  };    

  const status = useMemo(() => {     
    const sbp = Number(form.sbp);     
    const dbp = Number(form.dbp);     
    if (!sbp || !dbp) return "입력 대기";     
    return classifyBP(sbp, dbp);   
  }, [form.sbp, form.dbp]);    

  const canSubmit = useMemo(() => {     
    const sbp = Number(form.sbp);     
    const dbp = Number(form.dbp);     
    const pulse = Number(form.pulse);     
    return sbp > 0 && dbp > 0 && pulse > 0 && !!form.at;   
  }, [form]);    

  const onSubmit = (e) => {     
    e.preventDefault();     
    if (!canSubmit) return;      

    const entry = {       
      id: makeId(),       
      sbp: Number(form.sbp),       
      dbp: Number(form.dbp),       
      pulse: Number(form.pulse),       
      at: form.at,       
      status: classifyBP(Number(form.sbp), Number(form.dbp)),     
    };      

    // 최근 순으로 정렬되게 앞에 삽입     
    setRecords((prev) => [entry, ...prev]);      

    // 입력값 초기화 (시각은 유지하고 싶다면 제거)     
    setForm({ sbp: "", dbp: "", pulse: "", at: "" });   
  };    

  const remove = (id) => {     
    setRecords((prev) => prev.filter((r) => r.id !== id));   
  };    

  return (     
    <div style={{ display: "grid", gap: 16, maxWidth: 520 }}>       
      <h2>활력징후 기록</h2>        

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>         
        <label>           
          SBP(수축기, mmHg)           
          <input name="sbp" value={form.sbp} onChange={handleChange} inputMode="numeric" />         
        </label>         
        <label>           
          DBP(이완기, mmHg)           
          <input name="dbp" value={form.dbp} onChange={handleChange} inputMode="numeric" />         
        </label>         
        <label>           
          Pulse(맥박, bpm)           
          <input name="pulse" value={form.pulse} onChange={handleChange} inputMode="numeric" />         
        </label>         
        <label>           
          측정 시각           
          <input type="datetime-local" name="at" value={form.at} onChange={handleChange} />         
        </label>          

        <div>           
          상태:{" "}           
          <strong             
            style={{               
              color:                 
                status === "고혈압 의심"                   
                  ? "crimson"                   
                  : status === "주의 필요"                   
                  ? "orange"                   
                  : "#2a7",             
            }}           
          >             
            {status}           
          </strong>         
        </div>          

        <button disabled={!canSubmit}>기록 추가</button>       
      </form>        

      <section>         
        <h3>기록 목록</h3>         
        {records.length === 0 ? (           
          <p>아직 기록이 없습니다.</p>         
        ) : (           
          <table border="1" cellPadding="8">             
            <thead>               
              <tr>                 
                <th>시각</th>                 
                <th>SBP</th>                 
                <th>DBP</th>                 
                <th>Pulse</th>                 
                <th>상태</th>                 
                <th>관리</th>               
              </tr>             
            </thead>             
            <tbody>               
              {records.map((r) => (                 
                <tr key={r.id}>                   
                  <td>{r.at.replace("T", " ")}</td>                   
                  <td>{r.sbp}</td>                   
                  <td>{r.dbp}</td>                   
                  <td>{r.pulse}</td>                   
                  <td>{r.status}</td>                   
                  <td>                     
                    <button onClick={() => remove(r.id)}>삭제</button>                   
                  </td>                 
                </tr>               
              ))}             
            </tbody>           
          </table>         
        )}       
      </section>     
    </div>   
  ); 
}