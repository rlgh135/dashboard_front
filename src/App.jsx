// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import DashboardPage from './routes/DashboardPage';
// import ChatListPage from './routes/ChatListPage';
// import ChatRoomPage from './routes/ChatRoomPage';
import TaskPage from './routes/TaskPage';
// import SettingsPage from './routes/SettingsPage';
import ToastContainer from './components/ToastContainer';
import ModalContainer from './components/ModalContainer';
import useAuthStore from './store/AuthStore';

function App() {  
  const { user } = useAuthStore();
  const isAuthenticated = !!user; // 추후 Zustand에서 관리될 값
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 인증 레이아웃 */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          {/* 메인 앱 레이아웃 */}
          <Route
            element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />}
          >
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="/chats" element={<ChatListPage />} /> */}
            {/* <Route path="/chats/:roomId" element={<ChatRoomPage />} /> */}
            <Route path="/tasks" element={<TaskPage />} />
            {/* <Route path="/settings" element={<SettingsPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

      //Toast, Modal
      <ToastContainer/>
      <ModalContainer/>
    </>
  );
}

export default App;
