const RecentChatCard = ({ roomName, lastMsg }) => {
  return (
    <div className="p-4 bg-white rounded shadow-sm hover:shadow">
      <h3 className="font-semibold">{roomName}</h3>
      <p className="text-sm text-gray-600 truncate">{lastMsg}</p>
    </div>
  );
}
export default RecentChatCard; 