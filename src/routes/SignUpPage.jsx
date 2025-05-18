// src/routes/SignupPage.jsx
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';


const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSignup = (e) => {
    e.preventDefault();

    const fakeUser = { email: 'test@example.com', name: 'Test User' };
    login(fakeUser); // Zustand에 유저 저장

    navigate('/dashboard'); // 회원가입 후 대시보드 이동
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
