import Label from './Label';
import FormError from './FormError';

const Input = ({
  id,
  label,
  error,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  ...rest
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
          error ? 'border-red-500' : 'focus:border-blue-300'
        }`}
        {...rest}
      />
      <FormError message={error} />
    </div>
  );
}

export default Input;