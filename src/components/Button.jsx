export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'danger'
  type = 'button',
  className = '',
  ...rest
}) {
  const base = 'px-4 py-2 rounded font-medium transition';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
