import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && <Loader2 size={16} className="btn-spinner" aria-hidden="true" />}
      {!loading && Icon && iconPosition === 'left' && <Icon size={16} aria-hidden="true" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon size={16} aria-hidden="true" />}
    </button>
  );
}
