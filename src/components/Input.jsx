export default function Input({ 
  id, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = ''
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`input ${className}`}
    />
  );
}
