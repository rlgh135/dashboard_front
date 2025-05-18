// src/layouts/MainLayout.jsx
import { Outlet, NavLink } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold">ChatPortfolio</div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-semibold text-blue-400" : ""}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/chats">Chats</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;