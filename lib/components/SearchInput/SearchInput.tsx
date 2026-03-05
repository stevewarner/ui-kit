import { Input, type InputProps } from '../Input';
import SearchIcon from '@/svgs/search.svg';
import CloseIcon from '@/svgs/close.svg';

import styles from './SearchInput.module.css';

interface SearchInputProps extends InputProps {
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
  showLabel = false,
  ...props
}: SearchInputProps) => (
  <div className={`${styles.searchInputContainer} ${className ?? ''}`}>
    {showLabel && label && (
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    )}
    <div className={styles.inputRow}>
      <SearchIcon
        id="search-icon"
        className={styles.searchIcon}
        height={20}
        width={20}
      />
      <Input
        id={id}
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        label={showLabel ? undefined : label}
        showLabel={false}
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          className={styles.clearButton}
          aria-label="Clear search"
          onClick={() => onClear()}
        >
          <CloseIcon id="close-icon" height={16} width={16} />
        </button>
      )}
    </div>
  </div>
);
