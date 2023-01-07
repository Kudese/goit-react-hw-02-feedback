import s from '../LeaveFeedback/LeaveFeedback.module.css';
export default function LeaveFeeedback({state , addFedback }) {
  console.log( Object.keys(state))
  return (
    <div className={s.container}>
      <h2>Please leave feedback</h2>
      {Object.keys(state).map((el)=>
      {return <button 
        key={el}
      className={s.btn} 
      type="button" 
      onClick={addFedback}
       name={el}>
      {el[0].toUpperCase() + el.slice(1)}
      </button>}
      )}
    
    </div>)
  
}
