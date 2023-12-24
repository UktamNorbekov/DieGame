import "./Die.css";
function Die({ val, color = "staleblue" }) {
  return <div className="Die" style={{backgroundColor: color}}>{val}</div>
}

export default Die;