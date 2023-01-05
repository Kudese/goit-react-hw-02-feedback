export default function LeaveFeeedback({ good, neutral, bad, addFedback }) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={addFedback} value={good} name="good">Good</button>
      <button type="button" onClick={addFedback} value={neutral} name="neutral">Neutral</button>
      <button type="button" onClick={addFedback} value={bad} name="bad">Bad</button>
    </div>
  );
}
