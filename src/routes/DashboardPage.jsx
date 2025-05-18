// src/routes/DashboardPage.jsx
import RecentChatCard from '../features/dashboard/RecentChatCard';
import TaskSummaryCard from '../features/dashboard/TaskSummaryCard';
import useAuthStore from '../store/AuthStore';

const DashboardPage = () => {
  const { user } = useAuthStore();

  // ✨ 추후 API 결과로 교체
  const recentChats = [
    { id: 1, roomName: '디자인팀', lastMsg: '내일까지 시안 부탁해요!' },
    { id: 2, roomName: '마케팅', lastMsg: '광고 문구 수정했습니다' },
  ];
  const taskStats = [
    { id: 1, title: 'To Do', count: 5 },
    { id: 2, title: 'Doing', count: 2 },
    { id: 3, title: 'Done', count: 12 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Welcome, {user?.name || 'User'}!
      </h1>

      {/* Task Summary */}
      <section className="grid grid-cols-3 gap-4 mb-8">
        {taskStats.map((t) => (
          <TaskSummaryCard key={t.id} title={t.title} count={t.count} />
        ))}
      </section>

      {/* Recent Chats */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Chats</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {recentChats.map((c) => (
            <RecentChatCard
              key={c.id}
              roomName={c.roomName}
              lastMsg={c.lastMsg}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;