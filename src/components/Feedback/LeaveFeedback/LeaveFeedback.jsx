import s from '../LeaveFeedback/LeaveFeedback.module.css';
export default function LeaveFeeedback({ good, neutral, bad, addFedback }) {
  return (
    <div className={s.container}>
      <h2>Please leave feedback</h2>
      <button 
      className={s.btn} 
      type="button" 
      onClick={addFedback} 
      name="good">
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={addFedback}
        name="neutral"
      >
        Neutral
      </button>
      <button 
      className={s.btn} 
      type="button" 
      onClick={addFedback}
       name="bad">
        Bad
      </button>
    </div>
  );
}
