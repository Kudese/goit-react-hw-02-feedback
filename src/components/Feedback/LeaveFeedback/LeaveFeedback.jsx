import PropTypes from 'prop-types';
import s from '../LeaveFeedback/LeaveFeedback.module.css';
export default function LeaveFeeedback({state , onAddFedback }) {
  console.log( Object.keys(state))
  return (
    <div className={s.container}>
      <h2>Please leave feedback</h2>
      {Object.keys(state).map((el)=>
      {return <button 
        key={el}
      className={s.btn} 
      type="button" 
      onClick={onAddFedback}
       name={el}>
      {el[0].toUpperCase() + el.slice(1)}
      </button>}
      )}
    
    </div>)
  
}
LeaveFeeedback.propTypes={
  state: PropTypes.exact(
    {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }
  )
}