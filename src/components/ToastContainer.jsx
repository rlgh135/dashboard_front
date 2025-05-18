
import { useUIStore } from '../store/UIStore';
import Toast from './Toast';

const ToastContainer = () => {
  const { toasts, removeToast } = useUIStore();

  return (
    <>
      {toasts.map((t) => (
        <Toast
          key={t.id}
          message={t.message}
          type={t.type}
          duration={t.duration}
          onClose={() => removeToast(t.id)}
        />
      ))}
    </>
  );
}

export default ToastContainer;
