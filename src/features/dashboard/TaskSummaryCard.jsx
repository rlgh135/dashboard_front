const TaskSummaryCard = ({ title, count }) => {
  return (
    <div className="p-4 bg-white rounded shadow-sm text-center">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <span className="text-2xl font-bold">{count}</span>
    </div>
  );
}
export default TaskSummaryCard;