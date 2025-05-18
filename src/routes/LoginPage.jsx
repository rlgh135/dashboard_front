// src/routes/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';
import { useUIStore } from '../store/UIStore';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✨ 추후 API 연동 위치
    login({ email, name: email.split('@')[0] });
    addToast({ message: '로그인 성공!', type: 'success' });
    navigate('/dashboard');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
        <Button type="submit" className="w-full mt-2">
          Log In
        </Button>
      </form>
      <p className="text-sm text-center mt-4">
        계정이 없나요?{' '}
        <a href="/signup" className="text-blue-600 hover:underline">
          회원가입
        </a>
      </p>
    </div>
  );
}
