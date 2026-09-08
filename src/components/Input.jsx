export default function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helperText,
  ...rest
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`input-field ${error ? 'input-field-error' : ''}`}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className="input-error">
          {error}
        </p>
      )}
      {!error && helperText && <p className="input-helper">{helperText}</p>}
    </div>
  );
}
