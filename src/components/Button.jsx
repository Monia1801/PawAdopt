export default function Button({ children, onClick, variant = 'primary', size = 'md', type = 'button', className = '' }) {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
}
