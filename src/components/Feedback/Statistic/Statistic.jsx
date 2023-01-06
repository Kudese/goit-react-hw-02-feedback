import s from '../Statistic/Statistics.module.css';
import Notification from '../Notification/Notification';
export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.conteiner}>
      <h2>Statistics</h2>
      {total() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <> 
        <span>Good:{good}</span>
         <span>Neutral:{neutral}</span>
         <span>Bad:{bad}</span>
         <span>Total:{total()}</span>
         <span>Positive feedback: {positivePercentage()}%</span>
         </>
      )}
    </div>
  );
}
