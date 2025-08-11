import styles from './styles.module.css'

// variant ENUM
/* eslint-disable-next-line react-refresh/only-export-components */
export enum ROLE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ROLE;
}

export function Button({className, variant = ROLE.PRIMARY, ...props}: ButtonProps) {
  return <button className={`${styles.button} ${styles[variant]} ${className}`} {...props} />
}
