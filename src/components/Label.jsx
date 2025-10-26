export default function Label({ htmlFor, children, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`label ${className}`}
    >
      {children}
    </label>
  );
}
