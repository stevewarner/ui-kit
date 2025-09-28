import type { InputHTMLAttributes } from 'react';
import SearchIcon from '@/svgs/search.svg';
import CloseIcon from '@/svgs/close.svg';

import styles from './styles.module.css';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onClear?: () => void;
}

export const SearchInput = ({
  className,
  id,
  label = 'Search',
  placeholder = 'Search',
  value = '',
  onChange,
  onClear,
  ...props
}: SearchInputProps) => (
  <div className={styles.searchInputContainer}>
    <SearchIcon
      className={styles.searchIcon}
      height={20}
      width={20}
    />
    <label htmlFor={id} className={styles.visuallyHidden}>
      {label}
    </label>
    <input
      id={id}
      className={`${styles.searchInput} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
    {value && onClear && (
      <button
        type="button"
        className={styles.clearButton}
        aria-label="Clear search"
        onClick={() => onClear()}
      >
        <CloseIcon height={16} width={16} />
      </button>
    )}
  </div>
);
