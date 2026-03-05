import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showLabel?: boolean;
}

export function Input({id, label, placeholder, value, onChange, className, showLabel = false, ...props}: InputProps) {
  return (
  <>
    <label htmlFor={id} className={showLabel ? undefined : styles.visuallyHidden}>
      {label}
    </label>
    <input
      id={id}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  </>
  )
}